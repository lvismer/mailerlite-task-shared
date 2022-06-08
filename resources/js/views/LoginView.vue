<template>
    <div class="min-h-screen mx-auto text-neutral-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8 max-w-xl">
        <Logo class="h-8 mb-8" />

        <div>
            <label for="email" class="block text-sm font-medium leading-5">
                Email address
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="email" type="email" v-model="form.email" required class="form-input w-full" />
            </div>
        </div>

        <div class="mt-6">
            <label for="password" class="block text-sm font-medium leading-5">
                Password
            </label>
            <div class="mt-1 rounded-md shadow-sm">
                <input id="password" type="password" v-model="form.password" required class="form-input w-full" />
            </div>
        </div>

        <div class="mt-6">
            <div class="flex justify-between items-center">
                <button type="submit" @click="login" class="btn-primary">Login</button>
                <div class="text-red-600" v-if="errors.message">
                    {{ errors.message }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/components/Logo';
import {reactive} from 'vue';
import {storeToRefs} from 'pinia';
import {useAuthStore} from '@/stores';
import {useRouter} from 'vue-router';

const form = reactive({ email: 'admin@mailerlite.com', password: 'admin' });
const authStore = useAuthStore();
const { errors } = storeToRefs(authStore);
const router = useRouter();

const login = () => {
  authStore.login(form.email, form.password).catch(() => {});
}
</script>
