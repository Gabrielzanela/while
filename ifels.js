bk = 36.46
console.log('BK: '  + bk)

if (bk <= 35){
    bk_desc = bk -  0.95
    bk_desc = bk - ((bk*5)/100)

      console.log('desconto de 5% Valor: ' + bk_desc)
} else if (bk > 35 && BK < 45){
      bk_desc = BK - (BK * 0.1)
      console.log('desconto de 10%. valor com desconto: ' + bk_desc)
}   else if (bk >= 45){
    bk_desc = bk - (bk * 0.15)
    console.log('desconto de 15%. Valor com desconto: ' + bk_desc)
}



