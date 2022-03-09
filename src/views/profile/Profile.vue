<script setup>
import { computed, ref, watchEffect } from 'vue';
import BodyContainer from '@/core/container/BodyContainer.vue';
import NftmxFooter from '@/core/container/NftmxFooter.vue';
import { useStore } from 'vuex'
import NftmxDivider from '@/core/components/NftmxDivider.vue';
import CardsContainer from '@/core/container/CardsContainer.vue';
import NavBarSearch from '@/core/container/NavBarSearch.vue';
import NftmxSearchInput from '@/core/components/NftmxSearchInput.vue';
import { marketAddress } from '@/core/config';
import ProfileSummary from './ProfileSummary.vue';
import ChooseCollection from './ChooseCollection.vue';
import ChooseNftGroup from './ChooseNftGroup.vue';
import NftCard from './components/NftCard.vue';
import OrderCard from './components/OrderCard.vue';
import moralisService from '../../core/services/moralis.service';
import erc721ABI from '@/core/config/erc721';
import marketService from '../../core/services/market.service';

const store = useStore();
const walletAddress = computed(() => store.getters['auth/getWalletAddress'])
const orders = ref([]);
const unhiddenOrders = computed(() => orders.value.filter(order => order.hiders.findIndex(id => id === store.state.user.id) === -1))
const collected = computed(() => unhiddenOrders.value.filter(order => order.orderStatus === -1));
const activeOrders = computed(() => unhiddenOrders.value.filter(order => order.sellerAddress === walletAddress.value && order.orderStatus === '0'))
const downsideOrdersBought = computed(() => unhiddenOrders.value.filter(order => order.buyerAddress === walletAddress.value && order.orderStatus === '2'))
const downsideOrdersSold = computed(() => unhiddenOrders.value.filter(order => order.sellerAddress === walletAddress.value && order.orderStatus === '2'))
const downsideOrders = computed(() => unhiddenOrders.value.filter(order => (order.buyerAddress === walletAddress.value && order.orderStatus === '2') || (order.sellerAddress === walletAddress.value && order.orderStatus === '2')))
const favoriteOrders = computed(() => {
    const filteredOrders = unhiddenOrders.value.filter(order => order.votes.findIndex(id => id === store.state.user.id) > -1)
    return filteredOrders.filter((order, index) => filteredOrders.findIndex(item => item.tokenAddress === order.tokenAddress && item.tokenId === order.tokenId) === index);
})
const hiddenOrders = computed(() => {
    const filteredOrders = orders.value.filter(order => order.hiders.findIndex(id => id === store.state.user.id) > -1)
    return filteredOrders.filter((order, index) => filteredOrders.findIndex(item => item.tokenAddress === order.tokenAddress && item.tokenId === order.tokenId) === index);
})
const loadingOrders = ref(true);
const loadingNFTs = ref(true);
const selectedGroup = ref({ key: 'COLLECTED', name: 'Collected', count: 0 });
const selectedTab = ref('ALL');
const counts = computed(() => {
    return {
        collected: collected.value.length,
        onSale: activeOrders.value.length,
        downside: downsideOrders.value.length,
        downsideBought: downsideOrdersBought.value.length,
        downsideSold: downsideOrdersSold.value.length,
        favorite: favoriteOrders.value.length,
        hidden: hiddenOrders.value.length,
        activity: 0,
    }
})

watchEffect(() => {
    if (walletAddress.value) {
        console.log('get nfts and orders')
        moralisService.getMyNFTs(walletAddress.value, 100, 0).then(async nftData => {
            const collectedNFTs = await JSON.parse(JSON.stringify(nftData));
            const nfts = await Promise.all(collectedNFTs.result.map(async (nft, index) => {
                const tokenContract = new store.state.web3.eth.Contract(
                    erc721ABI,
                    store.state.web3.utils.toChecksumAddress(nft.token_address),
                );

                const approvedAddress = await tokenContract.methods.getApproved(nft.token_id).call({
                    from: walletAddress.value, gas: 210000
                }).then(res => res);

                nft.approved = approvedAddress === marketAddress ? true : false;
                const tokenInfo = await marketService.getTokenInfo(nft.token_address, nft.token_id);
                const order = {
                    id: 'temp-order-' + index,
                    orderStatus: -1,
                    tokenAddress: nft.token_address,
                    tokenId: nft.token_id,
                    votes: tokenInfo.votes || [],
                    hiders: tokenInfo.hiders || [],
                    nft: nft
                }
                return order;
            }));
            orders.value = orders.value.concat(nfts);
            loadingNFTs.value = false;
        });
        marketService.getMyOrders(store.state.user.id).then(async data => {
            const nfts = await Promise.all(data.map(async order => {
                const nft = await moralisService.getNft(order.tokenAddress, order.tokenId).then(res => res);
                order.nft = nft;
                order.votes = order.votes || [];
                order.hiders = order.hiders || [];

                return order;
            }));
            orders.value = orders.value.concat(nfts);
            loadingOrders.value = false;
        })
    }
})
const selectGroup = (value) => {
    switch (value) {
        case 'COLLECTED':
            selectedGroup.value = { key: 'COLLECTED', name: 'Collected' };
            break;
        case 'ON_SALE':
            selectedGroup.value = { key: 'ON_SALE', name: 'On Sale' };
            break;
        case 'DOWNSIDE':
            selectedGroup.value = { key: 'DOWNSIDE', name: 'Downside Protection' };
            break;
        case 'FAVORITE':
            selectedGroup.value = { key: 'FAVORITE', name: 'Favorite' };
            break;
        case 'HIDDEN':
            selectedGroup.value = { key: 'HIDDEN', name: 'Hidden' };
            break;
        case 'ACTIVITY':
            selectedGroup.value = { key: 'ACTIVITY', name: 'Activity' };
            break;
        case 'OFFERS':
            selectedGroup.value = { key: 'OFFERS', name: 'Offers' };
            break;
        default:
            break;
    }
}

const selectTab = (value) => {
    switch (value) {
        case 'ALL':
            selectedTab.value = 'ALL';
            break;
        case 'BOUGHT':
            selectedTab.value = 'BOUGHT';
            break;
        case 'SOLD':
            selectedTab.value = 'SOLD';
            break;
        default:
            break;
    }
}

const approve = (token) => {
    console.log('approve', token);
}
const handleVote = (order) => {
    const index = orders.value.findIndex(item => item.id === order.id);
    const userIndex = orders.value[index].votes.findIndex(id => id === store.state.user.id);
    if (userIndex > -1) {
        marketService.cancelVote(order.tokenAddress, order.tokenId, store.state.user.id).then(res => {
            orders.value[index].votes.splice(userIndex, 1);
        })
    } else {
        marketService.vote(order.tokenAddress, order.tokenId, store.state.user.id).then(res => {
            orders.value[index].votes.push(store.state.user.id);
        })
    }
}
const hideNFT = (order, hide) => {
    const tokens = orders.value.filter(item => item.tokenAddress === order.tokenAddress && item.tokenId === order.tokenId);
    if (hide) {
        marketService.hideToken(order.tokenAddress, order.tokenId, store.state.user.id).then(res => {
            tokens.map(token => {
                const index = orders.value.findIndex(item => item.id === token.id);
                orders.value[index].hiders.push(store.state.user.id);
            })
        })
    } else {
        marketService.unhideToken(order.tokenAddress, order.tokenId, store.state.user.id).then(res => {
            tokens.map(token => {
                const index = orders.value.findIndex(item => item.id === token.id);
                const userIndex = token.hiders.findIndex(id => id === store.state.user.id);
                orders.value[index].hiders.splice(userIndex, 1);
            })
        })
    }
}
const cancelOrder = (order) => {
    if (order.orderStatus === '0') {
        store.dispatch('market/cancelOrderBySeller', order.orderId)
    } else if (order.orderStatus === '2' && order.buyerAddress === store.state.user.walletAddress) {
        store.dispatch('market/cancelOrderByBuyer', order.orderId)
    }
}

</script>

<template>
    <nav-bar-search></nav-bar-search>
    <profile-summary />
    <body-container>
        <choose-collection />
        <nftmx-divider class="mt-4.75 mb-3"></nftmx-divider>
        <div class="2xl:flex justify-between text-white font-ibm-semi-bold text-sm pt-0.5">
            <choose-nft-group
                :counts="counts"
                :selectedGroup="selectedGroup"
                @select-group="selectGroup"
                @select-tab="selectTab"
            />
            <nftmx-search-input class="bg-tertiary-800 mt-3.25 2xl:my-0.75 sm:ml-4" />
        </div>
        <div v-if="selectedGroup.key === 'COLLECTED'" class="mt-12 2xl:mt-11 mb-22">
            <cards-container v-if="selectedGroup.key === 'COLLECTED'" class="place-items-center">
                <order-card
                    v-for="(order, index) in collected"
                    :key="index"
                    :order="order"
                    class="bg-tertiary-800"
                    @handle-vote="handleVote"
                    @hide-nft="hideNFT"
                    @cancel-order="cancelOrder"
                ></order-card>
            </cards-container>
            <div
                v-if="loadingNFTs"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >Loading...</div>
            <div
                v-if="!loadingNFTs && collected.length === 0"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >No NFTs found</div>
        </div>
        <div v-if="selectedGroup.key === 'ON_SALE'" class="mt-12 2xl:mt-11 mb-22">
            <cards-container class="place-items-center">
                <order-card
                    v-for="(order, index) in activeOrders"
                    :key="index"
                    :order="order"
                    class="bg-tertiary-800"
                    @handle-vote="handleVote"
                    @hide-nft="hideNFT"
                    @cancel-order="cancelOrder"
                ></order-card>
            </cards-container>
            <div
                v-if="loadingOrders"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >Loading...</div>
            <div
                v-if="!loadingOrders && activeOrders.length === 0"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >No orders found</div>
        </div>
        <div v-if="selectedGroup.key === 'DOWNSIDE'" class="mt-12 2xl:mt-11 mb-22">
            <div v-if="selectedTab === 'ALL'">
                <cards-container class="place-items-center">
                    <order-card
                        v-for="(order, index) in downsideOrders"
                        :key="index"
                        :order="order"
                        class="bg-tertiary-800"
                        @handle-vote="handleVote"
                        @hide-nft="hideNFT"
                        @cancel-order="cancelOrder"
                    ></order-card>
                </cards-container>
                <div
                    v-if="!loadingOrders && downsideOrders.length === 0"
                    class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
                >No orders found</div>
            </div>
            <div v-if="selectedTab === 'BOUGHT'" class="mt-12 2xl:mt-11 mb-22">
                <cards-container class="place-items-center">
                    <order-card
                        v-for="(order, index) in downsideOrdersBought"
                        :key="index"
                        :order="order"
                        class="bg-tertiary-800"
                        @handle-vote="handleVote"
                        @hide-nft="hideNFT"
                        @cancel-order="cancelOrder"
                    ></order-card>
                </cards-container>
                <div
                    v-if="!loadingOrders && downsideOrdersBought.length === 0"
                    class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
                >No orders found</div>
            </div>
            <div v-if="selectedTab === 'SOLD'" class="mt-12 2xl:mt-11 mb-22">
                <cards-container class="place-items-center">
                    <order-card
                        v-for="(order, index) in downsideOrdersSold"
                        :key="index"
                        :order="order"
                        class="bg-tertiary-800"
                        @handle-vote="handleVote"
                        @hide-nft="hideNFT"
                        @cancel-order="cancelOrder"
                    ></order-card>
                </cards-container>
                <div
                    v-if="!loadingOrders && downsideOrdersSold.length === 0"
                    class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
                >No orders found</div>
            </div>
            <div
                v-if="loadingOrders"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >Loading...</div>
        </div>
        <div v-if="selectedGroup.key === 'FAVORITE'" class="mt-12 2xl:mt-11 mb-22">
            <cards-container class="place-items-center">
                <order-card
                    v-for="(order, index) in favoriteOrders"
                    :key="index"
                    :order="order"
                    class="bg-tertiary-800"
                    @handle-vote="handleVote"
                    @hide-nft="hideNFT"
                    @cancel-order="cancelOrder"
                ></order-card>
            </cards-container>
            <div
                v-if="loadingOrders"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >Loading...</div>
            <div
                v-if="!loadingOrders && favoriteOrders.length === 0"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >No orders found</div>
        </div>
        <div v-if="selectedGroup.key === 'HIDDEN'" class="mt-12 2xl:mt-11 mb-22">
            <cards-container class="place-items-center">
                <order-card
                    v-for="(order, index) in hiddenOrders"
                    :key="index"
                    :order="order"
                    class="bg-tertiary-800"
                    @handle-vote="handleVote"
                    @hide-nft="hideNFT"
                    @cancel-order="cancelOrder"
                ></order-card>
            </cards-container>
            <div
                v-if="loadingOrders"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >Loading...</div>
            <div
                v-if="!loadingOrders && hiddenOrders.length === 0"
                class="h-96 font-ibm-bold text-tertiary-500 text-lg flex items-center justify-center"
            >No orders found</div>
        </div>
    </body-container>
    <nftmx-footer />
</template>
