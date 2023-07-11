function erroHeaderLabel(i, campo, descricao) {
  console.error(`Header Label - Linha ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

function erroRegistroTipo1(i, campo, descricao) {
  console.error(`Registro Tipo 1 - Linha ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}


function validaDadosHeaderLabel(i, identificacaoRegistro, identificacaoArquivoRemessa, literalRemessa, codigoServico, literalServico, codigoEmpresa, nomeEmpresa, nBradescoCamaraCompensacao, nomeBancoExtenso, dataGravacaoArquivo, branco1, identificacaoSistema, nSequencialRemessa, branco2, nSequencialRegistro) {
  if (identificacaoRegistro !== '0') {
    erroHeaderLabel(i, identificacaoRegistro, "Identificação do Registro");
  }

  if (identificacaoArquivoRemessa !== '1') {
    erroHeaderLabel(i, identificacaoArquivoRemessa, "Identificação do Arquivo Remessa");
  }

  if (!/^[\w]{7}$/.test(literalRemessa) || literalRemessa !== 'REMESSA') {
    erroHeaderLabel(i, literalRemessa, "Literal Remessa");
  }

  if (codigoServico !== '01') {
    erroHeaderLabel(i, codigoServico, "Código de Serviço");
  }

  if (!/^[\w\d\s]{15}$/.test(literalServico) || literalServico !== 'COBRANCA       ') {
    erroHeaderLabel(i, literalServico, "Literal Serviço");
  }

  if (!/^[\d]{20}$/.test(codigoEmpresa)) {
    erroHeaderLabel(i, codigoEmpresa, "Código da Empresa");
  }

  if (!/^[\w\d\s\S]{30}$/.test(nomeEmpresa)) {
    erroHeaderLabel(i, nomeEmpresa, "Nome da Empresa");
  }

  if (!/^[\d]{3}$/.test(nBradescoCamaraCompensacao) || nBradescoCamaraCompensacao !== '237') {
    erroHeaderLabel(i, nBradescoCamaraCompensacao, "Número do Bradesco na Câmara de Compensação");
  }

  if (!/^[A-Z\s]{15}$/.test(nomeBancoExtenso) || nomeBancoExtenso !== 'BRADESCO       ') {
    erroHeaderLabel(i, nomeBancoExtenso, "Nome do Banco por Extenso");
  }

  if (!/^\d{6}$/.test(dataGravacaoArquivo)) {
    erroHeaderLabel(i, dataGravacaoArquivo, "Data da Gravação do Arquivo");
  }

  if (!/^[\w\d\s]{8}$/.test(branco1)) {
    erroHeaderLabel(i, branco1, "Branco");
  }

  if (!/^[A-Z]{2}$/.test(identificacaoSistema) || identificacaoSistema !== 'MX') {
    erroHeaderLabel(i, identificacaoSistema, "Identificação do Sistema");
  }

  if (!/^[\d\s]{7}$/.test(nSequencialRemessa)) {
    erroHeaderLabel(i, nSequencialRemessa, "Nº Sequencial de Remessa");
  }

  if (!/^[\w\d\s]{277}$/.test(branco2)) {
    erroHeaderLabel(i, branco2, "Branco");
  }

  if (!/^\d{6}$/.test(nSequencialRegistro) || nSequencialRegistro !== '000001') {
    erroHeaderLabel(i, nSequencialRegistro, "Nº Sequencial do Registro de Um em Um");
  }
}


function validaRegistroTipo1(i, identificacaoRegistro, agenciaDebito, digitoAgenciaDebito, razaoContaCorrente, contaCorrente, digitoContaCorrente, identificacaoEmpresaBeneficiariaBanco, nControleParticipante, codigoBancoDebitadoCamaraCompensacao, campoMulta, percentualMulta, identificacaoTituloNoBanco, digitoAutoconferenciaNumeroBancario, descontoBonificacaoPorDia, condicaoEmissaoPapeletaCobranca, identSeEmiteBoletoDebitoAutomatico, identificacaoOperacaoDoBanco, indicadorRateioCredito, enderecamentoAviso, quantidadePagamentos, identificacaoOcorrencia, nDocumento, dataVencimentoTitulo, valorTitulo, bancoEncarregadoCobranca, agenciaDepositaria) {
  if (identificacaoRegistro !== '1') {
    erroRegistroTipo1(i, identificacaoRegistro, "Identificação do Registro");
  }

  if (!/^[\d]{5}$/.test(agenciaDebito)) {
    erroRegistroTipo1(i, agenciaDebito, "Agencia de Débito");
  }

  if (!/^[\w]{1}$/.test(digitoAgenciaDebito)) {
    erroRegistroTipo1(i, digitoAgenciaDebito, "Dígito Agencia de Débito");
  }

  if (!/^[\d\s]{5}$/.test(razaoContaCorrente)) {
    erroRegistroTipo1(i, razaoContaCorrente, "Razão da Conta Corrente");
  }

  if (!/^[\d\s]{7}$/.test(contaCorrente)) {
    erroRegistroTipo1(i, contaCorrente, "Conta Corrente");
  }

  if (!/^[\w\d\s]{1}$/.test(digitoContaCorrente)) {
    erroRegistroTipo1(i, digitoContaCorrente, "Dígito da Conta Corrente");
  }

  if (!/^[\w\d\s]{17}$/.test(identificacaoEmpresaBeneficiariaBanco)) {
    erroRegistroTipo1(i, identificacaoEmpresaBeneficiariaBanco, "Identificação da Empresa Beneficiária no Banco");
  }

  if (!/^.{25}$/.test(nControleParticipante)) {
    erroRegistroTipo1(i, nControleParticipante, "Nº de Controle do Participante");
  }

  if (!/^[\d]{3}$/.test(codigoBancoDebitadoCamaraCompensacao)) {
    erroRegistroTipo1(i, codigoBancoDebitadoCamaraCompensacao, "Código do Banco Debitado na Câmara de Compensação");
  }

  if (!/^[\d]{1}$/.test(campoMulta)) {
    erroRegistroTipo1(i, campoMulta, "Campo de Multa");
  }

  if (!/^[\d]{4}$/.test(percentualMulta)) {
    erroRegistroTipo1(i, percentualMulta, "Percentual de Multa");
  }

  if (!/^[\d]{11}$/.test(identificacaoTituloNoBanco)) {
    erroRegistroTipo1(i, identificacaoTituloNoBanco, "Identificação do Título no Banco");
  }

  if (!/^.{1}$/.test(digitoAutoconferenciaNumeroBancario)) {
    erroRegistroTipo1(i, digitoAutoconferenciaNumeroBancario, "Dígito de Autoconferência do Número Bancário");
  }

  if (!/^[\d]{10}$/.test(descontoBonificacaoPorDia)) {
    erroRegistroTipo1(i, descontoBonificacaoPorDia, "Desconto Bonificação por Dia");
  }

  if (!/^[1-2]{1}$/.test(condicaoEmissaoPapeletaCobranca)) {
    erroRegistroTipo1(i, condicaoEmissaoPapeletaCobranca, "Condição para Emissão da Papeleta de Cobrança");
  }

  if (!/^.{1}$/.test(identSeEmiteBoletoDebitoAutomatico)) {
    erroRegistroTipo1(i, identSeEmiteBoletoDebitoAutomatico, "Identificação se Emite Boleto para Débito Automático");
  }

  if (!/^[\s]{10}$/.test(identificacaoOperacaoDoBanco)) {
    erroRegistroTipo1(i, identificacaoOperacaoDoBanco, "Identificação da Operação do Banco");
  }

  if (!/^[.\s]{1}$/.test(indicadorRateioCredito)) {
    erroRegistroTipo1(i, indicadorRateioCredito, "Indicador de Rateio Crédito");
  }

  if (!/^[\d]{1}$/.test(enderecamentoAviso)) {
    erroRegistroTipo1(i, enderecamentoAviso, "Endereçamento para Aviso");
  }

  if (!/^[\w]{2}$/.test(quantidadePagamentos)) {
    erroRegistroTipo1(i, quantidadePagamentos, "Quantidade de Pagamentos");
  }

  if (!/^[\d]{2}$/.test(identificacaoOcorrencia)) {
    erroRegistroTipo1(i, identificacaoOcorrencia, "Identificação da Ocorrência");
  }

  if (!/^[\d]{10}$/.test(nDocumento)) {
    erroRegistroTipo1(i, nDocumento, "Nº do Documento");
  }


}

export {
  validaDadosHeaderLabel,
  validaRegistroTipo1,
}