<template>
    <input type="number" class="form-input w-full" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script setup>
defineProps(['modelValue']);

defineEmits(['update:modelValue']);
</script>
