import { ref } from "vue";

export const estadoCivil = [
  "Solteiro(a)",
  "Casado(a)",
  "Separado(a)",
  "Divorciado(a)",
  "Viúvo(a)",
  "União Estavel",
];

export const cursoConclusaoStatus = [
  "Concluído em:",
  "Previsão de Conclusão em:"
];

export const BrasilApi = async () => {
  try {
    const response = await fetch("https://brasilapi.com.br/api/ibge/uf/v1");

    const data = await response.json();

    return data;
  } catch {}
};

export const BrasilApiGetMunicipios = async (siglaUF: string) => {
  try {
    const response = await fetch(`https://brasilapi.com.br/api/ibge/municipios/v1/${siglaUF}?providers=dados-abertos-br,gov,wikipedia`);

    const data = await response.json();

    return data;
  } catch {}
};

// https://brasilapi.com.br/api/ibge/municipios/v1/{siglaUF}?providers=dados-abertos-br,gov,wikipedia