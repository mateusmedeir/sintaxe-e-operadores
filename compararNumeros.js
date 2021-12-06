function sintaxeOperadores(n1, n2) {
  if (!n1 || !n2) {
    return `Defina dois numeros!`
  } else {
    let iguais
    let maiorMenor1
    let maiorMenor2
    let soma = n1 + n2
    if (n1 == n2) {
      iguais = `são`
    } else {
      iguais = `não são`
    }
    if (soma > 10) {
      maiorMenor1 = `maior`
    } else {
      maiorMenor1 = `menor`
    }
    if (soma > 20) {
      maiorMenor2 = `maior`
    } else {
      maiorMenor2 = `menor`
    }
    return `Os numeros ${n1} e ${n2} ${iguais} iguais. Sua soma é ${soma}, que é ${maiorMenor1} que 10 e ${maiorMenor2} que 20.`
  }
}

console.log(sintaxeOperadores(2, 1))
