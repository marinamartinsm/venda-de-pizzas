'use strict';

//variáveis
let somaMussarela = 0;
let somaCalabresa = 0;
let somaFrango = 0;
let somaBrocolis = 0;
let somaLombo = 0;
let totalMussarela = 0.00;
let totalCalabresa = 0.00;
let totalFrango = 0.00;
let totalBrocolis = 0.00;
let totalLombo = 0.00;

let btnVendas = document.getElementById('vendas');
let btnDeletar = document.getElementById('deletar');
let btnPlanilha = document.getElementById('exportar');

//eventos 
btnVendas.addEventListener('click', venda, false);
btnDeletar.addEventListener('click', deletar, false);
btnPlanilha.addEventListener('click', planilha, false);

//funções
function venda (e) {
  if(document.getElementById('mussarela').checked)
    {
      somaMussarela = somaMussarela+1;
      totalMussarela = totalMussarela + 22.00;
      document.getElementById('resMussarela').innerHTML = somaMussarela;
      document.getElementById('vendasMussarela').innerHTML = totalMussarela.toFixed(2);
    } else if (document.getElementById('calabresa').checked) {
      somaCalabresa = somaCalabresa+1;
      totalCalabresa = totalCalabresa + 23.00;
      document.getElementById('resCalabresa').innerHTML = somaCalabresa;
      document.getElementById('vendasCalabresa').innerHTML = totalCalabresa.toFixed(2);
    } else if (document.getElementById('frango-catupiry').checked) {
      somaFrango = somaFrango+1;
      totalFrango = totalFrango + 24.00;
      document.getElementById('resFrango').innerHTML = somaFrango;
      document.getElementById('vendasFrango').innerHTML = totalFrango.toFixed(2);
    } else if (document.getElementById('brocolis').checked) {
      somaBrocolis = somaBrocolis+1;
      totalBrocolis = totalBrocolis + 25.00;
      document.getElementById('resBrocolis').innerHTML = somaBrocolis;
      document.getElementById('vendasBrocolis').innerHTML = totalBrocolis.toFixed(2);
    } else if (document.getElementById('lombo').checked) {
      somaLombo = somaLombo+1;
      totalLombo = totalLombo + 26.00;
      document.getElementById('resLombo').innerHTML = somaLombo;
      document.getElementById('vendasLombo').innerHTML = totalLombo.toFixed(2);
    }
  }

  function deletar (e) {
    if(document.getElementById('mussarela').checked)
      {
        somaMussarela = somaMussarela-1;
        totalMussarela = totalMussarela - 22.00;
        if (somaMussarela < 0)
        {
          somaMussarela = 0;
          totalMussarela = 0.00;
        }
        document.getElementById('resMussarela').innerHTML = somaMussarela;
        document.getElementById('vendasMussarela').innerHTML = totalMussarela.toFixed(2);
      } else if (document.getElementById('calabresa').checked) {
        somaCalabresa = somaCalabresa-1;
        totalCalabresa = totalCalabresa - 23.00;
        if (somaCalabresa < 0)
        {
          somaCalabresa = 0;
          totalCalabresa = 0.00;
        }
        document.getElementById('resCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendasCalabresa').innerHTML = totalCalabresa.toFixed(2);
      } else if (document.getElementById('frango-catupiry').checked) {
        somaFrango = somaFrango-1;
        totalFrango = totalFrango - 24.00;
        if (somaFrango < 0)
        {
          somaFrango = 0;
          totalFrango = 0.00;
        }
        document.getElementById('resFrango').innerHTML = somaFrango;
        document.getElementById('vendasFrango').innerHTML = totalFrango.toFixed(2);
      } else if (document.getElementById('brocolis').checked) {
        somaBrocolis = somaBrocolis-1;
        totalBrocolis = totalBrocolis - 25.00;
        if (somaBrocolis < 0)
        {
          somaBrocolis = 0;
          totalBrocolis = 0.00;
        }
        document.getElementById('resBrocolis').innerHTML = somaBrocolis;
        document.getElementById('vendasBrocolis').innerHTML = totalBrocolis.toFixed(2);
      } else if (document.getElementById('lombo').checked) {
        somaLombo = somaLombo-1;
        totalLombo = totalLombo - 26.00;
        if (somaLombo < 0)
        {
          somaLombo = 0;
          totalLombo = 0.00;
        }
        document.getElementById('resLombo').innerHTML = somaLombo;
        document.getElementById('vendasLombo').innerHTML = totalLombo.toFixed(2);
      }
    }

    function planilha (e) {
      TableToExcel.convert(document.getElementById('tabela'));
    }