function somar(a, b){
       return a + b
}
console.log(somar(30, 40))

const somar2 = function(a,b,c){
    if (c != NaN) return a + b
    else return a + b + c
}

console.log(somar2(b=80, a=20))

const somar3 = (x = 50,y = 80) => {
     return x + y
}

console.log(somar3(y=20, x=70))



