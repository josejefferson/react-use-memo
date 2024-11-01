import { useState } from 'react'

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

function somaDosNNumerosDeFibonacci(n) {
  let soma = 0

  for (let i = 1; i <= n; i++) {
    soma += fibonacci(i)
  }

  return soma
}

export default function Exercicio() {
  const [nome, setNome] = useState('')
  const [numeros, setNumeros] = useState(33)

  const resultado = somaDosNNumerosDeFibonacci(numeros)

  return (
    <>
      <h1>Exercício</h1>
      Nome:
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite alguma coisa aqui e veja tudo travar!"
        style={{width: '300px'}}
      />
      <br />
      Números:
      <input type="number" max={33} value={numeros} onChange={(e) => setNumeros(e.target.value)} />
      <br />
      <br />A soma dos {numeros} primeiros números da sequência de Fibonacci é {resultado}.
    </>
  )
}
