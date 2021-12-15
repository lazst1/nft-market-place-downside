import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';

export const routes = [
  {
    exact: true,
    path: '/',
    component: lazy(() => import('src/views/pages/Home')),
  },
  {
    exact: true,
    path: '/details',
    component: lazy(() => import('src/views/pages/Details')),
  },
  {
    exact: true,
    path: '/history',
    component: lazy(() => import('src/views/pages/History')),
  },
  {
    exact: true,
    path: '/trading-history',
    component: lazy(() => import('src/views/pages/TradingHistory')),
  },
  {
    exact: true,
    path: '/comingsoon',
    component: lazy(() => import('src/views/pages/Comingsoon')),
  },
  {
    exact: true,
    path: '/more',
    component: lazy(() => import('src/views/pages/More')),
  },
  {
    exact: true,
    path: '/my-collection',
    component: lazy(() => import('src/views/pages/account/MyCollection')),
  },
  {
    exact: true,
    path: "/my-offers",
    component: lazy(() => import("src/components/Myoffers")),
  },
  {
    exact: true,
    path: "/my-nft",
    component: lazy(() => import("src/components/Mynft")),
  },
  {
    exact: true,
    path: "/create-collection",
    component: lazy(() => import("src/views/pages/Collection/Create")),
  },
  {
    exact: true,
    path: "/create-nft",
    component: lazy(() => import("src/views/pages/Create/CreateNft")),
  },
  {
    exact: true,
    path: "/nft-list",
    component: lazy(() => import("src/views/pages/NFTList/index")),
  },

  {
    exact: true,
    path: '/404',
    component: lazy(() => import('src/views/pages/NotFound')),
  },
  {
    component: () => <Redirect to="/404" />,
  },
];
