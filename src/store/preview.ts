import { defineStore } from "pinia";
import { ref } from "vue";

export const inputPreviewStore = defineStore("preview", () => {
  // state
  const form = ref<Record<string, string>>({
    // Dados Pessoais
    nome: "",
    nacionalidade: "",
    cnh: "",
    idade: '',
    estadoCivil: '',
    endereco: '',
    estado: '',
    cidade: '',
    telefone: '',
    email: '',

    // Objetivo
    objetivo: '',

    // HABILIDADES
    habilidades: '',

    // Formação
    curso: '',
    instituicao: '',
    conclusaoStatus: '',
    anoConclusao: '',

    // CERTIFICAÇÕES
    cursoCertificacao: '',
    instituicaoCertificacao: '',
    conclusaoStatusCertificacao: '',
    anoConclusaoCertificacao: '',

    // Experiencia Profissional
    nomeEmpresa: '',
    cargo: '',
    periodoAtuacao: '',
    descricao: '',

    // styles
    hr: '',
  });

  // actions
  const updateForm = (field: string, newValue: any) => {
    form.value[field] = newValue;
  };

  return { form, updateForm };
});
