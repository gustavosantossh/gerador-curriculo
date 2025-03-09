<script setup>

import { inputPreviewStore } from '@/store/preview';
import { BrasilApi } from '@/data/options';
import { ref } from 'vue';

const reefer = ref([]);

const getEstado = async () => {
    reefer.value = await BrasilApi();
}

getEstado();

const store = inputPreviewStore();
</script>

<template>

    <section class="bg-[#07090f] h-screen max-w-screen px-8 py-2 lg:px-12 lg:py-2">

        <section
            class="bg-white h-full max-w-full p-6 break-words text-xs lg:text-base whitespace-normal overflow-x-auto">

            <div id="content" class="">
                <!-- NOME COMPLETO -->
                <h1 class="font-medium lg:text-2xl mb-1">{{ store.form.nome }}</h1>

                <!-- DADOS PESSOAIS -->
                <div class="flex gap-2">
                    <p v-if="store.form.nacionalidade">{{ store.form.nacionalidade }},</p>
                    <p v-if="store.form.estadoCivil">{{ store.form.estadoCivil }},</p>
                    <p v-if="store.form.idade">{{ store.form.idade }} anos,</p>
                    <p v-if="store.form.cnh">CNH: {{ store.form.cnh }}</p>
                </div>

                <!-- ENDEREÇO -->
                <div class="flex gap-2">
                    <p v-if="store.form.endereco">
                        {{ store.form.endereco.concat(',') }}
                    </p>
                    <p v-if="store.form.cidade || store.form.estado">
                        {{store.form.cidade.toLowerCase().split(" ").map(word => word.charAt(0).toUpperCase() +
                            word.slice(1)).join(" ")}}-{{ store.form.estado }}
                    </p>
                </div>

                <!-- CONTATO -->
                <div class="flex gap-2">
                    <p> {{ store.form.telefone }}</p>
                    <span v-if="store.form.email || store.form.telefone">|</span>
                    <p><a href="mailto:{{ store.form.email }}"> {{ store.form.email }}</a></p>
                </div>

                <!-- OBJETIVOS -->
                <div v-if="store.form.objetivo" class="flex flex-col gap-2 mb-2 mt-5">
                    <h1 class="font-medium text-xl">Objetivo</h1>
                    <hr />
                    <p> {{ store.form.objetivo }} </p>
                </div>

                <!-- HABILIDADES -->
                <div v-if="store.form.habilidades" class="flex flex-col gap-2 mb-2 mt-5">
                    <h1 class="font-medium text-xl">Habilidades</h1>
                    <hr />
                    <p> {{ store.form.habilidades }} </p>
                </div>

                <!-- FORMAÇÃO ACADEMICA -->
                <div v-if="store.form.instituicao" class="flex flex-col gap-2 mb-2 mt-5">
                    <h1 class="font-medium text-xl">Formação Acadêmica</h1>
                    <hr />
                    <div class="flex gap-4">
                        <p> <span class="font-semibold">{{ store.form.instituicao }}</span>-{{ store.form.curso }} -
                            {{ store.form.conclusaoStatus }} {{ store.form.anoConclusao }}</p>
                    </div>
                </div>

                <!-- CERTIFICAÇÕES -->
                <div v-if="store.form.instituicaoCertificacao" class="flex flex-col gap-2 mb-2 mt-5">
                    <h1 class="font-medium text-xl">Certificações</h1>
                    <hr />
                    <div class="flex gap-4">
                        <p> <span class="font-semibold">{{ store.form.instituicaoCertificacao }}</span>-{{
                            store.form.cursoCertificacao }} - {{ store.form.conclusaoStatusCertificacao }} {{
                                store.form.anoConclusaoCertificacao }}</p>
                    </div>
                </div>

                <!-- EXPERIENCIA PROFISSIONAL -->
                <div v-if="store.form.nomeEmpresa" class="flex flex-col gap-2 mt-5 mb-5">
                    <h1 class="font-medium text-xl">Experiência Profissional</h1>
                    <hr />
                    <div class="">
                        <p class="font-semibold"> {{ store.form.nomeEmpresa }} - {{ store.form.periodoAtuacao }} </p>
                        <div v-if="store.form.cargo">
                            <p>Cargo: {{ store.form.cargo }}</p>
                            <p> {{ store.form.descricao }}</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    </section>
</template>
