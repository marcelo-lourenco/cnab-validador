
import { validaDadosHeaderArquivo, validaDadosHeaderLote, validaDadosSegmentoA, validaDadosSegmentoB, validaDadosTrailerLote, validaDadosTrailerArquivo } from "./valida-dados.js";


// Array para armazenar os dados dos registros por tipo
const dadosHeaderArquivo = [];
const dadosHeaderLote = [];
const dadosSegmentoA = [];
const dadosSegmentoB = [];
const dadosTrailerLote = [];
const dadosTrailerArquivo = [];

const posicoesHeaderArquivo = [];

let registroAtual = '';
let tipReg = '';

function posicao(ini, fin) {
  return registroAtual.slice((ini - 1), fin);
}

function definePosicoes(registros) {
  for (let i = 0; i < registros.length; i++) {

    registroAtual = registros[i].trim().length > 0 ? registros[i] : "";
    let tipoRegistro = registroAtual.length > 0 ? Number(posicao(8, 8)) : "";

    switch (tipoRegistro) {
      case 0:
        tipReg = "headerArquivo";
        break;
      case 1:
        tipReg = "headerLote";
        break;
      case 2:
        tipReg = "iniciaisLote";
        break;
      case 3:
        tipReg = "detalheSegmentos";
        break;
      case 4:
        tipReg = "finaisLote";
        break;
      case 5:
        tipReg = "trailerLote";
        break;
      case 9:
        tipReg = "trailerArquivo";
        break;
      default:
        tipReg = "";
        console.log(`Linha ${i + 1} vazia - Tipo de Registro não identificado`);
        break;
    }

    if (tipReg === "headerArquivo") {
      let banco = posicao(1, 3);
      let lote = posicao(4, 7);
      let tipoRegistro = posicao(8, 8);
      let cnab = posicao(9, 17);
      let inscricaoTipo = posicao(18, 18);
      let inscricaoNumero = posicao(19, 32);
      let convenio = posicao(33, 52);
      let agenciaCodigo = posicao(53, 57);
      let agenciaDv = posicao(58, 58);
      let contaNumero = posicao(59, 70);
      let contaDv = posicao(71, 71);
      let dv = posicao(72, 72);
      let nome = posicao(73, 102);
      let nomeBanco = posicao(103, 132);
      let cnab2 = posicao(133, 142);
      let codigoRemRet = posicao(143, 143);
      let dataGeracao = posicao(144, 151);
      let horaGeracao = posicao(152, 157);
      let sequencia = posicao(158, 163);
      let layout = posicao(164, 166);
      let densidade = posicao(167, 171);
      let reservadoBanco = posicao(172, 191);
      let reservadoEmpresa = posicao(192, 211);
      let cnab3 = posicao(212, 240);


      dadosHeaderArquivo.push({ banco, lote, tipoRegistro, cnab, inscricaoTipo, inscricaoNumero, convenio, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, nomeBanco, cnab2, codigoRemRet, dataGeracao, horaGeracao, sequencia, layout, densidade, reservadoBanco, reservadoEmpresa, cnab3 });

      validaDadosHeaderArquivo(i, banco, lote, tipoRegistro, cnab, inscricaoTipo, inscricaoNumero, convenio, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, nomeBanco, cnab2, codigoRemRet, dataGeracao, horaGeracao, sequencia, layout, densidade, reservadoBanco, reservadoEmpresa, cnab3)
    }

    else if (tipReg === "headerLote") {
      let banco = posicao(1, 3);
      let lote = posicao(4, 7);
      let tipoRegistro = posicao(8, 8);
      let tipoOperacao = posicao(9, 9);
      let tipoServico = posicao(10, 11);
      let formaLancamento = posicao(12, 13);
      let layout = posicao(14, 16);
      let cnab = posicao(17, 17);
      let inscricaoTipo = posicao(18, 18);
      let inscricaoNumero = posicao(19, 32);
      let convenio = posicao(33, 52);
      let agenciaCodigo = posicao(53, 57);
      let agenciaDv = posicao(58, 58);
      let contaNumero = posicao(59, 70);
      let contaDv = posicao(71, 71);
      let dv = posicao(72, 72);
      let nome = posicao(73, 102);
      let informacao = posicao(103, 142);
      let logradouro = posicao(143, 172);
      let numero = posicao(173, 177);
      let complemento = posicao(178, 192);
      let cidade = posicao(193, 212);
      let cep = posicao(213, 217);
      let complementoCep = posicao(218, 220);
      let estado = posicao(221, 222);
      let formadePagamento = posicao(223, 224);
      let cnab2 = posicao(225, 230);
      let ocorrencias = posicao(231, 240);


      dadosHeaderLote.push({ banco, lote, tipoRegistro, tipoOperacao, tipoServico, formaLancamento, layout, cnab, inscricaoTipo, inscricaoNumero, convenio, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, informacao, logradouro, numero, complemento, cidade, cep, complementoCep, estado, formadePagamento, cnab2, ocorrencias });

      validaDadosHeaderLote(i, banco, lote, tipoRegistro, tipoOperacao, tipoServico, formaLancamento, layout, cnab, inscricaoTipo, inscricaoNumero, convenio, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, informacao, logradouro, numero, complemento, cidade, cep, complementoCep, estado, formadePagamento, cnab2, ocorrencias)
    }

    else if (tipReg === "detalheSegmentos") {
      if (posicao(14, 14) === "A") {
        let banco = posicao(1, 3);
        let lote = posicao(4, 7);
        let tipoRegistro = posicao(8, 8);
        let numRegistro = posicao(9, 13);
        let segmento = posicao(14, 14);
        let movimentoTipo = posicao(15, 15);
        let movimentoCodigo = posicao(16, 17);
        let camara = posicao(18, 20);
        let bancoFav = posicao(21, 23);
        let agenciaCodigo = posicao(24, 28);
        let agenciaDv = posicao(29, 29);
        let contaNumero = posicao(30, 41);
        let contaDv = posicao(42, 42);
        let dv = posicao(43, 43);
        let nome = posicao(44, 73);
        let seuNumero = posicao(74, 93);
        let dataPagamento = posicao(94, 101);
        let moedaTipo = posicao(102, 104);
        let moedaQuantidade = posicao(105, 119);
        let valorPagamento = posicao(120, 134);
        let nossoNumero = posicao(135, 154);
        let dataReal = posicao(155, 162);
        let valorReal = posicao(163, 177);
        let informacao = posicao(178, 217);
        let codFinDoc = posicao(218, 219);
        let codFinTed = posicao(220, 224);
        let codFinComplementar = posicao(225, 226);
        let cnab = posicao(227, 229);
        let aviso = posicao(230, 230);
        let ocorrencias = posicao(231, 240);

        dadosSegmentoA.push({ banco, lote, tipoRegistro, numRegistro, segmento, movimentoTipo, movimentoCodigo, camara, bancoFav, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, seuNumero, dataPagamento, moedaTipo, moedaQuantidade, valorPagamento, nossoNumero, dataReal, valorReal, informacao, codFinDoc, codFinTed, codFinComplementar, cnab, aviso, ocorrencias });

        validaDadosSegmentoA(i, banco, lote, tipoRegistro, numRegistro, segmento, movimentoTipo, movimentoCodigo, camara, bancoFav, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, seuNumero, dataPagamento, moedaTipo, moedaQuantidade, valorPagamento, nossoNumero, dataReal, valorReal, informacao, codFinDoc, codFinTed, codFinComplementar, cnab, aviso, ocorrencias)
      }

      else if (posicao(14, 14) === "B") {
        let banco = posicao(1, 3);
        let lote = posicao(4, 7);
        let tipoRegistro = posicao(8, 8);
        let numRegistro = posicao(9, 13);
        let segmento = posicao(14, 14);
        let cnab = posicao(15, 17);
        let incricaoTipo = posicao(18, 18);
        let incricaoNumero = posicao(19, 32);
        let logradouro = posicao(33, 62);
        let numero = posicao(63, 67);
        let complemento = posicao(68, 82);
        let bairro = posicao(83, 97);
        let cidade = posicao(98, 117);
        let cep = posicao(118, 122);
        let complementoCep = posicao(123, 125);
        let estado = posicao(126, 127);
        let vencimento = posicao(128, 135);
        let valorDocumento = posicao(136, 150);
        let abatimento = posicao(151, 165);
        let desconto = posicao(166, 180);
        let mora = posicao(181, 195);
        let multa = posicao(196, 210);
        let codDocFavorecido = posicao(211, 225);
        let aviso = posicao(226, 226);
        let codigoUG = posicao(227, 232);
        let ispb = posicao(233, 240);

        dadosSegmentoB.push({ banco, lote, tipoRegistro, numRegistro, segmento, cnab, incricaoTipo, incricaoNumero, logradouro, numero, complemento, bairro, cidade, cep, complementoCep, estado, vencimento, valorDocumento, abatimento, desconto, mora, multa, codDocFavorecido, aviso, codigoUG, ispb });

        validaDadosSegmentoB(i, banco, lote, tipoRegistro, numRegistro, segmento, cnab, incricaoTipo, incricaoNumero, logradouro, numero, complemento, bairro, cidade, cep, complementoCep, estado, vencimento, valorDocumento, abatimento, desconto, mora, multa, codDocFavorecido, aviso, codigoUG, ispb)
      }
    }

    else if (tipReg === "trailerLote") {
      let banco = posicao(1, 3);
      let lote = posicao(4, 7);
      let tipoRegistro = posicao(8, 8);
      let cnab = posicao(9, 17);
      let qtdRegistros = posicao(18, 23);
      let valor = posicao(24, 41);
      let qtdMoeda = posicao(42, 59);
      let numeroAvisoDebito = posicao(60, 65);
      let cnab2 = posicao(66, 230);
      let ocorrencias = posicao(231, 240);

      dadosTrailerLote.push({ banco, lote, tipoRegistro, cnab, qtdRegistros, valor, qtdMoeda, numeroAvisoDebito, cnab2, ocorrencias });

      validaDadosTrailerLote(i, banco, lote, tipoRegistro, cnab, qtdRegistros, valor, qtdMoeda, numeroAvisoDebito, cnab2, ocorrencias)

    }

    else if (tipReg === "trailerArquivo") {
      let banco = posicao(1, 3);
      let lote = posicao(4, 7);
      let tipoRegistro = posicao(8, 8);
      let cnab = posicao(9, 17);
      let qtdLotes = posicao(18, 23);
      let qtdRegistros = posicao(24, 29);
      let qtdContasConcil = posicao(30, 35);
      let cnab2 = posicao(36, 240);

      dadosTrailerArquivo.push({ banco, lote, tipoRegistro, cnab, qtdLotes, qtdRegistros, qtdContasConcil, cnab2 });

      validaDadosTrailerArquivo(i, banco, lote, tipoRegistro, cnab, qtdLotes, qtdRegistros, qtdContasConcil, cnab2, registroAtual)
    }

  };
}


export {
  definePosicoes,
  tipReg,
  dadosHeaderArquivo,
  dadosHeaderLote,
  dadosSegmentoA,
  dadosSegmentoB,
  dadosTrailerLote,
  dadosTrailerArquivo,
  posicoesHeaderArquivo
};
