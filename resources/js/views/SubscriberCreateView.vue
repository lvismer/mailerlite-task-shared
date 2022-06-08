<template>
    <div class="container mx-auto max-w-2xl">
        <Back class="mb-4" />

        <span class="font-bold">Add a new subscriber</span>

        <div class="mt-4">
            <label for="name" class="block text-sm font-medium leading-5">
                Name
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="name" type="text" v-model="subscriber.name" required class="form-input w-full" :class="{'error': errors.name}" />
            </div>
            <span class="text-xs text-red-500" v-if="errors.name">{{ errors.name[0] }}</span>
        </div>

        <div class="mt-4">
            <label for="email" class="block text-sm font-medium leading-5">
                Email
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="email" type="text" v-model="subscriber.email" required class="form-input w-full" :class="{'error': errors.email}" />
            </div>
            <span class="text-xs text-red-500" v-if="errors.email">{{ errors.email[0] }}</span>
        </div>

        <div class="mt-4">
            <label for="status" class="block text-sm font-medium leading-5">
                Status
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <select id="status" v-model="subscriber.status" required class="form-input w-full" :class="{'error': errors.status}">
                    <option value="active">Active</option>
                    <option value="unsubscribed">Unsubscribed</option>
                    <option value="junk">Junk</option>
                    <option value="bounced">Bounced</option>
                    <option value="unconfirmed">Unconfirmed</option>
                </select>
            </div>
            <span class="text-xs text-red-500" v-if="errors.status">{{ errors.status[0] }}</span>
        </div>

        <button type="submit" @click="create" class="mt-4 btn-primary">Create</button>
    </div>
</template>

<script setup>
import {storeToRefs} from 'pinia';
import {useSubscribersStore} from '@/stores';
import {useRoute, useRouter} from 'vue-router';
import Back from '@/components/Back';

const subscribersStore = useSubscribersStore();
const { subscriber, errors } = storeToRefs(subscribersStore);
const route = useRoute();
const router = useRouter();

subscribersStore.reset();
subscribersStore.resetErrors();

const create = () => {
  subscribersStore.create(subscriber.value)
    .then(() => {
      router.push({name: 'subscribers.index'});
    })
    .catch(() => {});
};
</script>
