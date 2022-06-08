<template>
    <div class="container mx-auto max-w-2xl">
        <div class="sm:flex sm:items-center">
            <div class="sm:flex-auto">
                <h1 class="text-xl font-semibold text-gray-900">Fields</h1>
                <p class="mt-2 text-sm text-gray-700">Each subscriber can have any of the following fields linked to them. You are able to setup all the reusable fields. A subscriber then selects the fields they want to apply to themselves.</p>
            </div>
            <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <RouterLink :to="{name: 'fields.create'}" class="btn-primary">Add a field</RouterLink>
            </div>
        </div>

        <div class="-mx-4 mt-8 overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:-mx-6 md:mx-0 md:rounded-lg" v-if="fields.length">
            <table class="min-w-full divide-y divide-gray-300 transition">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Title</th>
                        <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Type</th>
                        <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                    <tr v-for="field in fields" :key="field.id">
                        <td class="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-6">
                            {{ field.title }}
                        </td>
                        <td class="px-3 py-4 text-sm text-gray-500">{{ field.type }}</td>
                        <td class="py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <RouterLink :to="{name: 'fields.edit', params: {id: field.id}}" class="text-blue-600 hover:text-blue-900">Edit<span class="sr-only">, {{ field.title }}</span></RouterLink>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div v-if="fields.loading" class="font-bold">Loading fields ...</div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useFieldsStore } from '@/stores';

const fieldsStore = useFieldsStore();
const { fields } = storeToRefs(fieldsStore);

fieldsStore.fetchAll();
</script>
