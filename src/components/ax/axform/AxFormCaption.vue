<script setup>
import { defineProps } from 'vue';

defineProps({
	buttons: {
		default: [true, true, true],
		require: false,
		type: Array
	},
	icoPath: {
		default: './src/components/ax/theme/caption-ico.png',
		require: false,
		type: String
	}
});
</script>

<template>
<div class='ax-form-caption'>
	<img alt='caption ico' :src='icoPath' />
	<span><slot /></span>
	<button v-if='buttons[0]' disabled>
		<svg viewBox='0 0 11 9'><path fill='none' stroke='black' d='M2,7 h6 v1 h-6 z' /></svg>
	</button>
	<button v-if='buttons[1]' disabled>
		<svg viewBox='0 0 11 9'><path fill='none' stroke='black' d='M1,0 h8 v8 h-8 v-8 v1 h8' /></svg>
	</button>
	<button v-if='buttons[2]' style='margin-left: 2px'>
		<svg viewBox='0 0 11 9'><path fill='none' stroke='black' d='M2,1 h1 v1 h1 v1 h3 v-1 h1 v-1 h1 M2,7 h1 v-1 h1 v-1 h1 v-1 h1 v1 h1 v1 h1 v1 h1' /></svg>
	</button>
</div>
</template>

<style scoped lang='scss'>
@import './../theme/theme-ax-panel.scss';

$caption-background-color: #52757b;
$caption-color: white;
$caption-h: 18px;
$caption-p: 2px;
$ruler: 11px;

.ax-form-caption {
	display: flex;
	justify-content: space-between;
	height: $caption-h;
	margin-right: $caption-p;
	overflow: hidden;
	padding: $caption-p;
	width: 100%;

	background-color: $caption-background-color;
	color: $caption-color;
	font-size: $ruler;
	font-weight: 600;

	img {
		height: 16px;
		width: 16px;
	}

	span {
		flex-grow: 1;
		margin: 0 $caption-p;
	}

	button {
		@include panel-borderlight;
		height: 14px;
		padding: 2px;
		width: 16px;
		outline: none;

		background-color: $panel-background-color;
		border: none;
		color: #000;

		svg {
			height: 10px;
			vertical-align: top;
			width: 12px;

			path {
				shape-rendering: crispEdges
			}
		}

		&:active:enabled { @include panel-borderlight-reverse; }
		&:disabled path {
			stroke: $border-color;
		}
	}
}
</style>
