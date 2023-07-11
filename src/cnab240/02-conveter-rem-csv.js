import { readdir, existsSync, mkdir, readFileSync } from 'fs';

import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

import {
  definePosicoes,
  dadosHeaderArquivo,
  dadosHeaderLote,
  dadosSegmentoA,
  dadosSegmentoB,
  dadosTrailerLote,
  dadosTrailerArquivo
} from "./mapa-posicoes.js";

import {
  nomeDirRem,
  nomeDirCsv,
  nomeArquivo
} from './00-config.js';



readdir(`${nomeDirRem}/${nomeArquivo}`, function (err, files) {
  if (err) {
    console.log('Error getting directory information: ' + err);
  } else {
    files.forEach(function (file) {
      console.log(file);
    });
  }
});
const pathCsv = `${nomeDirCsv}/${nomeArquivo.slice(0, nomeArquivo.lastIndexOf('.'))}`;

if (!existsSync(pathCsv)) {
  mkdir(pathCsv, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`Diretório ${pathCsv} criado com sucesso!`);
    }
  });
} else {
  console.log(`O diretório ${pathCsv} já existe!`);
}


// Ler o arquivo de remessa CNAB240 do Bradesco
const data = readFileSync(`${nomeDirRem}/${nomeArquivo}`, 'utf-8');

// separa cada linha do arquivo em registros
const registros = data.split('\n');


// cabeçalho do arquivo com registros "Header Arquivo"
const cabecalhoHeaderArquivo = [
  { id: 'banco', title: 'banco' },
  { id: 'lote', title: 'lote' },
  { id: 'tipoRegistro', title: 'tipoRegistro' },
  { id: 'cnab', title: 'cnab' },
  { id: 'inscricaoTipo', title: 'inscricaoTipo' },
  { id: 'inscricaoNumero', title: 'inscricaoNumero' },
  { id: 'convenio', title: 'convenio' },
  { id: 'agenciaCodigo', title: 'agenciaCodigo' },
  { id: 'agenciaDv', title: 'agenciaDv' },
  { id: 'contaNumero', title: 'contaNumero' },
  { id: 'contaDv', title: 'contaDv' },
  { id: 'dv', title: 'dv' },
  { id: 'nome', title: 'nome' },
  { id: 'nomeBanco', title: 'nomeBanco' },
  { id: 'cnab2', title: 'cnab2' },
  { id: 'codigoRemRet', title: 'codigoRemRet' },
  { id: 'dataGeracao', title: 'dataGeracao' },
  { id: 'horaGeracao', title: 'horaGeracao' },
  { id: 'sequencia', title: 'sequencia' },
  { id: 'layout', title: 'layout' },
  { id: 'densidade', title: 'densidade' },
  { id: 'reservadoBanco', title: 'reservadoBanco' },
  { id: 'reservadoEmpresa', title: 'reservadoEmpresa' },
  { id: 'cnab3', title: 'cnab3' },
]

// cabeçalho do arquivo com registros "Header Lote"
const cabecalhoHeaderLote = [
  { id: 'banco', title: 'banco' },
  { id: 'lote', title: 'lote' },
  { id: 'tipoRegistro', title: 'tipoRegistro' },
  { id: 'tipoOperacao', title: 'tipoOperacao' },
  { id: 'tipoServico', title: 'tipoServico' },
  { id: 'formaLancamento', title: 'formaLancamento' },
  { id: 'layout', title: 'layout' },
  { id: 'cnab', title: 'cnab' },
  { id: 'inscricaoTipo', title: 'inscricaoTipo' },
  { id: 'inscricaoNumero', title: 'inscricaoNumero' },
  { id: 'convenio', title: 'convenio' },
  { id: 'agenciaCodigo', title: 'agenciaCodigo' },
  { id: 'agenciaDv', title: 'agenciaDv' },
  { id: 'contaNumero', title: 'contaNumero' },
  { id: 'contaDv', title: 'contaDv' },
  { id: 'dv', title: 'dv' },
  { id: 'nome', title: 'nome' },
  { id: 'informacao', title: 'informacao' },
  { id: 'logradouro', title: 'logradouro' },
  { id: 'numero', title: 'numero' },
  { id: 'complemento', title: 'complemento' },
  { id: 'cidade', title: 'cidade' },
  { id: 'cep', title: 'cep' },
  { id: 'complementoCep', title: 'complementoCep' },
  { id: 'estado', title: 'estado' },
  { id: 'formadePagamento', title: 'formadePagamento' },
  { id: 'cnab2', title: 'cnab2' },
  { id: 'ocorrencias', title: 'ocorrencias' },
]

// cabeçalho do arquivo com registros "Detalhes - Segmento A
const cabecalhoHeaderSegmentoA = [
  { id: 'banco', title: 'banco' },
  { id: 'lote', title: 'lote' },
  { id: 'tipoRegistro', title: 'tipoRegistro' },
  { id: 'numRegistro', title: 'numRegistro' },
  { id: 'segmento', title: 'segmento' },
  { id: 'movimentoTipo', title: 'movimentoTipo' },
  { id: 'movimentoCodigo', title: 'movimentoCodigo' },
  { id: 'camara', title: 'camara' },
  { id: 'bancoFav', title: 'bancoFav' },
  { id: 'agenciaCodigo', title: 'agenciaCodigo' },
  { id: 'agenciaDv', title: 'agenciaDv' },
  { id: 'contaNumero', title: 'contaNumero' },
  { id: 'contaDv', title: 'contaDv' },
  { id: 'dv', title: 'dv' },
  { id: 'nome', title: 'nome' },
  { id: 'seuNumero', title: 'seuNumero' },
  { id: 'dataPagamento', title: 'dataPagamento' },
  { id: 'moedaTipo', title: 'moedaTipo' },
  { id: 'moedaQuantidade', title: 'moedaQuantidade' },
  { id: 'valorPagamento', title: 'valorPagamento' },
  { id: 'nossoNumero', title: 'nossoNumero' },
  { id: 'dataReal', title: 'dataReal' },
  { id: 'valorReal', title: 'valorReal' },
  { id: 'informacao', title: 'informacao' },
  { id: 'codFinDoc', title: 'codFinDoc' },
  { id: 'codFinTed', title: 'codFinTed' },
  { id: 'codFinComplementar', title: 'codFinComplementar' },
  { id: 'cnab', title: 'cnab' },
  { id: 'aviso', title: 'aviso' },
  { id: 'ocorrencias', title: 'ocorrencias' }

]

// cabeçalho do arquivo com registros Detalhes - Segmento B
const cabecalhoHeaderSegmentoB = [
  { id: 'banco', title: 'banco' },
  { id: 'lote', title: 'lote' },
  { id: 'tipoRegistro', title: 'tipoRegistro' },
  { id: 'numRegistro', title: 'numRegistro' },
  { id: 'segmento', title: 'segmento' },
  { id: 'cnab', title: 'cnab' },
  { id: 'incricaoTipo', title: 'incricaoTipo' },
  { id: 'incricaoNumero', title: 'incricaoNumero' },
  { id: 'logradouro', title: 'logradouro' },
  { id: 'numero', title: 'numero' },
  { id: 'complemento', title: 'complemento' },
  { id: 'bairro', title: 'bairro' },
  { id: 'cidade', title: 'cidade' },
  { id: 'cep', title: 'cep' },
  { id: 'complementoCep', title: 'complementoCep' },
  { id: 'estado', title: 'estado' },
  { id: 'vencimento', title: 'vencimento' },
  { id: 'valorDocumento', title: 'valorDocumento' },
  { id: 'abatimento', title: 'abatimento' },
  { id: 'desconto', title: 'desconto' },
  { id: 'mora', title: 'mora' },
  { id: 'multa', title: 'multa' },
  { id: 'codDocFavorecido', title: 'codDocFavorecido' },
  { id: 'aviso', title: 'aviso' },
  { id: 'codigoUG', title: 'codigoUG' },
  { id: 'ispb', title: 'ispb' }
]

// cabeçalho do arquivo com registros "Trailer Lote"
const cabecalhoTrailerLote = [
  { id: 'banco', title: 'banco' },
  { id: 'lote', title: 'lote' },
  { id: 'tipoRegistro', title: 'tipoRegistro' },
  { id: 'cnab', title: 'cnab' },
  { id: 'qtdRegistros', title: 'qtdRegistros' },
  { id: 'valor', title: 'valor' },
  { id: 'qtdMoeda', title: 'qtdMoeda' },
  { id: 'numeroAvisoDebito', title: 'numeroAvisoDebito' },
  { id: 'cnab2', title: 'cnab2' },
  { id: 'ocorrencias', title: 'ocorrencias' },
]

// cabeçalho do arquivo com registros "Trailer Arquivo"
const cabecalhoTrailerArquivo = [
  { id: 'banco', title: 'banco' },
  { id: 'lote', title: 'lote' },
  { id: 'tipoRegistro', title: 'tipoRegistro' },
  { id: 'cnab', title: 'cnab' },
  { id: 'qtdLotes', title: 'qtdLotes' },
  { id: 'qtdRegistros', title: 'qtdRegistros' },
  { id: 'qtdContasConcil', title: 'qtdContasConcil' },
  { id: 'cnab2', title: 'cnab2' },
]


// Chama a função responsavel pelo loop em todos os registros de arquivo definindo a posição de cada dado
definePosicoes(registros);

// Escrever os dados do 'Header Arquivo' em um arquivo CSV
const nomeArquivoHeaderArquivo = `${pathCsv}/0-header-arquivo.csv`;
const csvWriterHeaderArquivo = createCsvWriter({
  path: nomeArquivoHeaderArquivo,
  header: cabecalhoHeaderArquivo
});
csvWriterHeaderArquivo.writeRecords(dadosHeaderArquivo)
  .then(() => console.log(`Arquivo ${nomeArquivoHeaderArquivo} gerado com sucesso!`))
  .catch(error => console.error(error));

// ----------------------------------------------

// Escrever os dados do 'Header Lote' em um arquivo CSV
const nomeArquivoHeaderLote = `${pathCsv}/1-header-lote.csv`;
const csvWriterHeaderLote = createCsvWriter({
  path: nomeArquivoHeaderLote,
  header: cabecalhoHeaderLote
});
csvWriterHeaderLote.writeRecords(dadosHeaderLote)
  .then(() => console.log(`Arquivo ${nomeArquivoHeaderLote} gerado com sucesso!`))
  .catch(error => console.error(error));

// ----------------------------------------------

// Escrever os dados do segmento A em um arquivo CSV
const nomeArquivoSegmentoA = `${pathCsv}/3-segmento-A.csv`;
const csvWriterSegmentoA = createCsvWriter({
  path: nomeArquivoSegmentoA,
  header: cabecalhoHeaderSegmentoA
});

csvWriterSegmentoA.writeRecords(dadosSegmentoA)
  .then(() => console.log(`Arquivo ${nomeArquivoSegmentoA} gerado com sucesso!`))
  .catch(error => console.error(error));


// ----------------------------------------------

// Escrever os dados do segmento B em um arquivo CSV
const nomeArquivoSegmentoB = `${pathCsv}/3-segmento-B.csv`;
const csvWriterSegmentoB = createCsvWriter({
  path: nomeArquivoSegmentoB,
  header: cabecalhoHeaderSegmentoB
});

csvWriterSegmentoB.writeRecords(dadosSegmentoB)
  .then(() => console.log(`Arquivo ${nomeArquivoSegmentoB} gerado com sucesso!`))
  .catch(error => console.error(error));

// ----------------------------------------------

// Escrever os dados do trailer lote em um arquivo CSV
const nomeArquivoTrailerLote = `${pathCsv}/5-trailer-lote.csv`;
const csvWriterTrailerLote = createCsvWriter({
  path: nomeArquivoTrailerLote,
  header: cabecalhoTrailerLote
});

csvWriterTrailerLote.writeRecords(dadosTrailerLote)
  .then(() => console.log(`Arquivo ${nomeArquivoTrailerLote} gerado com sucesso!`))
  .catch(error => console.error(error));

// ----------------------------------------------


// Escrever os dados do trailer arquivo em um arquivo CSV
const nomeArquivoTrailerArquivo = `${pathCsv}/9-trailer-arquivo.csv`;
const csvWriterTrailerArquivo = createCsvWriter({
  path: nomeArquivoTrailerArquivo,
  header: cabecalhoTrailerArquivo
});

csvWriterTrailerArquivo.writeRecords(dadosTrailerArquivo)
  .then(() => console.log(`Arquivo ${nomeArquivoTrailerArquivo} gerado com sucesso!`))
  .catch(error => console.error(error));



