/**
 * Função responsável por exibir mensagem de erro para o Header do Arquivo.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroHeaderArquivo(i, campo, descricao) {
  console.error(`Header Arquivo ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por exibir mensagem de erro para o Header do Lote.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroHeaderLote(i, campo, descricao) {
  console.error(`Header Lote ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por exibir mensagem de erro para o Segmento A.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroSegmentoA(i, campo, descricao) {
  console.error(`Segmento A Reg ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por exibir mensagem de erro para o Segmento B.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroSegmentoB(i, campo, descricao) {
  console.error(`Segmento B Reg ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por exibir mensagem de erro para o Segmento J.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroSegmentoJ(i, campo, descricao) {
  console.error(`Segmento J Reg ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por exibir mensagem de erro para o Segmento J52.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroSegmentoJ52(i, campo, descricao) {
  console.error(`Segmento J52 Reg ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por exibir mensagem de erro para o Trailer do Lote.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroTrailerLote(i, campo, descricao) {
  console.error(`Trailer Lote ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por exibir mensagem de erro para o Trailer do Arquivo.
 * @param {number} i - Índice do item.
 * @param {string} campo - Campo inválido.
 * @param {string} descricao - Descrição do campo.
 */
function erroTrailerArquivo(i, campo, descricao) {
  console.error(`Trailer Arquivo ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

/**
 * Função responsável por validar os dados do Header do Arquivo.
 * @param {number} i - Índice do item.
 * @param {string} banco - Código do banco.
 * @param {string} lote - Lote de serviço.
 * @param {string} tipoRegistro - Tipo de registro.
 * @param {string} cnab - CNAB.
 * @param {string} inscricaoTipo - Tipo de inscrição.
 * @param {string} inscricaoNumero - Número de inscrição.
 * @param {string} convenio - Código do convênio.
 * @param {string} agenciaCodigo - Código da agência.
 * @param {string} agenciaDv - Dígito verificador da agência.
 * @param {string} contaNumero - Número da conta.
 * @param {string} contaDv - Dígito verificador da conta.
 * @param {string} dv - Dígito verificador do agência/conta.
 * @param {string} nome - Nome da empresa.
 * @param {string} nomeBanco - Nome do banco.
 * @param {string} cnab2 - CNAB2.
 * @param {string} codigoRemRet - Código de remessa/retorno.
 * @param {string} dataGeracao - Data de geração do arquivo.
 * @param {string} horaGeracao - Hora de geração do arquivo.
 * @param {string} sequencia - Sequência do arquivo.
 * @param {string} layout - Layout do arquivo.
 * @param {string} densidade - Densidade do arquivo.
 * @param {string} reservadoBanco - Reservado ao banco.
 * @param {string} reservadoEmpresa - Reservado à empresa.
 * @param {string} cnab3 - CNAB3.
 */
function validaDadosHeaderArquivo(i, banco, lote, tipoRegistro, cnab, inscricaoTipo, inscricaoNumero, convenio, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, nomeBanco, cnab2, codigoRemRet, dataGeracao, horaGeracao, sequencia, layout, densidade, reservadoBanco, reservadoEmpresa, cnab3) {

  if (banco !== '237') {
    erroHeaderArquivo(i, banco, "código do banco")
  }
  if (!/^\d{4}$/.test(lote)) {
    erroHeaderArquivo(i, lote, "lote de serviço")
  }
  if (tipoRegistro !== '0') {
    erroHeaderArquivo(i, tipoRegistro, "tipo de registro")
  }
  if (!/^\s{9}$/.test(cnab)) {
    erroHeaderArquivo(i, cnab, "CNAB")
  }
  if (inscricaoTipo !== '1' && inscricaoTipo !== '2') {
    erroHeaderArquivo(i, inscricaoTipo, "tipo de inscrição ")
  }
  if (inscricaoNumero.length !== 14) {
    erroHeaderArquivo(i, inscricaoNumero, "número de inscrição")
  }
  if (!/^[A-Z0-9\s]{20}$/.test(convenio)) {
    erroHeaderArquivo(i, convenio, "código do convênio")
  }
  if (!/^\d{5}$/.test(agenciaCodigo)) {
    erroHeaderArquivo(i, agenciaCodigo, "código da agência")
  }
  if (!/^[A-Z0-9\s]{1}$/.test(agenciaDv)) {
    erroHeaderArquivo(i, agenciaDv, "dígito verificador da agência")
  }
  if (!/^\d{12}$/.test(contaNumero)) {
    erroHeaderArquivo(i, contaNumero, "número da conta")
  }
  if (!/^[A-Z0-9\s]{1}$/.test(contaDv)) {
    erroHeaderArquivo(i, contaDv, "dígito verificador da conta")
  }
  if (!/^[A-Z0-9\s]{1}$/.test(dv)) {
    erroHeaderArquivo(i, dv, "dígito verificador do agencia/conta")
  }
  if (!/^[a-zA-Z0-9\s/.]{30}$/.test(nome)) {
    erroHeaderArquivo(i, nome, "nome da empresa")
  }
  if (!/^[a-zA-Z0-9\s/.]{30}$/.test(nomeBanco)) {
    erroHeaderArquivo(i, nomeBanco, "nome do banco")
  }
  if (!/^\s{10}$/.test(cnab2)) {
    erroHeaderArquivo(i, cnab2, "CNAB2")
  }
  if (codigoRemRet !== '1' && codigoRemRet !== '2') {
    erroHeaderArquivo(i, cnab2, "código de remessa/retorno")
  }
  if (!/^\d{8}$/.test(dataGeracao)) {
    erroHeaderArquivo(i, dataGeracao, "data de geração do arquivo")
  }
  if (!/^\d{6}$/.test(horaGeracao)) {
    erroHeaderArquivo(i, horaGeracao, "hora de geração do arquivo")
  }
  if (!/^\d{6}$/.test(sequencia)) {
    erroHeaderArquivo(i, sequencia, "sequência do arquivo")
  }
  if (layout !== '089') {
    erroHeaderArquivo(i, layout, "layout do arquivo")
  }
  if (!/^\d{5}$/.test(densidade)) {
    erroHeaderArquivo(i, densidade, "densidade do arquivo")
  }
  if (!/^\s{20}$/.test(reservadoBanco)) {
    erroHeaderArquivo(i, reservadoBanco, "reservado ao banco")
  }
  if (!/^\s{20}$/.test(reservadoEmpresa)) {
    erroHeaderArquivo(i, reservadoEmpresa, "reservado à empresa")
  }
  if (!/^\s{29}$/.test(cnab3)) {
    erroHeaderArquivo(i, cnab3, "CNAB3")
  }
}


/**
 * Função responsável por validar os dados do Header do Lote.
 * @param {number} i - Índice do lote.
 * @param {number} banco - Código do banco.
 * @param {number} lote - Lote de serviço.
 * @param {number} tipoRegistro - Tipo de registro.
 * @param {string} tipoOperacao - Tipo de operação.
 * @param {number} tipoServico - Tipo de serviço.
 * @param {number} formaLancamento - Forma de lançamento.
 * @param {number} layout - Layout.
 * @param {string} cnab - CNAB.
 * @param {number} inscricaoTipo - Tipo de inscrição.
 * @param {string} inscricaoNumero - Número de inscrição.
 * @param {string} convenio - Código do convênio.
 * @param {string} agenciaCodigo - Código da agência.
 * @param {string} agenciaDv - Dígito verificador da agência.
 * @param {string} contaNumero - Número da conta.
 * @param {string} contaDv - Dígito verificador da conta.
 * @param {string} dv - Dígito verificador agencia/conta.
 * @param {string} nome - Nome do beneficiário/cedente.
 * @param {string} informacao - Informação.
 * @param {string} logradouro - Logradouro.
 * @param {string} numero - Número do endereço.
 * @param {string} complemento - Complemento do endereço.
 * @param {string} cidade - Cidade.
 * @param {string} cep - CEP.
 * @param {string} complementoCep - Complemento do CEP.
 * @param {string} estado - Estado.
 * @param {number} formadePagamento - Forma de pagamento.
 * @param {string} cnab2 - CNAB2.
 * @param {string} ocorrencias - Ocorrências./**
 * Função responsável por validar os dados do Header do Arquivo.
 */
function validaDadosHeaderLote(i, banco, lote, tipoRegistro, tipoOperacao, tipoServico, formaLancamento, layout, cnab, inscricaoTipo, inscricaoNumero, convenio, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, informacao, logradouro, numero, complemento, cidade, cep, complementoCep, estado, formadePagamento, cnab2, ocorrencias) {

  if (banco !== '237') {
    erroHeaderLote(i, banco, "código do banco")
  }
  if (!/^\d{4}$/.test(lote)) {
    erroHeaderLote(i, lote, "lote de serviço")
  }
  if (tipoRegistro !== '1') {
    erroHeaderLote(i, tipoRegistro, "tipo de registro")
  }
  if (tipoOperacao !== 'C') {
    erroHeaderLote(i, tipoOperacao, "tipo de operação")
  }
  if (!/^\d{2}$/.test(tipoServico) && !['01', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '20', '22', '25', '26', '29', '30', '32', '33', '34', '40', '41', '50', '60', '70', '75', '77', '80', '90'].includes(tipoServico)) {
    erroHeaderLote(i, tipoServico, "tipo de serviço")
  }
  if (!/^\d{2}$/.test(formaLancamento) && ![, '01', '02', '03', '04', '05', '10', '11', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '30', '31', '40', '41', '43', '44', '50', '70', '71', '72', '73', '99'].includes(formaLancamento)) {
    erroHeaderLote(i, formaLancamento, "forma de lançamento")
  }
  if (!/^\d{3}$/.test(layout)) {
    erroHeaderLote(i, layout, "layout")
  }
  if (!/^\s{1}$/.test(cnab)) {
    erroHeaderLote(i, cnab, "CNAB")
  }
  if (inscricaoTipo !== '1' && inscricaoTipo !== '2') {
    erroHeaderLote(i, inscricaoTipo, "tipo de inscrição")
  }
  if (!/^\d{14}$/.test(inscricaoNumero)) {
    erroHeaderLote(i, inscricaoNumero, "número de inscrição")
  }
  if (!/^[A-Z0-9\s]{20}$/.test(convenio)) {
    erroHeaderLote(i, convenio, "código do convênio")
  }
  if (!/^\d{5}$/.test(agenciaCodigo)) {
    erroHeaderLote(i, agenciaCodigo, "código da agência")
  }
  if (!/^[A-Z0-9\s]{1}$/.test(agenciaDv)) {
    erroHeaderLote(i, agenciaDv, "dígito verificador da agência")
  }
  if (!/^\d{12}$/.test(contaNumero)) {
    erroHeaderLote(i, contaNumero, "número da conta")
  }
  if (!/^[A-Z0-9\s]{1}$/.test(contaDv)) {
    erroHeaderLote(i, contaDv, "dígito verificador da conta")
  }
  if (!/^[A-Z0-9\s]{1}$/.test(dv)) {
    erroHeaderLote(i, dv, "dígito verificador agencia/conta")
  }

  if (!/^.{30}$/.test(nome)) {
    erroHeaderLote(i, nome, "nome do beneficiário/cedente")
  }
  if (!/^.{40}$/.test(informacao)) {
    erroHeaderLote(i, informacao, "informação")
  }
  if (!/^.{30}$/.test(logradouro)) {
    erroHeaderLote(i, logradouro, "logradouro")
  }
  if (!/^[\d\s]{5}$/.test(numero)) {
    erroHeaderLote(i, numero, "número do endereço")
  }
  if (!/^.{15}$/.test(complemento)) {
    erroHeaderLote(i, complemento, "complemento do endereço")
  }
  if (!/^.{20}$/.test(cidade)) {
    erroHeaderLote(i, cidade, "cidade")
  }
  if (!/^\d{5}$/.test(cep)) {
    erroHeaderLote(i, cep, "CEP")
  }
  if (!/^\d{3}$/.test(complementoCep)) {
    erroHeaderLote(i, complementoCep, "complemento do CEP")
  }
  if (!/^[A-Z]{2}$/.test(estado)) {
    erroHeaderLote(i, estado, "estado")
  }
  if (formadePagamento !== '01') {
    erroHeaderLote(i, formadePagamento, "forma de pagamento")
  }
  if (!/^\s{6}$/.test(cnab2)) {
    erroHeaderLote(i, cnab, "CNAB2")
  }
  if (!/^.{10}$/.test(ocorrencias)) {
    erroHeaderLote(i, ocorrencias, "ocorrências")
  }

}


/**
 * Função responsável por validar os dados do segmento A do arquivo CNAB 240.
 *
 * @param {number} i - Índice do registro.
 * @param {string} banco - Código do banco.
 * @param {string} lote - Lote de serviço.
 * @param {string} tipoRegistro - Tipo de registro.
 * @param {string} numRegistro - Número sequencial.
 * @param {string} segmento - Código de segmento.
 * @param {string} movimentoTipo - Tipo de movimento.
 * @param {string} movimentoCodigo - Código de movimento.
 * @param {string} camara - Código da câmara de compensação.
 * @param {string} bancoFav - Código do banco favorecido.
 * @param {string} agenciaCodigo - Código da agência favorecido.
 * @param {string} agenciaDv - Dígito verificador da agência favorecido.
 * @param {string} contaNumero - Conta corrente do favorecido.
 * @param {string} contaDv - Dígito verificador da conta corrente.
 * @param {string} dv - Dígito verificador agência/conta.
 * @param {string} nome - Nome do favorecido.
 * @param {string} seuNumero - Seu número.
 * @param {string} dataPagamento - Data de pagamento.
 * @param {string} moedaTipo - Tipo de moeda.
 * @param {string} moedaQuantidade - Quantidade de moeda.
 * @param {string} valorPagamento - Valor do pagamento.
 * @param {string} nossoNumero - Nosso número.
 * @param {string} dataReal - Data real.
 * @param {string} valorReal - Valor real.
 * @param {string} informacao - Informação.
 * @param {string} codFinDoc - Código financeiro do documento.
 * @param {string} codFinTed - Código financeiro do TED.
 * @param {string} codFinComplementar - Código financeiro complementar.
 * @param {string} cnab - CNAB.
 * @param {string} aviso - Aviso ao favorecido.
 * @param {string} ocorrencias - Ocorrências.
 * @throws {Error} Lança um erro caso algum campo esteja inválido.
 */
function validaDadosSegmentoA(i, banco, lote, tipoRegistro, numRegistro, segmento, movimentoTipo, movimentoCodigo, camara, bancoFav, agenciaCodigo, agenciaDv, contaNumero, contaDv, dv, nome, seuNumero, dataPagamento, moedaTipo, moedaQuantidade, valorPagamento, nossoNumero, dataReal, valorReal, informacao, codFinDoc, codFinTed, codFinComplementar, cnab, aviso, ocorrencias) {

  if (banco !== '237') {
    erroSegmentoA(i, banco, "código do banco")
  }

  if (!/^\d{4}$/.test(lote)) {
    erroSegmentoA(i, lote, "lote de serviço")
  }

  if (tipoRegistro !== '3') {
    erroSegmentoA(i, tipoRegistro, "tipo de registro")
  }

  if (!/^\d{5}$/.test(numRegistro)) {
    erroSegmentoA(i, numRegistro, "número sequencial")
  }

  if (segmento !== 'A') {
    erroSegmentoA(i, segmento, "código de segmento")
  }

  if (!/^\d{1}$/.test(movimentoTipo) && !['0', '1', '3', '5', '7'].includes(movimentoTipo)) {
    erroSegmentoA(i, movimentoTipo, "tipo de movimento")
  }

  if (!/^\d{2}$/.test(movimentoCodigo) && !['00', '05', '06', '09', '10', '11', '17', '19', '23', '25', '27', '33', '40', '50', '51', '52', '53', '54', '60', '61',].includes(movimentoCodigo)) {
    erroSegmentoA(i, movimentoCodigo, "tipo de movimento")
  }

  if (!/^\d{3}$/.test(camara) && !['018', '700', '888'].includes(camara)) {
    erroSegmentoA(i, camara, "código da câmara de compensação")
  }

  if (!/^\d{3}$/.test(bancoFav) && !['001', '237', '341', '399', '104', '033'].includes(bancoFav)) {
    erroSegmentoA(i, bancoFav, "código do banco favorecido")
  }
  if (!/^\d{5}$/.test(agenciaCodigo)) {
    erroSegmentoA(i, agenciaCodigo, "código da agencia favorecido ")
  }

  if (!/^[\w\d\s]{1}$/.test(agenciaDv)) {
    erroSegmentoA(i, agenciaDv, "dígito verificador da agência favorecido")
  }

  if (!/^\d{12}$/.test(contaNumero)) {
    erroSegmentoA(i, contaNumero, "conta corrente do favorecido")
  }

  if (!/[[\w\d\s]{1}/.test(contaDv)) {
    erroSegmentoA(i, contaDv, "dígito verificador da conta corrente")
  }

  if (!/[\w\d\s]{1}/.test(dv)) {
    erroSegmentoA(i, dv, "dígito verificador agencia/conta")
  }

  if (!/^[\w\d\s]{30}$/.test(nome)) {
    erroSegmentoA(i, nome, "nome do favorecido")
  }

  if (!/^.{20}$/.test(seuNumero)) {
    erroSegmentoA(i, seuNumero, "seu número")
  }
  if (!/^\d{8}$/.test(dataPagamento)) {
    erroSegmentoA(i, dataPagamento, "data de pagamento")
  }
  if (!/^[0-9A-Z]{3}$/.test(moedaTipo)) {
    erroSegmentoA(i, moedaTipo, "tipo de moeda")
  }
  if (!/^\d{15}$/.test(moedaQuantidade)) {
    erroSegmentoA(i, moedaQuantidade, "quantidade de moeda")
  }
  if (!/^\d{15}$/.test(valorPagamento)) {
    erroSegmentoA(i, valorPagamento, "valor do pagamento")
  }
  if (!/^[\w\d\s]{20}$/.test(nossoNumero)) {
    erroSegmentoA(i, nossoNumero, "nosso número")
  }
  if (!/^\d{8}$/.test(dataReal)) {
    erroSegmentoA(i, dataReal, "data real")
  }
  if (!/^\d{15}$/.test(valorReal)) {
    erroSegmentoA(i, valorReal, "valor real")
  }
  if (!/^.{40}$/.test(informacao)) {
    erroSegmentoA(i, informacao, "informação")
  }
  if (!/^.{2}$/.test(codFinDoc) && !['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '16', '17'].includes(codFinDoc)) {
    erroSegmentoA(i, codFinDoc, "código financeiro do documento")
  }
  if (!/^.{5}$/.test(codFinTed)) {
    erroSegmentoA(i, codFinTed, "código financeiro do TED")
  }
  if (!/^.{2}$/.test(codFinComplementar) && !['CC', 'PP'].includes(codFinTed)) {
    erroSegmentoA(i, codFinComplementar, "código financeiro complementar")
  }
  if (!/^\s{3}$/.test(cnab)) {
    erroSegmentoA(i, cnab, "CNAB")
  }
  if (!/^\d{1}$/.test(aviso)) {
    erroSegmentoA(i, aviso, "aviso ao favorecido")
  }
  if (!/^\w\d\s{10}$/.test(ocorrencias)) {
    erroSegmentoA(i, ocorrencias, "ocorrências")
  }
}

/**
 * Função responsável por validar os dados do segmento B do arquivo CNAB 240.
 *
 * @param {number} i - Índice do registro.
 * @param {string} banco - Código do banco.
 * @param {string} lote - Lote de serviço.
 * @param {string} tipoRegistro - Tipo de registro.
 * @param {string} numRegistro - Número de registro.
 * @param {string} segmento - Código de segmento.
 * @param {string} cnab - CNAB.
 * @param {string} incricaoTipo - Tipo de inscrição.
 * @param {string} incricaoNumero - Número de inscrição.
 * @param {string} logradouro - Logradouro.
 * @param {string} numero - Número do endereço.
 * @param {string} complemento - Complemento do endereço.
 * @param {string} bairro - Bairro.
 * @param {string} cidade - Cidade.
 * @param {string} cep - CEP.
 * @param {string} complementoCep - Complemento do CEP.
 * @param {string} estado - Estado.
 * @param {string} vencimento - Data de vencimento.
 * @param {string} valorDocumento - Valor do documento.
 * @param {string} abatimento - Valor do abatimento.
 * @param {string} desconto - Valor do desconto.
 * @param {string} mora - Valor da mora.
 * @param {string} multa - Valor da multa.
 * @param {string} codDocFavorecido - Código do documento do favorecido.
 * @param {string} aviso - Aviso.
 * @param {string} codigoUG - Código da UG.
 * @param {string} ispb - Código da ISPB.
 * @throws {Error} Lança um erro caso algum campo esteja inválido.
 */
function validaDadosSegmentoB(i, banco, lote, tipoRegistro, numRegistro, segmento, cnab, incricaoTipo, incricaoNumero, logradouro, numero, complemento, bairro, cidade, cep, complementoCep, estado, vencimento, valorDocumento, abatimento, desconto, mora, multa, codDocFavorecido, aviso, codigoUG, ispb) {

  if (banco !== '237') {
    erroSegmentoB(i, banco, "código do banco")
  }
  if (!/^\d{4}$/.test(lote)) {
    erroSegmentoB(i, lote, "lote de serviço")
  }
  if (tipoRegistro !== '3') {
    erroSegmentoB(i, tipoRegistro, "tipo de registro")
  }
  if (!/^\d{5}$/.test(numRegistro)) {
    erroSegmentoB(i, numRegistro, "número de registro")
  }
  if (segmento !== 'B') {
    erroSegmentoB(i, segmento, "segmento")
  }
  if (!/^\s{3}$/.test(cnab)) {
    erroSegmentoB(i, cnab, "CNAB")
  }
  if (!/^\d{1}$/.test(incricaoTipo) && !['0', '1', '2', '3', '9'].includes(incricaoTipo)) {
    erroSegmentoB(i, incricaoTipo, "tipo de inscrição")
  }
  if (!/^\d{14}$/.test(incricaoNumero)) {
    erroSegmentoB(i, incricaoNumero, "número de inscrição")
  }
  if (!/^.{30}$/.test(logradouro)) {
    erroSegmentoB(i, logradouro, "logradouro")
  }
  if (!/^[\d\s]{5}$/.test(numero)) {
    erroSegmentoB(i, numero, "número do endereço")
  }
  if (!/^.{15}$/.test(complemento)) {
    erroSegmentoB(i, complemento, "complemento do endereço")
  }
  if (!/^.{15}$/.test(bairro)) {
    erroSegmentoB(i, bairro, "bairro")
  }
  if (!/^.{20}$/.test(cidade)) {
    erroSegmentoB(i, cidade, "cidade")
  }
  if (!/^\d{5}$/.test(cep)) {
    erroSegmentoB(i, cep, "CEP")
  }
  if (!/^\d{3}$/.test(complementoCep)) {
    erroSegmentoB(i, complementoCep, "complemento do CEP")
  }
  if (!/^[A-Z]{2}$/.test(estado)) {
    erroSegmentoB(i, estado, "estado")
  }
  if (!/^\d{8}$/.test(vencimento)) {
    erroSegmentoB(i, vencimento, "data de vencimento")
  }
  if (!/^\d{15}$/.test(valorDocumento) && valorDocumento <= 0) {
    erroSegmentoB(i, valorDocumento, "valor do documento")
  }
  if (!/^\d{15}$/.test(abatimento)) {
    erroSegmentoB(i, valorDocumento, "valor do abatimento")
  }
  if (!/^\d{15}$/.test(desconto)) {
    erroSegmentoB(i, desconto, "valor do desconto")
  }
  if (!/^\d{15}$/.test(mora)) {
    erroSegmentoB(i, mora, "valor da mora")
  }
  if (!/^\d{15}$/.test(multa)) {
    erroSegmentoB(i, multa, "valor da multa")
  }
  if (!/^[\w\d\s]{15}$/.test(codDocFavorecido)) {
    erroSegmentoB(i, codDocFavorecido, "código do documento do favorecido")
  }
  if (!/^\d{1}$/.test(aviso)) {
    erroSegmentoB(i, aviso, "aviso")
  }
  if (!/^[\d\s]{6}$/.test(codigoUG)) {
    erroSegmentoB(i, codigoUG, "código da UG")
  }
  if (!/^[\d\s]{8}$/.test(ispb)) {
    erroSegmentoB(i, ispb, "código da ISPB")
  }



}

/**
 * Função responsável por validar os dados do segmento J do arquivo CNAB 240.
 *
 * @param {number} i - Índice do registro.
 * @param {string} banco - Código do banco.
 * @param {string} lote - Lote de serviço.
 * @param {string} tipoRegistro - Tipo de registro.
 * @param {string} numRegistro - Número de registro.
 * @param {string} segmento - Código de segmento.
 * @param {string} tipoMovimento - Tipo de movimento.
 * @param {string} codigoInstrucao - Código de instrução.
 * @param {string} codigoBarras - Código de barras.
 * @param {string} nomeCedente - Nome do cedente.
 * @param {string} dataVencimento - Data de vencimento.
 * @param {string} valorTitulo - Valor do título.
 * @param {string} desconto - Valor do desconto.
 * @param {string} acrescimos - Valor dos acréscimos.
 * @param {string} dataPagamento - Data de pagamento.
 * @param {string} valorPagamento - Valor do pagamento.
 * @param {string} quantidadeMoeda - Quantidade da moeda.
 * @param {string} referenciaSacado - Referência do sacado.
 * @param {string} nossoNumero - Nosso número.
 * @param {string} codigoMoeda - Código da moeda.
 * @param {string} cnab - CNAB.
 * @param {string} ocorrencias - Ocorrências.
 * @throws {Error} Lança um erro caso algum campo esteja inválido.
 */
function validaDadosSegmentoJ(i, banco, lote, tipoRegistro, numRegistro, segmento, tipoMovimento, codigoInstrucao, codigoBarras, nomeCedente, dataVencimento, valorTitulo, desconto, acrescimos, dataPagamento, valorPagamento, quantidadeMoeda, referenciaSacado, nossoNumero, codigoMoeda, cnab, ocorrencias) {

  if (banco !== '237') {
    erroSegmentoJ(i, banco, "código do banco");
  }
  if (!/^\d{4}$/.test(lote)) {
    erroSegmentoJ(i, lote, "lote de serviço");
  }
  if (tipoRegistro !== '3') {
    erroSegmentoJ(i, tipoRegistro, "tipo de registro");
  }
  if (!/^\d{5}$/.test(numRegistro)) {
    erroSegmentoJ(i, numRegistro, "número de registro");
  }
  if (segmento !== 'J') {
    erroSegmentoJ(i, segmento, "segmento");
  }
  if (!/^\d{1}$/.test(tipoMovimento)) {
    erroSegmentoJ(i, tipoMovimento, "tipo de movimento");
  }
  if (!/^\d{2}$/.test(codigoInstrucao)) {
    erroSegmentoJ(i, codigoInstrucao, "código de instrução");
  }
  if (!/^\d{44}$/.test(codigoBarras)) {
    erroSegmentoJ(i, codigoBarras, "código de barras");
  }
  if (!/^.{30}$/.test(nomeCedente)) {
    erroSegmentoJ(i, nomeCedente, "nome do cedente");
  }
  if (!/^\d{8}$/.test(dataVencimento)) {
    erroSegmentoJ(i, dataVencimento, "data de vencimento");
  }
  if (!/^\d{15}$/.test(valorTitulo)) {
    erroSegmentoJ(i, valorTitulo, "valor do título");
  }
  if (!/^\d{15}$/.test(desconto)) {
    erroSegmentoJ(i, desconto, "valor do desconto");
  }
  if (!/^\d{15}$/.test(acrescimos)) {
    erroSegmentoJ(i, acrescimos, "valor dos acréscimos");
  }
  if (!/^\d{8}$/.test(dataPagamento)) {
    erroSegmentoJ(i, dataPagamento, "data de pagamento");
  }
  if (!/^\d{15}$/.test(valorPagamento)) {
    erroSegmentoJ(i, valorPagamento, "valor do pagamento");
  }
  if (!/^\d{15}$/.test(quantidadeMoeda)) {
    erroSegmentoJ(i, quantidadeMoeda, "quantidade da moeda");
  }
  if (!/^.{20}$/.test(referenciaSacado)) {
    erroSegmentoJ(i, referenciaSacado, "referência do sacado");
  }
  if (!/^.{20}$/.test(nossoNumero)) {
    erroSegmentoJ(i, nossoNumero, "nosso número");
  }
  if (!/^\d{2}$/.test(codigoMoeda)) {
    erroSegmentoJ(i, codigoMoeda, "código da moeda");
  }
  if (!/^\s{6}$/.test(cnab)) {
    erroSegmentoJ(i, cnab, "CNAB");
  }
  if (!/^.{10}$/.test(ocorrencias)) {
    erroSegmentoJ(i, ocorrencias, "ocorrências");
  }
}

function validaDadosSegmentoJ52(i, banco, lote, registro, numRegistro, Segmento, cnab1, codMov, codigoRegOpcional, sacadoTipoInscricao, sacadoNumeroInscricao, sacadoNome, cedenteTipoInscricao, cedenteNumeroInscricao, cedenteNome, sacadorTipoInscricao, sacadorNumeroInscricao, sacadorNome, cnab2) {
  // TODO
  if (banco !== '237') {
    erroSegmentoJ52(i, banco, "código do banco");
  }
  if (!/^\d{4}$/.test(lote)) {
    erroSegmentoJ52(i, lote, "lote de serviço");
  }
  if (registro !== '3') {
    erroSegmentoJ52(i, registro, "tipo de registro");
  }
  if (!/^\d{5}$/.test(numRegistro)) {
    erroSegmentoJ52(i, numRegistro, "número de registro");
  }

  // Validação do Segmento
  if (Segmento !== 'J') {
    erroSegmentoJ52(i, Segmento, "código do segmento de registro detalhe");
  }

  // Validação CNAB (uso exclusivo FEBRABAN)
  if (!/^\s*$/.test(cnab1)) {
    erroSegmentoJ52(i, cnab1, "CNAB 1 (uso exclusivo FEBRABAN)");
  }

  // Validação Código de Movimento Remessa
  if (!/^\d{2}$/.test(codMov)) {
    erroSegmentoJ52(i, codMov, "código de movimento");
  }

  // Validação Código Registro Opcional
  if (!/^\d{2}$/.test(codigoRegOpcional)) {
    erroSegmentoJ52(i, codigoRegOpcional, "código de registro opcional");
  }

  // Validação Tipo de Inscrição do Sacado
  if (!/^\d{1}$/.test(sacadoTipoInscricao)) {
    erroSegmentoJ52(i, sacadoTipoInscricao, "tipo de inscrição do sacado");
  }

  // Validação Número de Inscrição do Sacado
  if (!/^\d{15}$/.test(sacadoNumeroInscricao)) {
    erroSegmentoJ52(i, sacadoNumeroInscricao, "número de inscrição do sacado");
  }

  // Validação Nome do Sacado
  if (sacadoNome.length > 40) {
    erroSegmentoJ52(i, sacadoNome, "nome do sacado");
  }

  // Validação Tipo de Inscrição do Cedente
  if (!/^\d{1}$/.test(cedenteTipoInscricao)) {
    erroSegmentoJ52(i, cedenteTipoInscricao, "tipo de inscrição do cedente");
  }

  // Validação Número de Inscrição do Cedente
  if (!/^\d{15}$/.test(cedenteNumeroInscricao)) {
    erroSegmentoJ52(i, cedenteNumeroInscricao, "número de inscrição do cedente");
  }

  // Validação Nome do Cedente
  if (cedenteNome.length > 40) {
    erroSegmentoJ52(i, cedenteNome, "nome do cedente");
  }

  // Validação Tipo de Inscrição do Sacador
  if (!/^\d{1}$/.test(sacadorTipoInscricao)) {
    erroSegmentoJ52(i, sacadorTipoInscricao, "tipo de inscrição do sacador");
  }

  // Validação Número de Inscrição do Sacador
  if (!/^\d{15}$/.test(sacadorNumeroInscricao)) {
    erroSegmentoJ52(i, sacadorNumeroInscricao, "número de inscrição do sacador");
  }

  // Validação Nome do Sacador
  if (sacadorNome.length > 40) {
    erroSegmentoJ52(i, sacadorNome, "nome do sacador");
  }

  // Validação CNAB 2 (uso exclusivo FEBRABAN)
  if (!/^\s*$/.test(cnab2)) {
    erroSegmentoJ52(i, cnab2, "CNAB 2 (uso exclusivo FEBRABAN)");
  }
}

/**
 * Função responsável por validar os campos do trailer de lote do arquivo CNAB 240.
 *
 * @param {number} i - Índice do registro.
 * @param {string} banco - Código do banco.
 * @param {string} lote - Lote de serviço.
 * @param {string} tipoRegistro - Tipo de registro.
 * @param {string} cnab - CNAB.
 * @param {string} qtdRegistros - Quantidade de registros do lote.
 * @param {string} valor - Valor total do lote.
 * @param {string} qtdMoeda - Quantidade de moeda.
 * @param {string} numeroAvisoDebito - Número do aviso de débito.
 * @param {string} cnab2 - CNAB2.
 * @param {string} ocorrencias - Ocorrências.
 * @throws {Error} Lança um erro caso algum campo esteja inválido.
 */
function validaDadosTrailerLote(i, banco, lote, tipoRegistro, cnab, qtdRegistros, valor, qtdMoeda, numeroAvisoDebito, cnab2, ocorrencias) {
  if (banco === "") {
    console.log("banco null", banco)
  }
  if (banco !== '237') {
    erroTrailerLote(i, banco, "código do banco")
  }
  if (!/^\d{4}$/.test(lote)) {
    erroTrailerLote(i, lote, "lote de serviço")
  }
  if (tipoRegistro !== '5') {
    erroTrailerLote(i, tipoRegistro, "tipo de registro")
  }
  if (!/^\s{9}$/.test(cnab)) {
    erroTrailerLote(i, cnab, "CNAB")
  }
  if (!/^\d{6}$/.test(qtdRegistros)) {
    erroTrailerLote(i, qtdRegistros, "Quantidade de Registros do Lote")
  }
  if (!/^\d{18}$/.test(valor)) {
    erroTrailerLote(i, valor, "Valor Total do Lote")
  }
  if (!/^\d{18}$/.test(qtdMoeda)) {
    erroTrailerLote(i, qtdMoeda, "Quantidade de Moeda")
  }
  if (!/^\d{6}$/.test(numeroAvisoDebito)) {
    erroTrailerLote(i, numeroAvisoDebito, "Número Aviso de Débito")
  }
  if (!/^\s{165}$/.test(cnab2)) {
    erroTrailerLote(i, cnab2, "CNAB2")
  }
  if (!/^[\w\d\s]{10}$/.test(ocorrencias)) {
    erroTrailerLote(i, ocorrencias, "Ocorrências")
  }
}

/**
 * Função responsável por validar os campos do trailer do arquivo CNAB 240.
 *
 * @param {number} i - Índice do registro.
 * @param {string} banco - Código do banco.
 * @param {string} lote - Lote de serviço.
 * @param {string} tipoRegistro - Tipo de registro.
 * @param {string} cnab - CNAB.
 * @param {string} qtdLotes - Quantidade de lotes do arquivo.
 * @param {string} qtdRegistros - Quantidade de registros do arquivo.
 * @param {string} qtdContasConcil - Quantidade de contas para conciliação (lotes).
 * @param {string} cnab2 - CNAB2.
 * @throws {Error} Lança um erro caso algum campo esteja inválido.
 */
function validaDadosTrailerArquivo(i, banco, lote, tipoRegistro, cnab, qtdLotes, qtdRegistros, qtdContasConcil, cnab2) {
  if (banco !== '237') {
    erroTrailerArquivo(i, banco, "código do banco")
  }
  if (!/^\d{4}$/.test(lote) && lote !== '9999') {
    erroTrailerArquivo(i, lote, "lote de serviço")
  }
  if (tipoRegistro !== '9') {
    erroTrailerArquivo(i, tipoRegistro, "tipo de registro")
  }
  if (!/^\s{9}$/.test(cnab)) {
    erroTrailerArquivo(i, cnab, "CNAB")
  }
  if (!/^\d{6}$/.test(qtdLotes)) {
    erroTrailerArquivo(i, qtdLotes, "quantidade de lotes do arquivo")
  }
  if (!/^\d{6}$/.test(qtdRegistros)) {
    erroTrailerArquivo(i, qtdRegistros, "quantidade de registros do arquivo")
  }
  if (!/^\d{6}$/.test(qtdContasConcil)) {
    erroTrailerArquivo(i, qtdContasConcil, "quantidade de contas p/ conc. (lotes)")
  }
  if (!/^\s{205}$/.test(cnab2)) {
    erroTrailerArquivo(i, cnab2, "CNAB2")
  }
}


export {
  validaDadosHeaderArquivo,
  validaDadosHeaderLote,
  validaDadosSegmentoA,
  validaDadosSegmentoB,
  validaDadosSegmentoJ,
  validaDadosSegmentoJ52,
  validaDadosTrailerLote,
  validaDadosTrailerArquivo
} 