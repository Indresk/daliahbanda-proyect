import { useLoaderData, useParams } from 'react-router';

import Index from './views/Index';
import LiveView from './views/LiveView';
import LogInView from './views/LogInView';
import AlbumsView from './views/AlbumsView';
import ProtectedRoute from './components/Login/ProtectedRoute';
import ErrorView from './views/ErrorView';
import App from './App';
import LatestView from './views/LatestView';
import NewsView from './views/NewsView';
import ShopView from './views/ShopView';
import AlbumsIndex from './components/views/Albums/AlbumsIndex';
import AlbumView from './components/views/Albums/AlbumView';
import Test from './views/Test';
import GalleryView from './views/GalleryView';
import GalleryIndex from './components/views/Gallery/GalleryIndex';
import FilterView from './components/views/Gallery/FilterView';
import { Component } from 'react';

export const routes = [
	{
		id: 'root',
		loader: () => ({}),
		Component: App,
		ErrorBoundary: ErrorView,
		children: [
			{
				index: true,
				loader: () => ({}),
				Component: Index,
			},
			{
				path: 'live',
				loader: () => ({}),
				Component: () => <LiveView />,
			},
			{
				path: 'albums',
				loader: () => ({}),
				Component: () => <AlbumsView />,
				children: [
					{
						index: true,
						Component: () => <AlbumsIndex />,
					},
					{
						path: ':albumName',
						loader: async ({ params }) => {
							const album = params.albumName; //await fetchAlbum(params.albumName);
							return { album };
						},
						Component: () => {
							return <AlbumView />;
						},
					},
				],
			},
			{
				path: 'latest',
				loader: () => ({}),
				Component: () => <LatestView />,
			},
			{
				path: 'news',
				loader: () => ({}),
				Component: () => <NewsView />,
			},
			{
				path: 'gallery',
				loader: () => ({}),
				Component: () => <GalleryView />,
				children:[
					{
						index: true,
						Component:()=><GalleryIndex/>

					},
					{
						path:':filtername',
						loader:()=>({}),
						Component:()=><FilterView/>
					}
				]
			},
			{
				path: 'shop',
				loader: () => ({}),
				Component: () => <ShopView />,
			},
			{
				path: 'login',
				loader: () => ({}),
				Component: () => <LogInView />,
			},
			{
				Component: ProtectedRoute,
				children: [
					{
						path: 'test',
						loader: () => ({ message: 'test loaded' }),
						Component: () => <Test />,
					},
				],
			},
		],
	},
];
