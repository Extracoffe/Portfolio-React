import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header>
      <nav>
        <div>Home</div>
        <div>Sobre Mim</div>
        <div>Trabalhos</div>
        <div>Contato</div>
      </nav>
    </header>
    <main>
      <div className='App'>
        <h1>Opa! Tudo bem?</h1>
        <h3>Prazer! Meu nome é André Rodarte, e eu sou um desenvolvedor Front-End. Comecei a focar nesse ramo há pouco tempo, porém, em 2022 eu comecei uma faculdade de Engenharia da Computação, na Facens. Atualmente estou cursando Análise e Desenvolvimento de Sistemas na Unicesumar EAD. Estou no segundo semestre do curso, e estou totalmente empolgado para me tornar um desenvolvedor Full-Stack!</h3>
      </div>
    </main> 
    </>
  )
}

export default App