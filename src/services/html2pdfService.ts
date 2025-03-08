// @ts-ignore
import html2pdf from "html2pdf.js";

const fileName = (): string => {
  const randomString = Math.random().toString(36).substring(5, 10);

  return randomString;
};

export function dowloadPdf() {
  const conteudo = document.querySelector("#content");

  let opt = {
    margin: 0.5,
    filename: "curriculo-" + fileName(),
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(conteudo).save();
}
