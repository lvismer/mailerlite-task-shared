<template>
    <div class="container mx-auto max-w-2xl">
        <span class="font-bold">Editing the field</span>

        <div class="mt-4">
            <label for="title" class="block text-sm font-medium leading-5">
                Title
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="title" type="text" v-model="field.title" required class="form-input w-full" :class="{'error': errors.title}" />
            </div>
            <span class="text-xs text-red-500" v-if="errors.title">{{ errors.title[0] }}</span>
        </div>

        <div class="mt-4">
            <label for="type" class="block text-sm font-medium leading-5">
                Type
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <select id="type" v-model="field.type" required class="form-input w-full" :class="{'error': errors.type}">
                    <option value="boolean">Boolean</option>
                    <option value="date">Date</option>
                    <option value="number">Number</option>
                    <option value="string">String</option>
                </select>
            </div>
            <span class="text-xs text-red-500" v-if="errors.type">{{ errors.type[0] }}</span>
        </div>

        <button type="submit" @click="update" class="mt-4 btn-primary">Update</button>
    </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useFieldsStore } from '@/stores';
import { useRoute, useRouter } from 'vue-router';

const fieldsStore = useFieldsStore();
const { field, errors } = storeToRefs(fieldsStore);
const route = useRoute();
const router = useRouter();

fieldsStore.resetErrors();
fieldsStore.fetch(route.params.id);

const update = () => {
  fieldsStore.update(field.value)
    .then(() => {
      router.push({name: 'fields.index'});
    })
    .catch(() => {});
};
</script>
