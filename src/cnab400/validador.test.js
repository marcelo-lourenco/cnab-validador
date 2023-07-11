// import { readFile } from "fs";
// import { describe, before, after, it, test } from "node:test";
// import assert from "node:assert";
// 
// import { definePosicoes } from "./mapa-posicoes.js";
// 
// const nomeArquivo = "cb126063.REM";
// const dirRem = "./arq-cnab400/rem";
// 
// /* 
// readFile(`${dirRem}/${nomeArquivo}`, 'utf8', (err, data) => {
//   if (err) throw err;
//   registros = data.split('\n');
// });
// 
// setInterval(() => {
//   console.log(registros)
// }, 2000);
//  */
// 
// describe('desc1', () => {
//   let registros = [];
//   before((done) => {
//     readFile(`${dirRem}/${nomeArquivo}`, 'utf8', (err, data) => {
//       if (err) throw err;
//       registros = data.split('\n');
//       done();
//     });
//   });
// 
//   it('it1', (registros) => {
//     console.log(registros)
//     //assert.strictEqual(registros, 1);
//   });
// 
// });




import { readFile } from "fs";
import { describe, before, after, it, test } from "node:test";
import assert from "node:assert";

import { definePosicoes, dadosHeaderLabel, posicoesHeaderLabel } from "./mapa-posicoes.js";

const nomeArquivo = "cb126063.REM";
const dirRem = "./arq-cnab400/rem";

/* 
readFile(`${dirRem}/${nomeArquivo}`, 'utf8', (err, data) => {
  if (err) throw err;
  registros = data.split('\n');
});

setInterval(() => {
  console.log(registros)
}, 2000);
 */

describe('desc1', () => {
  let registros = [];
  before((done) => {
    readFile(`${dirRem}/${nomeArquivo}`, 'utf8', (err, data) => {
      if (err) throw err;
      registros = data.split('\n');
      //console.log(registros)

      done();
    });
  });

  it('it1', (registros) => {

    definePosicoes(registros);

    assert.equal(registros, null);
  });
  //console.log(registros)

});

