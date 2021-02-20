<script setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const { currentRoute } = useRouter();
const layout = computed(() => `${currentRoute.value.meta.layout || 'app'}-layout`);
</script>

<template>
<component :is='layout'>
	<router-view />
</component>
</template>

<style lang='scss'>
@import './assets/main.scss';
</style>
