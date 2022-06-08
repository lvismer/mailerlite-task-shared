<template>
    <div class="container mx-auto max-w-2xl">
        <Back class="mb-4" />

        <span class="font-bold">Editing the subscriber</span>

        <div class="mt-4">
            <label for="name" class="block text-sm font-medium leading-5">
                Name
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="name" type="text" v-model="subscriber.name" required class="form-input w-full" />
            </div>
        </div>

        <div class="mt-4">
            <label for="email" class="block text-sm font-medium leading-5">
                Email
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="email" type="text" v-model="subscriber.email" required class="form-input w-full" />
            </div>
        </div>

        <div class="mt-4">
            <label for="status" class="block text-sm font-medium leading-5">
                Status
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <select id="status" v-model="subscriber.status" required class="form-input w-full">
                    <option value="active">Active</option>
                    <option value="unsubscribed">Unsubscribed</option>
                    <option value="junk">Junk</option>
                    <option value="bounced">Bounced</option>
                    <option value="unconfirmed">Unconfirmed</option>
                </select>
            </div>
        </div>

        <div class="mt-6 flex justify-between">
            <div class="font-bold">Additional fields</div>
        </div>

        <template v-for="field in subscriber.fields">
            <div class="mt-4">
                <div class="flex justify-between">
                    <label :for="field.id + '-label'" class="block text-sm font-medium leading-5">
                        {{ field.title }}
                    </label>
                    <button type="button" @click="deleteSubscriberField(field.id)" class="text-sm text-blue-600 hover:text-blue-800">Delete</button>
                </div>
                <div class="mt-1">
                    <!-- @todo - Issue with getting dynamic components working with the composition API -->
                    <BooleanField :id="field.id + '-label'" v-model:checked="field.value" v-if="field.type === 'boolean'" />
                    <DateField :id="field.id + '-label'" v-model="field.value" v-if="field.type === 'date'" />
                    <NumberField :id="field.id + '-label'" v-model="field.value" v-if="field.type === 'number'" />
                    <StringField :id="field.id + '-label'" v-model="field.value" v-if="field.type === 'string'" />
                </div>
            </div>
        </template>

        <button type="submit" @click="update" class="mt-4 btn-primary">Update</button>
    </div>
</template>

<script setup>
import {storeToRefs} from 'pinia';
import {useSubscribersStore} from '@/stores';
import {useRoute, useRouter} from 'vue-router';
import Back from '@/components/Back';

import BooleanField from '@/components/fields/BooleanField';
import DateField from '@/components/fields/DateField';
import NumberField from '@/components/fields/NumberField';
import StringField from '@/components/fields/StringField';

const subscribersStore = useSubscribersStore();
const { subscriber } = storeToRefs(subscribersStore);
const route = useRoute();
const router = useRouter();

subscribersStore.resetErrors();
subscribersStore.fetch(route.params.id);

const update = () => {
  subscribersStore.update(subscriber.value)
    .then(() => {
      router.push({name: 'subscribers.index'});
    })
    .catch(() => {});
};

const deleteSubscriberField = (id) => {
  subscribersStore.deleteField(id);
};
</script>
