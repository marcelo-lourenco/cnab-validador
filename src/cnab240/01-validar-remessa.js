import { readFile } from 'fs';
import { definePosicoes } from './mapa-posicoes.js';
import { nomeDirRem, nomeArquivo } from './00-config.js';

/**
 * Função que valida um arquivo de remessa ou retorno Bradesco Multipag de 240 posições.
 *
 * @param {string} arquivo - O conteúdo do arquivo a ser validado.
 * @returns {boolean} Retorna true se o arquivo é válido, caso contrário retorna false.
 */
function validarArquivoBradescoMultipag240(arquivo) {
  // separa cada linha do arquivo em registros
  const registros = arquivo.split('\n');

  // itera por cada registro do arquivo
  for (let i = 0; i < registros.length; i++) {
    const registro = registros[i];

    // verifica se o tamanho dos registros é o esperado (400 posições)
    if (registro.length !== 240) {
      console.error(`Registro ${i + 1} - Tamanho inválido - ${registro.length} posições`);
    }
  }

  definePosicoes(registros);

  // se chegou aqui, significa que o arquivo passou em todas as validações
  console.log('Arquivo válido.');
  return true;
}

// Lê o arquivo e chama a função validarArquivoBradescoMultipag400
readFile(`${nomeDirRem}/${nomeArquivo}`, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  validarArquivoBradescoMultipag240(data);
});