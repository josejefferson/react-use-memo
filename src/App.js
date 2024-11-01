import ComMemo from './ComMemo'
import ComMemoDependenciasExtras from './ComMemoDependenciasExtras'
import ComMemoSemDependencias from './ComMemoSemDependencias'
import SemMemo from './SemMemo'

export default function App() {
  return (
    <>
      <div style={{ border: 'black 1px solid', padding: '10px', marginTop: '20px' }}>
        <SemMemo />
      </div>

      <div style={{ border: 'black 1px solid', padding: '10px', marginTop: '20px' }}>
        <ComMemo />
      </div>

      <details style={{ marginTop: '20px' }}>
        <summary>Mais exemplos</summary>

        <div style={{ border: 'black 1px solid', padding: '10px', marginTop: '20px' }}>
          <ComMemoSemDependencias />
        </div>

        <div style={{ border: 'black 1px solid', padding: '10px', marginTop: '20px' }}>
          <ComMemoDependenciasExtras />
        </div>
      </details>
    </>
  )
}
