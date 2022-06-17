<template>
    <header>
        <div class="bg-gray-50 shadow-sm py-6 mb-8">
            <div class="container mx-auto">
                <nav class="flex items-center">
                    <Logo class="h-9 mr-8" />
                    <RouterLink class="mr-4" to="/subscribers">Subscriptions</RouterLink>
                    <RouterLink :to="{name: 'fields.index'}">Fields</RouterLink>
                </nav>
            </div>
        </div>
    </header>

    <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router';
import Logo from '@/components/Logo';
</script>
