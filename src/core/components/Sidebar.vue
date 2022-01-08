<template>
    <div class="h-screen overflow-auto fixed z-20 w-72 top-0 right-0 bg-black text-white pt-20 pl-8 pr-2 font-ibm text-xs leading-7.5">
        <div class="font-ibm-semi-bold text-primary-900">Create NFT</div>
        <div class="font-ibm-semi-bold text-primary-900">Stake / Sell NFT</div>
        <div class="font-ibm-semi-bold text-primary-900">Stake / Sell Land</div>
        <div class="font-ibm-semi-bold text-secondary-900">Free license</div>
        <accordion :border="false" :sidebar="true" class="mt-4">
            <template v-slot:caption>
                <div class="text-white font-ibm text-xs mt-0.5">
                    Marketplace
                </div>
            </template>
            <div class="font-ibm-light text-tertiary-400">
                <div>Browse</div>
                <div>Rankings</div>
                <div>Recently sold</div>
                <div>Recently added</div>
                <div>Recently canceled</div>
                <div>Biggest sales</div>
                <div>Ending soon</div>
                <div>Most viewed</div>
            </div>
        </accordion>
        <accordion :border="false" :sidebar="true" class="mt-4">
            <template v-slot:caption>
                <div class="text-white font-ibm text-xs mt-0.5">
                    Community
                </div>
            </template>
            <div class="font-ibm-light text-tertiary-400">
                <div>Help center</div>
                <div>Suggestion</div>
                <div>FAQ</div>
                <div>Blog</div>
            </div>
        </accordion>
        <div class="font-ibm-semi-bold pt-4">Developers</div>
        <div class="font-ibm-semi-bold">Affiliate program</div>
        <div class="font-ibm-semi-bold">Docs</div>

        <nftmx-divider class="border-tertiary-900 my-4"></nftmx-divider>
        
        <div class="font-ibm-semi-bold">New</div>
        <div class="font-ibm-semi-bold">Art</div>
        <div class="font-ibm-semi-bold">Domain names</div>
        <div class="font-ibm-semi-bold">Virtual worlds</div>
        <div class="font-ibm-semi-bold">Trading cards</div>
        <div class="font-ibm-semi-bold">Collectibles</div>
        <div class="font-ibm-semi-bold">Sports</div>
        <div class="font-ibm-semi-bold">Utility</div>
        <div class="font-ibm-semi-bold">LootBoxes</div>
        
        <nftmx-divider class="border-tertiary-900 my-4"></nftmx-divider>
        
        <accordion :border="false" :sidebar="true" class="mt-4">
            <template v-slot:caption>
                <div class="text-white font-ibm text-xs mt-0.5">
                    My Account
                </div>
            </template>
            <div class="font-ibm-light text-tertiary-400">
                <div>My collections</div>
                <div>My ledger</div>
                <div>My offers</div>
                <div>My referrals</div>
                <div>Gift items</div>
            </div>
        </accordion>
        <accordion :border="false" :sidebar="true" class="mt-4">
            <template v-slot:caption>
                <div class="text-white font-ibm text-xs mt-0.5">
                    Company
                </div>
            </template>
            <div class="font-ibm-light text-tertiary-400">
                <div>About</div>
                <div>Join the team</div>
            </div>
        </accordion>
        <accordion :border="false" :sidebar="true" class="mt-4">
            <template v-slot:caption>
                <div class="text-white font-ibm text-xs mt-0.5">
                    Social media
                </div>
            </template>
            <div class="font-ibm-light text-tertiary-400">
                <div class="flex"><div class="w-3 mr-4 text-center"><font-awesome-icon :icon="['fab', 'facebook-f']" /></div>Facebook</div>
                <div class="flex"><div class="w-3 mr-4 text-center"><font-awesome-icon :icon="['fab', 'telegram-plane']" /></div>Telegram</div>
                <div class="flex"><div class="w-3 mr-4 text-center"><font-awesome-icon :icon="['fab', 'discord']" /></div>Discord</div>
                <div class="flex"><div class="w-3 mr-4 text-center"><font-awesome-icon :icon="['fab', 'twitter']" /></div>Twitter</div>
                <div class="flex"><div class="w-3 mr-4 text-center"><font-awesome-icon :icon="['fab', 'medium-m']" /></div>Medium</div>
            </div>
        </accordion>
        <div class="font-ibm-semi-bold pt-4">Privacy of policy</div>
        <div class="font-ibm-semi-bold">Terms of service</div>
        <div class="py-4 flex gap-6">
            <font-awesome-icon :icon="['fas', 'moon']" class="text-lg text-primary-900"></font-awesome-icon>
            <font-awesome-icon :icon="['fas', 'sun']" class="text-lg text-tertiary-400"></font-awesome-icon>
        </div>
        <nftmx-divider class="border-tertiary-900 my-3"></nftmx-divider>
        <div class="pb-10 text-tertiary-400 text-xxs font-ibm">
            <img src="/images/nftmx-logo.png" alt="NFT mx" class="h-9 mt-4" />
            <div class="leading-5">
                <font-awesome-icon :icon="['far', 'copyright']" /> 2021 NFT.mx All rights reserved
            </div>
            <div class="flex items-center font-ibm-bold my-px">
                Powered by
                <img src="/images/atom-logo-footer.png" alt="" />
            </div>
            <div class="leading-4.5 pr-1">
                Atom Foundation is a Decentralized Financial (DeFi) liquidity ecosystem powered by proprietary protocols which underlines zero volatility platforms, a NFT (Non-fungible token) and altcoin marketplace with downside protection, post dex offerings (PDO), a dynamic AMM with multiple swap exchanges, cross network aggregation, as well as a CBDC alternative and price support game theoretic model.
            </div>
        </div>
    </div>
</template>