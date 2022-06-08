<template>
    <a class="flex text-blue-600" @click="router.back()">Back</a>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
