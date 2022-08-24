<script setup>
const { data: count } = await useFetch("http://localhost:3003/product/allData");
</script>
<template>
  <p>{{ count }}</p>
</template>