import { readdir, existsSync, mkdir, readFileSync } from 'fs';
import { createObjectCsvWriter as createCsvWriter } from 'csv-writer';

import {
  definePosicoes,
  dadosHeaderLabel,
  dadosRegistroTipo1
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
const cabecalhoHeaderLabel = [
  { id: 'identificacaoRegistro', title: 'identificacaoRegistro' },
  { id: 'identificacaoArquivoRemessa', title: 'identificacaoArquivoRemessa' },
  { id: 'literalRemessa', title: 'literalRemessa' },
  { id: 'codigoServico', title: 'codigoServico' },
  { id: 'literalServico', title: 'literalServico' },
  { id: 'codigoEmpresa', title: 'codigoEmpresa' },
  { id: 'nomeEmpresa', title: 'nomeEmpresa' },
  { id: 'nBradescoCamaraCompensacao', title: 'nBradescoCamaraCompensacao' },
  { id: 'nomeBancoExtenso', title: 'nomeBancoExtenso' },
  { id: 'dataGravacaoArquivo', title: 'dataGravacaoArquivo' },
  { id: 'branco1', title: 'branco1' },
  { id: 'identificacaoSistema', title: 'identificacaoSistema' },
  { id: 'nSequencialRemessa', title: 'nSequencialRemessa' },
  { id: 'branco2', title: 'branco2' },
  { id: 'nSequencialRegistro', title: 'nSequencialRegistro' },
]

// cabeçalho do arquivo com registros "RegistroTipo1"
const cabecalhoRegistroTipo1 = [
  { id: 'identificacaoRegistro', title: 'identificacaoRegistro' },
  { id: 'agenciaDebito', title: 'agenciaDebito' },
  { id: 'digitoAgenciaDebito', title: 'digitoAgenciaDebito' },
  { id: 'razaoContaCorrente', title: 'razaoContaCorrente' },
  { id: 'contaCorrente', title: 'contaCorrente' },
  { id: 'digitoContaCorrente', title: 'digitoContaCorrente' },
  { id: 'identificacaoEmpresaBeneficiariaBanco', title: 'identificacaoEmpresaBeneficiariaBanco' },
  { id: 'nControleParticipante', title: 'nControleParticipante' },
  { id: 'codigoBancoDebitadoCamaraCompensacao', title: 'codigoBancoDebitadoCamaraCompensacao' },
  { id: 'campoMulta', title: 'campoMulta' },
  { id: 'percentualMulta', title: 'percentualMulta' },
  { id: 'identificacaoTituloNoBanco', title: 'identificacaoTituloNoBanco' },
  { id: 'digitoAutoconferenciaNumeroBancario', title: 'digitoAutoconferenciaNumeroBancario' },
  { id: 'descontoBonificacaoPorDia', title: 'descontoBonificacaoPorDia' },
  { id: 'condicaoEmissaoPapeletaCobranca', title: 'condicaoEmissaoPapeletaCobranca' },
  { id: 'identSeEmiteBoletoDebitoAutomatico', title: 'identSeEmiteBoletoDebitoAutomatico' },
  { id: 'identificacaoOperacaoDoBanco', title: 'identificacaoOperacaoDoBanco' },
  { id: 'indicadorRateioCredito', title: 'indicadorRateioCredito' },
  { id: 'enderecamentoAviso', title: 'enderecamentoAviso' },
  { id: 'quantidadePagamentos', title: 'quantidadePagamentos' },
  { id: 'identificacaoOcorrencia', title: 'identificacaoOcorrencia' },
  { id: 'nDocumento', title: 'nDocumento' },
  { id: 'dataVencimentoTitulo', title: 'dataVencimentoTitulo' },
  { id: 'valorTitulo', title: 'valorTitulo' },
  { id: 'bancoEncarregadoCobranca', title: 'bancoEncarregadoCobranca' },
  { id: 'agenciaDepositaria', title: 'agenciaDepositaria' },
]


// Chama a função responsavel pelo loop em todos os registros de arquivo definindo a posição de cada dado
definePosicoes(registros);

// Escrever os dados do 'Header Label' em um arquivo CSV
const nomeArquivoHeaderLabel = `${pathCsv}/0-header-label.csv`;
const csvWriterHeaderLabel = createCsvWriter({
  path: nomeArquivoHeaderLabel,
  header: cabecalhoHeaderLabel
});
csvWriterHeaderLabel.writeRecords(dadosHeaderLabel)
  .then(() => console.log(`Arquivo ${nomeArquivoHeaderLabel} gerado com sucesso!`))
  .catch(error => console.error(error));

// ----------------------------------------------


// Escrever os dados do RegistroTipo1 em um arquivo CSV
const nomeArquivoRegistroTipo1 = `${pathCsv}/2-registro-tipo-1.csv`;
const csvWriterRegistroTipo1 = createCsvWriter({
  path: nomeArquivoRegistroTipo1,
  header: cabecalhoRegistroTipo1
});

csvWriterRegistroTipo1.writeRecords(dadosRegistroTipo1)
  .then(() => console.log(`Arquivo ${nomeArquivoRegistroTipo1} gerado com sucesso!`))
  .catch(error => console.error(error));


// ----------------------------------------------
