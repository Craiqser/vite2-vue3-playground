<template>
<footer>
	<span>User info</span>
	<span>Server info</span>
	<span>Connection status</span>
</footer>
</template>

<style scoped lang="scss">
$footer-background-color: #222;
$footer-color: #777;

footer {
	align-items: center;
	display: flex;
	height: 22px;
	overflow: hidden;
	padding: 0 5px;

	background-color: $footer-background-color;
	color: $footer-color;
	font-size: 10px;
}

span { margin: 0 5px; }
</style>
