import { useState } from 'react'
import somaDosPrimosAte from './somaDosPrimos'

export default function SemMemo() {
  const [numero, setNumero] = useState(0)
  const [texto, setTexto] = useState('')

  const resultado = somaDosPrimosAte(numero)

  return (
    <>
      <h1>Sem useMemo()</h1>
      A soma dos números primos até:
      <br />
      <input type="number" value={numero} onChange={(e) => setNumero(e.target.value)} /> é {resultado}
      <br />
      <br />
      Outra caixa de texto não relacionada:
      <br />
      <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
      {texto}
    </>
  )
}