<script setup>

import { inputPreviewStore } from '@/store/preview';

const props = defineProps(['NomeInput', 'list'])

const store = inputPreviewStore();

</script>

<template>
    <select
        class="block w-full px-2 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-200 transition-all delay-50"  @change="store.updateForm(NomeInput, $event.target.value)">
        
        <option value=""></option>
        <option v-for="(lista, index) in list" :key="index" :value="lista"> {{ lista }} </option>
    </select>

</template>
