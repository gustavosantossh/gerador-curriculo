<script setup>

import { inputPreviewStore } from '@/store/preview';

const props = defineProps(['NomeInput'])

const store = inputPreviewStore();

</script>

<template>
    <input
        class="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all delay-50 sm:text-sm"
        @input="store.updateForm(NomeInput, $event.target.value)">

</template>
