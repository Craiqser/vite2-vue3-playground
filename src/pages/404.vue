<script setup>
import ErrorPage from '~/components/ErrorPage.vue';
</script>

<template>
<error-page :code='404' descr='PageNotFound' />
</template>
