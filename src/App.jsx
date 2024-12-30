import Header from './components/Header'
import { ways, differences } from './data'
import WayToTeach from './components/WayToTeach'
import Button from './components/Button/Button'
import { useState } from 'react'

export default function App() {
  const [ content, setContent ] = useState('нажми на кнопку')
  // 1й элемент это само значение а 2й это функция меняющая это знач

  function handleClick(type) {
    setContent(type)
    // content = type
  }

  return (
    <div>
      <Header />
      <main>
        <section>
          <h3>наш подход к обучению</h3>

          <ul>
            <WayToTeach {... ways[0]} />
            <WayToTeach title={ways[1].title} description={ways[1].description} />
            <WayToTeach {... ways[2]} />
            <WayToTeach {... ways[3]} />
          </ul>
        </section>

        <section>
          <h3>Чем мы отличаемся</h3>
          <Button onClick={() => handleClick('way')}>
            подход
          </Button>
          <Button onClick={() => handleClick('easy')}>
            доступность
          </Button>
          <Button onClick={() => handleClick('program')}>
            концентрация
          </Button>

          <p>{differences[content]}</p>
        </section>
      </main>
    </div>
  )
}