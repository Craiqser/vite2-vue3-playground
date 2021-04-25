<script setup>
import AppSidebarItem from './AppSidebarItem.vue';
import { defineProps } from 'vue';

defineProps({
	opened: {
		default: true,
		required: false,
		type: Boolean
	}
});
</script>

<template>
<aside class="navbar">
	<nav role="navigation">
		<app-sidebar-item :opened="opened" route="Dashboard">
			<svg id="ico-db" role="img" viewBox="-2 -2 28 28" xmlns="http://www.w3.org/2000/svg">
				<title>Dashboard</title>
				<path d="M11.6 16.2l-2-2 6.8-6 1.2 1.3zm8.8 6c2-2 3.535-5.117 3.535-8.466 0-6.604-5.395-12-12-12s-12 5.396-12 12c0 3.35 1.302 6.326 3.535 8.466l1.674-1.675c-1.767-1.767-2.79-4.093-2.79-6.79A9.568 9.568 0 0 1 12 4.185a9.568 9.568 0 0 1 9.581 9.581c0 2.605-1.116 5.024-2.79 6.791Z" />
			</svg>
		</app-sidebar-item>
		<app-sidebar-item :opened="opened" route="Projects">
			<svg id="ico-pr" role="img" viewBox="-2 -2 28 28" xmlns="http://www.w3.org/2000/svg">
				<title>Projects</title>
				<path d="M19.056 23.992c-4.018-2.966-10.695-8.022-19-9.125l3.55-3.472c10.19 3.935 15.45 12.597 15.45 12.597zM.48 18.437l2.77-2.217C11.334 18.208 18.19 24 18.19 24 15.303 22.37 7.113 18.36.48 18.437zm2.543-8.042l9.25-8.23 1.992 1.153L9.78 8.41c4.83 3.983 10.19 8.22 9.71 15.127C14.734 16.799 9.127 11.98 3.024 10.395zm7.907-2.131L18.035 0c3.791 3.1 5.91 7.913 5.91 10.513-.309 3.322-3.558 11.35-3.858 12.236-.225-2.007 1.434-5.56-9.157-14.485z" />
			</svg>
		</app-sidebar-item>
		<app-sidebar-item :opened="opened" route="Ax" route-name="DevR7">
			<svg id="ico-ax" role="img" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
				<title>Axapta</title>
				<g style="stroke-width: 2px">
					<path id="ico-ax-gr" d="M43,34C48,30 51,26 55,22L55,54C40,48 25,48 10,51z" />
					<path id="ico-ax-bl" d="M30,34C40,22 43,15 43,15v33c-11,-2 -22,0 -33,3z" />
					<path id="ico-ax-yl" d="M5,50C24,32 25,20 30,6l0,39c-9,0 -17,4 -25,7z" />
				</g>
			</svg>
		</app-sidebar-item>
		<div style="flex-grow: 1;" />
		<app-sidebar-item :opened="opened" route="Admin">
			<svg id="ico-ps" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<title>Admin</title>
				<path d="M22.5 3c.57 0 .92.46.79 1.05l-3.7 16c-.13.57-.70 1.04-1.27 1.05H1.5c-.57 0-.92-.46-.79-1.04L3.7 4c.13-.57.7-1 1.27-1.04zm-8.38 9.35c.251-.4.23-.91-.09-1.25L9 5.13c-.38-.4-1-.5-1.5-.01-.43.5-.5 1-.1 1.46l4.7 5v.11l-7.4 5.37c-.45.33-.53.98-.2 1.453.346.5.99.6 1.44.27l8.23-5.9c.28-.2.44-.4.5-.5zm-2.8 4.4a.9.9 0 00-.9.9c0 .51.42.9.9.9h4.433a.9.9 0 00.9-.9.9.9 0 00-.9-.9z" />
			</svg>
		</app-sidebar-item>
		<app-sidebar-item :opened="opened" route="Settings">
			<svg id="ico-st" role="img" viewBox="-2 -2 30 30" xmlns="http://www.w3.org/2000/svg">
				<title>Settings</title>
				<path d="M9.85 0L9.7 0.8L9.1 3.78C8.15 4.16 7.28 4.68 6.5 5.31L3.6 4.31L2.81 4.06L2.41 4.78L0.41 8.22L0 8.94L0.6 9.47L2.85 11.44C2.76 11.95 2.66 12.46 2.66 13C2.66 13.54 2.76 14 2.85 14.56L0.6 16.53L0 17L0.41 17.78L2.41 21.22L2.81 21.94L3.6 21.69L6.5 20.69C7.28 21.32 8.14 21.85 9.09 22.22L9.69 25.12L9.85 26L15.47 26L15.63 25.19L16.22 22.22C17.17 21.85 18.03 21.32 18.81 20.69L21.72 21.69L22.5 21.94L22.91 21.22L24.91 17.78L25.31 17.06L24.72 16.53L22.47 14.56C22.55 14.05 22.66 13.54 22.66 13C22.66 12.46 22.55 11.95 22.47 11.44L24.72 9.47L25.31 8.94L24.91 8.22L22.91 4.78L22.5 4.06L21.72 4.31L18.81 5.31C18.03 4.68 17.17 4.16 16.22 3.78L15.63 0.81L15.47 0L9.84 0ZM11.47 2L13.84 2L14.34 4.6L14.47 5.19L15.03 5.38C16.17 5.73 17.2 6.33 18.06 7.13L18.5 7.53L19.06 7.34L21.6 6.47L22.78 8.5L20.78 10.28L20.31 10.66L20.47 11.25C20.6 11.82 20.66 12.40 20.66 13C20.66 13.6 20.6 14.18 20.47 14.75L20.34 15.34L20.78 15.72L22.78 17.5L21.6 19.53L19.06 18.66L18.5 18.47L18.06 18.88C17.1992 19.668 16.168 20.2695 15.0313 20.625L14.4688 20.81L14.34 21.41L13.84 24L11.47 24L11 21.4L10.84 20.8L10.3 20.6C9.15 20.27 8.1 19.7 7.25 18.88L6.81 18.5L6.25 18.7L3.7 19.5L2.5 17.5L4.5 15.7L5 15.3L4.8 14.75C4.7 14.18 4.66 13.6 4.66 13C4.66 12.4 4.7 11.8 4.8 11.25L5 10.66L4.5 10.28L2.5 8.5L3.7 6.5L6.25 7.3L6.8 7.5L7.25 7.1C8.1 6.3 9.15 5.7 10.3 5.38L10.8 5.2L11 4.6L11.47 2ZM12.66 8C9.91 8 7.66 10.25 7.66 13C7.66 15.75 9.9 18 12.66 18C15.4 18 17.66 15.75 17.66 13C17.66 10.25 15.4 8 12.66 8L12.66 8ZM12.66 10C14.3 10 15.66 11.3 15.66 13C15.66 14.7 14.3 16 12.66 16C11 16 9.66 14.67 9.66 13C9.66 11.3 11 10 12.66 10L12.66 10Z" />
			</svg>
		</app-sidebar-item>
	</nav>
</aside>
</template>

<style scoped lang='scss'>
@import '~/layouts/app.scss';

.navbar {
	align-items: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	overflow: hidden;
	background-color: $sidebar-background-color;

	nav {
		align-items: center;
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: space-between;
		padding: $sidebar-padding;
		width: 100%;

		a {
			width: 100%;
			text-decoration: none;
			color: $sidebar-color;

			&:not(:last-child) { margin-bottom: $sidebar-padding; }

			svg {
				max-width: $sidebar-ico-size;
				min-width: $sidebar-ico-size;
				fill: none;
				stroke: $sidebar-color;
			}

			#ico-ax { fill: #333; }

			&:hover {
				color: $sidebar-color-active;

				svg { fill: $sidebar-color-active; }
				#ico-ax { fill: $sidebar-color-active; }
			}

			&.router-link-active {
				color: $sidebar-color-active;

				#ico-ax {
					stroke: white;

					#ico-ax-gr { fill: #65a432; }
					#ico-ax-bl { fill: #186fb7; }
					#ico-ax-yl { fill: #ffd201; }
				}

				#ico-db { fill: #49ff86; }

				#ico-pr {
					stroke: #b61800;
					stroke-opacity: 0.3;
					fill: #628DB6;
				}

				#ico-ps {
					stroke: #b8b86e;
					fill: #0078be;
				}

				#ico-st {
					stroke: #abf5fa;
					fill: #0d1dff;
				}
			}
		}
	}
}
</style>
