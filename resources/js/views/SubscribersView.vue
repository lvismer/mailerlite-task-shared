<template>
    <div class="container mx-auto max-w-2xl">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">Subscribers</h1>
                <p class="mt-2 text-sm text-gray-700">Manage the subscribers</p>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <RouterLink :to="{name: 'subscribers.create'}" class="btn-primary">Add a subscriber</RouterLink>
            </div>
        </div>

        <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg" v-if="subscribers.length">
            <table class="min-w-full divide-y divide-gray-300 transition">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Email</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Status</th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="subscriber in subscribers" :key="subscriber.id">
                    <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                        {{ subscriber.name }}
                    </td>
                    <td class="px-3 py-4 text-sm text-gray-500">{{ subscriber.email }}</td>
                    <td class="px-3 py-4 text-sm text-gray-500">{{ subscriber.status }}</td>
                    <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                        <RouterLink :to="{name: 'subscribers.edit', params: {id: subscriber.id}}" class="text-blue-600 hover:text-blue-900">Edit<span class="sr-only">, {{ subscriber.name }}</span></RouterLink>
                        <span class="mx-2">/</span>
                        <RouterLink :to="{name: 'subscribers.fields.index', params: {id: subscriber.id}}" class="text-blue-600 hover:text-blue-900">Fields<span class="sr-only">, {{ subscriber.name }}</span></RouterLink>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>

        <div v-if="subscribers.loading" class="mt-8 font-bold">Loading subscribers ...</div>
    </div>
</template>

<script setup>
import {RouterLink} from 'vue-router';
import {storeToRefs} from 'pinia';
import {useSubscribersStore} from '@/stores';

const subscribersStore = useSubscribersStore();
const { subscribers } = storeToRefs(subscribersStore);

subscribersStore.fetchAll();
</script>
