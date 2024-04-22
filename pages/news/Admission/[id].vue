<template>
    <div>
    <FullNewsTemplate :endpoint="`news/name/${newsId}`"></FullNewsTemplate>
    </div>
</template>

<script setup>
const route = useRoute();
const newsId = route.params.id;
</script>

<style>

</style>
