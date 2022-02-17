import MoralisService from "@/core/services/moralis.service";

export const moralis = {
    namespaced: true,
    state: {
    },
    actions: {
        getMyNFTs({ commit, rootState }) {
            MoralisService.getMyNFTs(rootState.user.walletAddress, 40, 0).then(nftData => {
                rootState.user.nftData = JSON.parse(JSON.stringify(nftData));
            })
        },
    },
    getters: {
    },
    mutations: {
    }
}
