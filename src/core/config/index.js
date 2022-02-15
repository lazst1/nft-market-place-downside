export const walletList = [
    {
        id: 'metamask',
        name: 'MetaMask',
        imgUrl: '/images/wallet_logo/metamask.png',
        s_imgUrl: '/images/wallet_logo/small/metamask.png'
    },
    {
        id: 'connect-wallet',
        name: 'WalletConnect',
        imgUrl: '/images/wallet_logo/connect-wallet.png',
        s_imgUrl: '/images/wallet_logo/small/connect-wallet.png'
    },
    {
        id: 'rainbow',
        name: 'Rainbow',
        imgUrl: '/images/wallet_logo/rainbow.png',
        s_imgUrl: '/images/wallet_logo/small/rainbow.png'
    },
    {
        id: 'trust',
        name: 'Trust',
        imgUrl: '/images/wallet_logo/trust.png',
        s_imgUrl: '/images/wallet_logo/small/trust.png'
    },
    {
        id: 'argent',
        name: 'Argent',
        imgUrl: '/images/wallet_logo/argent.png',
        s_imgUrl: '/images/wallet_logo/small/argent.png'
    },
    {
        id: 'gnosis',
        name: 'Gnosis Safe Multisig',
        imgUrl: '/images/wallet_logo/gnosis.png',
        s_imgUrl: '/images/wallet_logo/small/gnosis.png'
    },
];

export const moralisChain = import.meta.env.VITE_MORALIS_CHAIN;
export const netExplorerURL = import.meta.env.VITE_NET_EXPLORER_URL;

export const marketAddress = import.meta.env.VITE_MARKET_CONTRACT_ADDRESS;

export const exchangeRate = 1000000000000000000;

export const saleType = {
    FIX_SALE: 'FIX-SALE',
    AUCTION: 'AUCTION'
}

export const networks = [
    {
        name: "Binance",
        icon: "/images/curr-3.png"
    }
]

export const currencies = [
    {
        name: "BNB",
        icon: "/images/curr-3.png"
    }
]

export const themeConfig = {
    xl3: 1920,
    xl: 1280,
    lg: 1024,
    md: 768,
    sm: 640
}

export const TokenType = {
    BNB: 'BNB',
    ETH: 'ETH',
    BTC: 'BTC',
    SOL: 'SOL'
}

export const syndications = [
    {
        img: '/images/img1.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/img2.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/img3.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/img4.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/img5.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/img6.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/img7.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/img8.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    }
];
