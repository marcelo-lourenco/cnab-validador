     | 01.1 | Controle          | Banco                                                 | CódigodoBanconaCompensação             | 1   | 3   | 3  | Num  |         | G001  |
     | 02.1 | Controle          | Lote                                                  | LotedeServiço                          | 4   | 7   | 4  | Num  |         | *G002 |
     | 03.1 | Controle          | Registro                                              | TipodeRegistro                         | 8   | 8   | 1  | Num  | ‘1’     | *G003 |
     | 04.1 | Serviço           | ServiçoOperação                                       | TipodaOperação                         | 9   | 9   | 1  | Alfa | 'C'     | *G028 |
     | 05.1 | Serviço           | TipodoServiço                                         |                                        | 10  | 11  | 2  | Num  |         | *G025 |
     | 06.1 | Serviço           | FormaLançamento                                       | FormadeLançamento                      | 12  | 13  | 2  | Num  |         | *G029 |
     | 07.1 | Serviço           | LayoutdoLote                                          | NºdaVersãodoLayoutdoLote               | 14  | 16  | 3  | Num  | '045'   | *G030 |
     | 08.1 | CNAB              |                                                       | UsoExclusivodaFEBRABAN/CNAB            | 17  | 17  | 1  | Alfa | Brancos | G004  |
     | 09.1 | Empresa           | Inscrição                                             | Tipo
 TipodeInscriçãodaEmpresa        | 18  | 18  | 1  | Num  |         | *G005 |
     | 10.1 | Empresa | Inscrição | Número |
 NúmerodeInscriçãodaEmpresa    | 19  | 32  | 14 | Num  |         | *G006 |
     | 11.1 | Empresa           | Convênio                                              | CódigodoConvênionoBanco                | 33  | 52  | 20 | Alfa |         | *G007 |
     | 12.1 | Empresa           | ContaCorrente                                         | AgênciaCódigoAgênciaMantenedoradaConta | 53  | 57  | 5  | Num  |         | *G008 |
     | 13.1 | Empresa           | ContaCorrente                                         | DV  DígitoVerificadordaAgência         | 58  | 58  | 1  | Alfa |         | *G009 |
     | 14.1 | ContaNúmero       | NúmerodaContaCorrente                                 |                                        | 59  | 70  | 12 | Num  |         | *G010 |
     | 15.1 | DV                | DígitoVerificadordaConta                              |                                        | 71  | 71  | 1  | Alfa |         | *G011 |
     | 16.1 | DV                | DígitoVerificadordaAg/Conta                           |                                        | 72  | 72  | 1  | Alfa |         | *G012 |
     | 17.1 | Nome              | NomedaEmpresa                                         |                                        | 73  | 102 | 30 | Alfa |         | G013  |
     | 18.1 | Informação        | 1Mensagem                                             |                                        | 103 | 142 | 40 | Alfa |         | *G031 |
     | 19.1 | EndereçodaEmpresa | LogradouroNomedaRua,Av,Pça,Etc                        |                                        | 143 | 172 | 30 | Alfa |         | G032  |
     | 20.1 | Número            | NúmerodoLocal                                         |                                        | 173 | 177 | 5  | Num  |         | G032  |
     | 21.1 | Complemento       | Casa,Apto,Sala,Etc                                    |                                        | 178 | 192 | 15 | Alfa |         | G032  |
     | 22.1 | Cidade            | NomedaCidade                                          |                                        | 193 | 212 | 20 | Alfa |         | G033  |
     | 23.1 | CEP               | CEP                                                   |                                        | 213 | 217 | 5  | Num  |         | G034  |
     | 24.1 | ComplementoCEP    | ComplementodoCEP                                      |                                        | 218 | 220 | 3  | Alfa |         | G035  |
     | 25.1 | Estado            | SigladoEstado                                         |                                        | 221 | 222 | 2  | Alfa |         | G036  |
     | 26.1 | Indicativode      | FormadePagamentoIndicativodeFormadePagamentodoServiço |                                        | 223 | 224 | 2  | Num  | ‘01’    | P014  |
     | 27.1 | CNAB              | UsoExclusivoFEBRABAN/CNAB                             |                                        | 225 | 230 | 6  | Alfa | Brancos | G004  |
     | 28.1 | Ocorrências       | CódigosdasOcorrênciasp/Retorno                        |                                        | 231 | 240 | 10 | Alfa |         | *     |

let banco                       =  posicao(1,3 );
let lote                        =  posicao(4,7 );
let tipoRegistro                =  posicao(8,8 );
let cnab                        =  posicao(9,17 );
let inscricaoTipo               =  posicao(18,18 );
let inscricaoNumero             =  posicao(19,32 );
let convenio                    =  posicao(33,52 );
let agenciaCodigo               =  posicao(53,57 );
let agenciaDv                   =  posicao(58,58 );
let contaNumero                 =  posicao(59,70 );
let contaDv                     =  posicao(71,71 );
let dv                          =  posicao(72,72 );
let nome                        =  posicao(73,102 );
let nomeBanco                   =  posicao(103,132 );
let cnab2                       =  posicao(133,142 );
let codigoRemRet                =  posicao(143,143 );
let dataGeracao                 =  posicao(144,151 );
let horaGeracao                 =  posicao(152,157 );
let sequencia                   =  posicao(158,163 );
let layout                      =  posicao(164,166 );
let densidade                   =  posicao(167,171 );
let reservadoBanco              =  posicao(172,191 );
let reservadoEmpresa            =  posicao(192,211 );
let cnab3                       =  posicao(212,240 );


{id:'banco',title:'banco'},
{id:'lote',title:'lote'},
{id:'tipoRegistro',title:'tipoRegistro'},
{id:'cnab',title:'cnab'},
{id:'qtdRegistros',title:'qtdRegistros'},
{id:'valor',title:'valor'},
{id:'qtdMoeda',title:'qtdMoeda'},
{id:'numeroAvisoDebito',title:'numeroAvisoDebito'},
{id:'cnab2',title:'cnab2'},
{id:'ocorrencias',title:'ocorrencias'},

let banco = posicao(1,3);
let lote = posicao(4,7);
let tipoRegistro = posicao(8,8);
let cnab = posicao(9,17);
let qtdRegistros = posicao(18,23);
let valor = posicao(24,41);
let qtdMoeda = posicao(42,59);
let numeroAvisoDebito = posicao(60,65);
let cnab2 = posicao(66,230);
let ocorrencias = posicao(231,240);


banco,lote,tipoRegistro,cnab,qtdRegistros,valor,qtdMoeda,numeroAvisoDebito,cnab2,ocorrencias

let banco           = posicao(1,3 );
let lote            = posicao(4,7 );
let tipoRegistro    = posicao(8,8 );
let cnab            = posicao(9,17);
let qtdLotes        = posicao(18,23);
let qtdRegistros    = posicao(24,29 );
let qtdContasConcil = posicao(30,35 );
let cnab2           = posicao(36,240 );





banco, lote, tipoRegistro, cnab, inscricaoTipo, inscricaoNumero, convenio,      agenciaCodigo,      agenciaDv, contaNumero, contaDv, dv, nome, nomeBanco, cnab2, codigoRemRet, dataGeracao, horaGeracao, sequencia, layout, densidade, reservadoBanco, reservadoEmpresa, cnab3


let banco
let Lote
let tipoRegistro
let tipoOperacao
let tipoServico
let formaLancamento
let layout
let cnab
let inscricaoTipo
let inscricaoNumero
let convenio
let agenciaCodigo
let agenciaDv
let contaNumero
let contaDv
let dv
let nome
let logradouro
let numero
let complemento
let bairro
let cidade
let cep
let complementoCep
let estado
let formadePagamento
let cnab2
let ocorrencias

' },
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
{ id: 'logradouro', title: 'logradouro' },
{ id: 'numero', title: 'numero' },
{ id: 'complemento', title: 'complemento' },
{ id: 'bairro', title: 'bairro' },
{ id: 'cidade', title: 'cidade' },
{ id: 'cep', title: 'cep' },
{ id: 'complementoCep', title: 'complementoCep' },
{ id: 'estado', title: 'estado' },
{ id: 'formadePagamento', title: 'formadePagamento' },
{ id: 'cnab2', title: 'cnab2' },
{ id: 'ocorrencias', title: 'ocorrencias' },