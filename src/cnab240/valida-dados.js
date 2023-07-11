function erroHeaderArquivo(i, campo, descricao) {
  console.error(`Header Arquivo ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

function erroHeaderLote(i, campo, descricao) {
  console.error(`Header Lote ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

function erroSegmentoA(i, campo, descricao) {
  console.error(`Segmento A Reg ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

function erroSegmentoB(i, campo, descricao) {
  console.error(`Segmento B Reg ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

function erroTrailerLote(i, campo, descricao) {
  console.error(`Trailer Lote ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}

function erroTrailerArquivo(i, campo, descricao) {
  console.error(`Trailer Arquivo ${i + 1} - Campo inválido: "${descricao}" - "${campo}"`);
}



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
  validaDadosTrailerLote,
  validaDadosTrailerArquivo
} 