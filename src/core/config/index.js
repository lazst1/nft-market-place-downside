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

export const baseURL = import.meta.env.VITE_APP_SERVER_URL;
export const moralisChain = import.meta.env.VITE_MORALIS_CHAIN;
export const netExplorerURL = import.meta.env.VITE_NET_EXPLORER_URL;
export const cryptocompareApiKey = import.meta.env.VITE_CRYPTOCOMPARE_API_KEY;
export const marketAddress = import.meta.env.VITE_MARKET_CONTRACT_ADDRESS;

export const exchangeRate = 1000000000000000000;

export const defaultUser = {
    bio: "",
    email: "",
    instagram: "",
    name: "Your name",
    profile_banner: "/images/creators/profile-banner-1920.png",
    profile_img: "/images/creators/profile-big.png",
    twitter: "",
    website: ""
}

export const DEFAULT_USER_ID = '00000000-0000-0000-0000-000000000000';

export const saleType = {
    FIX_SALE: 'FIX-SALE',
    AUCTION: 'AUCTION'
}

export const networks = [
    {
        name: "Binance",
        icon: "/images/currencies/curr-3.png"
    }
]

export const currencies = [
    {
        name: "BNB",
        icon: "/images/currencies/curr-3.png"
    }
]

export const themeConfig = {
    xl3: 1920,
    xl2: 1536,
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
        img: '/images/nfts/img1.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img2.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img3.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img4.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img5.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img6.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img7.png',
        type: 'AUCTION',
        lockedValue: 1548325.56
    },
    {
        img: '/images/nfts/img8.png',
        type: 'FIX_SALE',
        fixPrice: 50000,
        lockedValue: 1548325.56
    }
];

export const assetDetailTabs = [
    'Details', 'About the creator', 'Chain info', 'Downside Protection'
]

export const popularSyndications = [
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: -31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: -31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: -31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    },
    {
        name: 'Mutant Ape Yacht Club',
        rate: 31.28,
        price: 50000
    }
]

export const defaultPagination = {
    page: 1,
    limit: 10
}

export const openseaTrendingCollections = [
    {
        "name": "Internet Game Token",
        "slug": "internet-game-token"
    },
    {
        "name": "Candy Hunters",
        "slug": "candy-hunters"
    },
    {
        "name": "XenoInfinity",
        "slug": "xenoinfinity"
    },
    {
        "name": "Rubber Duck Bath Party",
        "slug": "rubber-duck-bath-party"
    },
    {
        "name": "Swampverse",
        "slug": "swampverseofficial"
    },
    {
        "name": "Chromie Squiggle by Snowfro",
        "slug": "chromie-squiggle-by-snowfro"
    },
    {
        "name": "Emblem Vault [Ethereum]",
        "slug": "emblem-vault"
    },
    {
        "name": "PeopleInThePlaceTheyLove",
        "slug": "peopleintheplacetheylove"
    },
    {
        "name": "MultiverseVM",
        "slug": "multiversevm"
    },
    {
        "name": "TBAC",
        "slug": "tbac"
    },
    {
        "name": "Sneaky Vampire Syndicate",
        "slug": "sneaky-vampire-syndicate"
    },
    {
        "name": "The Sandbox ASSETS",
        "slug": "the-sandbox-assets"
    },
    {
        "name": "Bored Ape Yacht Club",
        "slug": "boredapeyachtclub"
    },
    {
        "name": "Invisible Friends",
        "slug": "invisiblefriends"
    },
    {
        "name": "Mutant Ape Yacht Club",
        "slug": "mutant-ape-yacht-club"
    },
    {
        "name": "CryptoPunks",
        "slug": "cryptopunks"
    },
    {
        "name": "3Landers",
        "slug": "3landers"
    },
    {
        "name": "Azuki",
        "slug": "azuki"
    },
    {
        "name": "CLONE X - X TAKASHI MURAKAMI",
        "slug": "clonex"
    },
    {
        "name": "NFT Worlds",
        "slug": "nft-worlds"
    },
    {
        "name": "CyberBrokers",
        "slug": "cyberbrokers"
    },
    {
        "name": "mfers",
        "slug": "mfers"
    },
    {
        "name": "tubby cats by tubby collective",
        "slug": "tubby-cats"
    },
    {
        "name": "Meebits",
        "slug": "meebits"
    },
    {
        "name": "Doodles",
        "slug": "doodles-official"
    },
    {
        "name": "The Sandbox",
        "slug": "sandbox"
    },
    {
        "name": "WonderPals",
        "slug": "wonderpals"
    },
    {
        "name": "RTFKT - MNLTH",
        "slug": "rtfkt-mnlth"
    },
    {
        "name": "Antonym: GENESIS",
        "slug": "antonymgenesis"
    },
    {
        "name": "CatBlox Genesis Collection",
        "slug": "catbloxgenesis"
    },
    {
        "name": "DourDarcels",
        "slug": "dourdarcels"
    },
    {
        "name": "Starcatchers",
        "slug": "starcatchersnft"
    },
    {
        "name": "Edenhorde",
        "slug": "edenhorde-official"
    },
    {
        "name": "Dippies",
        "slug": "dippies"
    },
    {
        "name": "Worldwide Webb Land",
        "slug": "worldwidewebbland"
    },
    {
        "name": "Karafuru",
        "slug": "karafuru"
    },
    {
        "name": "Cool Cats NFT",
        "slug": "cool-cats-nft"
    },
    {
        "name": "Tasty Bones XYZ",
        "slug": "tastybonesxyz"
    },
    {
        "name": "The Doggies (Snoop Dogg)",
        "slug": "snoop-dogg-doggies"
    },
    {
        "name": "Bored Ape Kennel Club",
        "slug": "bored-ape-kennel-club"
    },
    {
        "name": "DEGEN TOONZ COLLECTION",
        "slug": "degentoonz-collection"
    },
    {
        "name": "Cool Pets NFT",
        "slug": "coolpetsnft"
    },
    {
        "name": "HOWLERZ",
        "slug": "howlerz"
    },
    {
        "name": "GNSS by MGXS",
        "slug": "gnssbymgxs"
    },
    {
        "name": "Coolman's Universe",
        "slug": "coolmans-universe"
    },
    {
        "name": "Metroverse",
        "slug": "metroverse"
    },
    {
        "name": "Quirkies Originals",
        "slug": "quirkiesoriginals"
    },
    {
        "name": "VeeFriends",
        "slug": "veefriends"
    },
    {
        "name": "Decentraland",
        "slug": "decentraland"
    },
    {
        "name": "adidas Originals Into the Metaverse",
        "slug": "adidasoriginals"
    },
    {
        "name": "Pixelmon - Generation 1",
        "slug": "pixelmongen1"
    },
    {
        "name": "RaidParty Fighters",
        "slug": "raidpartyfighters"
    },
    {
        "name": "Loser Club Official",
        "slug": "loser-club-official"
    },
    {
        "name": "World of Women",
        "slug": "world-of-women-nft"
    },
    {
        "name": "DentedFeelsNFT",
        "slug": "dentedfeelsnft"
    },
    {
        "name": "Clementines Nightmare",
        "slug": "official-clementines-nightmare"
    },
    {
        "name": "HAPE PRIME",
        "slug": "hapeprime"
    },
    {
        "name": "T-O-S The Other Side",
        "slug": "tos-theotherside"
    },
    {
        "name": "SkuxxVerse Pass",
        "slug": "skuxxversepass"
    },
    {
        "name": "Do Not Buy! (Old Contract)",
        "slug": "soulz-monogatari"
    },
    {
        "name": "Acrocalypse",
        "slug": "acrocalypse"
    },
    {
        "name": "Psychedelics Anonymous Genesis",
        "slug": "psychedelics-anonymous-genesis"
    },
    {
        "name": "Hero Galaxy: Heroes",
        "slug": "hero-galaxy-heroes"
    },
    {
        "name": "Gutter Juice",
        "slug": "gutter-juice"
    },
    {
        "name": "I Like You, You're Weird",
        "slug": "ilyyw"
    },
    {
        "name": "Gray Boys",
        "slug": "grayboys"
    },
    {
        "name": "MURI by Haus",
        "slug": "murixhaus"
    },
    {
        "name": "Look Labs 420 Game",
        "slug": "420-game"
    },
    {
        "name": "Dooggies",
        "slug": "dooggies"
    },
    {
        "name": "Mavia Land",
        "slug": "mavia-land"
    },
    {
        "name": "alien frens",
        "slug": "alienfrensnft"
    },
    {
        "name": "Kaiju Kingz",
        "slug": "kaiju-kingz"
    },
    {
        "name": "HUXLEY Comics",
        "slug": "huxley-comics"
    },
    {
        "name": "Parallel Alpha",
        "slug": "parallelalpha"
    },
    {
        "name": "RaidParty Heroes",
        "slug": "raidparty"
    },
    {
        "name": "Creepz Genesis",
        "slug": "genesis-creepz"
    },
    {
        "name": "The Walking Dead Official",
        "slug": "thewalkingdeadofficial"
    },
    {
        "name": "Women Tribe NFT",
        "slug": "official-women-tribe"
    },
    {
        "name": "Bunny Buddies",
        "slug": "bunny-buddies"
    },
    {
        "name": "hausphases by Haus",
        "slug": "hausphases"
    },
    {
        "name": "The Orbs by BT",
        "slug": "theorbsbybt"
    },
    {
        "name": "Tales Of Tsuki Genesis",
        "slug": "tales-of-tsuki-genesis"
    },
    {
        "name": "Grails by PROOF Collective",
        "slug": "proof-collective-grails"
    },
    {
        "name": "BYOLand",
        "slug": "byoland"
    },
    {
        "name": "Llamaverse Genesis",
        "slug": "llamaverse-genesis"
    },
    {
        "name": "ALINFT",
        "slug": "alinft-official"
    },
    {
        "name": "10KTF: GUCCI GRAIL MINT PASS",
        "slug": "10ktf-gucci-grail-mint-pass"
    },
    {
        "name": "Farm Land by Pixels",
        "slug": "pixels-farm"
    },
    {
        "name": "DeadFellaz",
        "slug": "deadfellaz"
    },
    {
        "name": "OnChainMonkey",
        "slug": "onchainmonkey"
    },
    {
        "name": "Cereal Club",
        "slug": "cerealclub"
    },
    {
        "name": "JRNY CLUB OFFICIAL",
        "slug": "jrny-club-official"
    },
    {
        "name": "Town Star",
        "slug": "town-star"
    },
    {
        "name": "ZombieClub Token",
        "slug": "zombieclub-token"
    },
    {
        "name": "Troverse Planets",
        "slug": "troverse-planets"
    },
    {
        "name": "Boss Beauties",
        "slug": "bossbeauties"
    },
    {
        "name": "Bored Ape Chemistry Club",
        "slug": "bored-ape-chemistry-club"
    },
    {
        "name": "Cosmic Cats Official",
        "slug": "cosmiccatsofficial"
    },
    {
        "name": "Satoshi Runners Official",
        "slug": "satoshirunnersofficial"
    },
    {
        "name": "CrypToadz by GREMPLIN",
        "slug": "cryptoadz-by-gremplin"
    },
    {
        "name": "Super Ordinary Villains - SOV",
        "slug": "super-ordinary-villains-genesis"
    },
    {
        "name": "The Weirdo Ghost Gang",
        "slug": "the-weirdo-ghost-gang"
    },
    {
        "name": "Shadow Quest",
        "slug": "shadow-quest"
    }
]
