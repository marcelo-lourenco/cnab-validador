
import {
  validaDadosHeaderLabel,
  validaRegistroTipo1
} from "./valida-dados.js";


// Array para armazenar os dados dos registros por tipo
const dadosHeaderLabel = [];
const dadosRegistroTipo1 = [];

const posicoesHeaderLabel = [];

let registroAtual = '';
let tipReg = '';

function posicao(ini, fin) {
  return registroAtual.slice((ini - 1), fin);
}

function definePosicoes(registros) {
  for (let i = 0; i < registros.length; i++) {
    // Registro 0 - Header Label
    // Registro 1 - Transação
    // Registro 2 - Mensagem(opcional)
    // Registro 3 - Rateio de Crédito(opcional)
    // Registro 6 - Múltiplas Transferências / Débito Automático Informações Complementares
    // Registro 7 - Beneficiário Final               Registro 9 - Traile

    registroAtual = registros[i].trim().length > 0 ? registros[i] : "";
    let tipoRegistro = registroAtual.length > 0 ? Number(posicao(1, 1)) : "";

    switch (tipoRegistro) {
      case 0:
        tipReg = "rHeaderLabel";
        break;
      case 1:
        tipReg = "rTransacao";
        break;
      case 2:
        tipReg = "rMensagem";
        break;
      case 3:
        tipReg = "rRateioCredito";
        break;
      case 6:
        tipReg = "rMultiplasTransferencias";
        break;
      case 7:
        tipReg = "rBeneficiarioFinal";
        break;

      default:
        tipReg = "";
        console.log(`Linha ${i + 1} vazia - Tipo de Registro não identificado`);
        break;
    }
    /* 
        | Posição De / a|Nome do Campo                                |Tamanho |Conteúdo    | Alfanumerico | Númerico |
        | 001 a 001     | Identificação do Registro                   |  1     | 0          |              |        X |
        | 002 a 002     | Identificação do Arquivo - Remessa          |  1     | 1          |              |        X |
        | 003 a 009     | Literal Remessa                             |  7     |REMESSA     | X            |          |
        | 010 a 011     | Código de Serviço                           |  2     |1           |              |        X |
        | 012 a 026     | Literal Serviço                             | 15     |COBRANCA    | X            |          |
        | 027 a 046     | Código da Empresa                           | 20     |Será fornecido pelo Bradesco, quando do cadastramento Vide Obs.Pág.16|| X
        | 047 a 076     | Nome da Empresa                             | 30     |Razão Social| X            |          |
        | 077 a 079     | Número do Bradesco na Câmara de Compensação |  3     | 237        |              |        X |
        | 080 a 094     | Nome do Banco por Extenso                   | 15     |Bradesco    | X            |          |
        | 095 a 100     | Data da Gravação do Arquivo                 |  6     |DDMMAA      |              |        X |
        | 101 a 108     | Branco                                      |  8     |Branco      | X            |          |
        | 109 a 110     | Identificação do Sistema                    |  2     |MX          | X            |          |
        | 111 a 117     | Nº Sequencial de Remessa                    |  7     |Sequencial  |              |        X |
        | 118 a 394     | Branco                                      |277     |Branco      | X            |          |
        | 395 a 400     | Nº Sequencial do Registro de Um em Um       |  6     |1           |              |        X |
     */

    if (tipReg === "rHeaderLabel") {
      let identificacaoRegistro = posicao(1, 1);
      let identificacaoArquivoRemessa = posicao(2, 2);
      let literalRemessa = posicao(3, 9);
      let codigoServico = posicao(10, 11);
      let literalServico = posicao(12, 26);
      let codigoEmpresa = posicao(27, 46);
      let nomeEmpresa = posicao(47, 76);
      let nBradescoCamaraCompensacao = posicao(77, 79);
      let nomeBancoExtenso = posicao(80, 94);
      let dataGravacaoArquivo = posicao(95, 100);
      let branco1 = posicao(101, 108);
      let identificacaoSistema = posicao(109, 110);
      let nSequencialRemessa = posicao(111, 117);
      let branco2 = posicao(118, 394);
      let nSequencialRegistro = posicao(395, 400);



      dadosHeaderLabel.push({
        identificacaoRegistro, identificacaoArquivoRemessa, literalRemessa, codigoServico, literalServico, codigoEmpresa, nomeEmpresa, nBradescoCamaraCompensacao, nomeBancoExtenso, dataGravacaoArquivo, branco1, identificacaoSistema, nSequencialRemessa, branco2, nSequencialRegistro
      });

      validaDadosHeaderLabel(i, identificacaoRegistro, identificacaoArquivoRemessa, literalRemessa, codigoServico, literalServico, codigoEmpresa, nomeEmpresa, nBradescoCamaraCompensacao, nomeBancoExtenso, dataGravacaoArquivo, branco1, identificacaoSistema, nSequencialRemessa, branco2, nSequencialRegistro)
    }

    else if (tipReg === "rTransacao") {
      // Tipo 1
      if (posicao(1, 1) === "1") {

        let identificacaoRegistro = posicao(1, 1);
        let agenciaDebito = posicao(2, 6);
        let digitoAgenciaDebito = posicao(7, 7);
        let razaoContaCorrente = posicao(8, 12);
        let contaCorrente = posicao(13, 19);
        let digitoContaCorrente = posicao(20, 20);
        let identificacaoEmpresaBeneficiariaBanco = posicao(21, 37);
        let nControleParticipante = posicao(38, 62);
        let codigoBancoDebitadoCamaraCompensacao = posicao(63, 65);
        let campoMulta = posicao(66, 66);
        let percentualMulta = posicao(67, 70);
        let identificacaoTituloNoBanco = posicao(71, 81);
        let digitoAutoconferenciaNumeroBancario = posicao(82, 82);
        let descontoBonificacaoPorDia = posicao(83, 92);
        let condicaoEmissaoPapeletaCobranca = posicao(93, 93);
        let identSeEmiteBoletoDebitoAutomatico = posicao(94, 94);
        let identificacaoOperacaoDoBanco = posicao(95, 104);
        let indicadorRateioCredito = posicao(105, 105);
        let enderecamentoAviso = posicao(106, 106);
        let quantidadePagamentos = posicao(107, 108);
        let identificacaoOcorrencia = posicao(109, 110);
        let nDocumento = posicao(111, 120);
        let dataVencimentoTitulo = posicao(121, 126);
        let valorTitulo = posicao(127, 139);
        let bancoEncarregadoCobranca = posicao(140, 142);
        let agenciaDepositaria = posicao(143, 147);

        dadosRegistroTipo1.push({ identificacaoRegistro, agenciaDebito, digitoAgenciaDebito, razaoContaCorrente, contaCorrente, digitoContaCorrente, identificacaoEmpresaBeneficiariaBanco, nControleParticipante, codigoBancoDebitadoCamaraCompensacao, campoMulta, percentualMulta, identificacaoTituloNoBanco, digitoAutoconferenciaNumeroBancario, descontoBonificacaoPorDia, condicaoEmissaoPapeletaCobranca, identSeEmiteBoletoDebitoAutomatico, identificacaoOperacaoDoBanco, indicadorRateioCredito, enderecamentoAviso, quantidadePagamentos, identificacaoOcorrencia, nDocumento, dataVencimentoTitulo, valorTitulo, bancoEncarregadoCobranca, agenciaDepositaria });

        validaRegistroTipo1(i, identificacaoRegistro, agenciaDebito, digitoAgenciaDebito, razaoContaCorrente, contaCorrente, digitoContaCorrente, identificacaoEmpresaBeneficiariaBanco, nControleParticipante, codigoBancoDebitadoCamaraCompensacao, campoMulta, percentualMulta, identificacaoTituloNoBanco, digitoAutoconferenciaNumeroBancario, descontoBonificacaoPorDia, condicaoEmissaoPapeletaCobranca, identSeEmiteBoletoDebitoAutomatico, identificacaoOperacaoDoBanco, indicadorRateioCredito, enderecamentoAviso, quantidadePagamentos, identificacaoOcorrencia, nDocumento, dataVencimentoTitulo, valorTitulo, bancoEncarregadoCobranca, agenciaDepositaria)
      }
      // Tipo 3
      if (posicao(1, 1) === "2") {
        let banco = posicao(1, 1);

        dadosRegistroTipo1.push({ banco, });

        validaRegistroTipo1(i, banco,)
      }
      // Tipo 3
      if (posicao(1, 1) === "3") {
        let banco = posicao(1, 1);

        dadosRegistroTipo1.push({ banco, });

        validaRegistroTipo1(i, banco,)
      }
      // Tipo 6
      if (posicao(1, 1) === "6") {
        let banco = posicao(1, 1);

        dadosRegistroTipo1.push({ banco, });

        validaRegistroTipo1(i, banco,)
      }
      // Tipo 7
      if (posicao(1, 1) === "7") {
        let banco = posicao(1, 1);

        dadosRegistroTipo1.push({ banco, });

        validaRegistroTipo1(i, banco,)
      }


    }
  };
}


export {
  definePosicoes,
  tipReg,
  dadosHeaderLabel,
  dadosRegistroTipo1,
  posicoesHeaderLabel
};


