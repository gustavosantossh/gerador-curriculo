<script setup>
import { dowloadPdf } from '@/services/html2pdfService';
import LoadPdf from './LoadPdf.vue';
import { BrasilApi, BrasilApiGetMunicipios, estadoCivil, cursoConclusaoStatus } from '@/data/options';
import Input from './form/Input.vue';
import InputSelect from './form/InputSelect.vue';
import Label from './form/Label.vue';
import { ref } from 'vue';

const estados = ref([]);
const municipios = ref([]);

const getEstado = async () => {
    estados.value = await BrasilApi();
    estados.value = estados.value.map(element => element.sigla)
}

const getMunicipios = async (sigla) => {
    municipios.value = await BrasilApiGetMunicipios(sigla);
    municipios.value = municipios.value.map(element => element.nome)
}

function formSubmit(){
    try {
        dowloadPdf();
    } catch {
        alert("Error: não foi possivel gerar o pdf, por favor tente novamente!");
    }
}

getEstado();

</script>

<template>
    <section class="h-screen px-5 lg:p-5 break-words whitespace-normal lg:text-base ">
        
        <form @submit.prevent="formSubmit" method="POST">

            <!-- DADOS PESSOAIS -->
            <div class="grid grid-cols-12 gap-x-4 gap-y-3 lg:gap-x-2 mb-4">

                <h1 class="text-xl font-bold text-gray-700 col-span-12">1. Dados Pessoais</h1>

                <div class="lg:ml-4 col-span-12">
                    <Label :label="'Nome completo:'" />

                    <Input NomeInput="nome" name="nome" required/>
                </div>

                <div class="lg:ml-4 col-span-6 sm:col-span-4">
                    <Label :label="'Nacionalidade:'" />
                    <Input NomeInput="nacionalidade" name="nacionalidade" required/>
                </div>

                <div class="lg:ml-4 col-span-6 sm:col-span-4">
                    <Label :label="'Idade:'" />
                    <Input NomeInput="idade" name="idade" type="text" maxlength="2" pattern="^[0-9][0-9]$" required />
                </div>

                <div class="lg:ml-4 col-span-6 sm:col-span-4">
                    <Label :label="'Cnh:'" />
                    <Input NomeInput="cnh" name="cnh" placeholder="A/B" maxlength="12" />
                </div>

                <div class="lg:ml-4 col-span-6 sm:col-span-6">
                    <Label :label="'Estado Civil:'" />
                    <InputSelect NomeInput="estadoCivil" name="estadoCivil" :list="estadoCivil" required/>
                </div>

                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Endereço:'" />
                    <Input NomeInput="endereco" name="endereco" required/>
                </div>

                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Estado:'" />
                    <InputSelect NomeInput="estado" name="estado" :list="estados"
                        @change="getMunicipios($event.target.value);" />
                </div>

                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Cidade:'" />
                    <InputSelect NomeInput="cidade" name="cidade" :list="municipios" />
                </div>

                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Telefone:'" />
                    <Input NomeInput="telefone" name="telefone" maxlength="20" placeholder="00 0 0000-0000" />
                </div>

                <div class="lg:ml-4 col-span-12 sm:col-span-6">
                    <Label :label="'Email:'" />
                    <Input type="email" NomeInput="email" name="email" maxlength="50" placeholder="example@gmail.com" />
                </div>

            </div>

            <!-- OBJETIVO -->
            <div class="flex flex-col gap-2 mb-4">
                <h1 class="text-xl font-bold text-gray-700">2. Objetivo Profissional</h1>

                <div class="lg:ml-4">
                    <Label :label="'Objetivo:'" />
                    <Input NomeInput="objetivo" name="objetivo" />
                </div>
            </div>

            <!-- HABILIDADES -->
            <div class="flex flex-col gap-2 mb-4">
                <h1 class="text-xl font-bold text-gray-700">3. Habilidades</h1>

                <div class="lg:ml-4">
                    <Label :label="'Habilidades:'" />
                    <Input NomeInput="habilidades" name="habilidades" placeholder="JAVA | VUE | UX | UI" />
                </div>
            </div>

             <!-- FORMAÇÃO ACADÊMICA -->
            <div class="grid grid-cols-12 gap-2 mb-4">
                <h1 class="text-xl font-bold text-gray-700 col-span-12">4. Formação Acadêmica</h1>

                <div class="lg:ml-4 col-span-12 sm:col-span-6">
                    <Label :label="'Instituição de Ensino:'" />
                    <Input NomeInput="instituicao" name="instituicao" />
                </div>

                <div class="lg:ml-4 col-span-12 sm:col-span-6">
                    <Label :label="'Curso:'" />
                    <Input NomeInput="curso" name="curso" />
                </div>

                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Status:'" />
                    <InputSelect NomeInput="conclusaoStatus" name="conclusaoStatus" :list="cursoConclusaoStatus" />
                </div>
                
                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Ano de Conclusão:'" />
                    <Input NomeInput="anoConclusao" name="anoConclusao" />
                </div>
            </div>
            
            
            <!-- CERTIFICAÇÕES  -->
            <div class="grid grid-cols-12 gap-2 mb-4">
                <h1 class="text-xl font-bold text-gray-700 col-span-12">5. Certificações</h1>
                
                <div class="lg:ml-4 col-span-12 sm:col-span-6">
                    <Label :label="'Instituição de Ensino:'" />
                    <Input NomeInput="instituicaoCertificacao" name="instituicaoCertificacao" />
                </div>
                
                <div class="lg:ml-4 col-span-12 sm:col-span-6">
                    <Label :label="'Curso:'" />
                    <Input NomeInput="cursoCertificacao" name="cursoCertificacao"/>
                </div>
                
                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Status:'" />
                    <InputSelect NomeInput="conclusaoStatusCertificacao" name="conclusaoStatusCertificacao" :list="cursoConclusaoStatus" />
                </div>

                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Ano de Conclusão:'" />
                    <Input NomeInput="anoConclusaoCertificacao" name="anoConclusaoCertificacao" />
                </div>
            </div>

            <!-- Experiência Profissional -->
            <div class="grid grid-cols-12 gap-2 ">

                <h1 class="text-xl font-bold text-gray-700 col-span-12">6. Experiência Profissional</h1>

                <div class="lg:ml-4 col-span-12">
                    <Label :label="'Nome da empresa:'" />
                    <Input NomeInput="nomeEmpresa" />
                </div>

                <div class="lg:ml-4 col-span-6">
                    <Label :label="'Cargo:'" />
                    <Input NomeInput="cargo" />
                </div>

                <div class="lg:ml-4 col-span-6 ">
                    <Label :label="'Período de atuação:'" />
                    <Input NomeInput="periodoAtuacao" placeholder="2024-2025" />
                </div>

                <div class="lg:ml-4 mb-10 col-span-12">
                    <Label :label="'Descrição:'" />
                    <Input NomeInput="descricao" placeholder="" />
                </div>

            </div>

            <button class="p-2 w-full bg-red-500 font-semibold text-white rounded-md mb-10" type="submit">DOWNLOAD PDF NOW</button>

        </form>

    </section>

</template>
