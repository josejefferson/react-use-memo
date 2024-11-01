export default function somaDosPrimosAte(numeroFinal) {
  let soma = 0

  for (let i = 2; i <= numeroFinal; i++) {
    let primo = true
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        primo = false
        break
      }
    }

    if (primo) {
      soma += i
    }
  }

  return soma
}
