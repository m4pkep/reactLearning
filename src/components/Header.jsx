import logo from '/logo-name.svg'
import { useState } from 'react'

export default function Header() {
  const [now, setNow] = useState(new Date())

  setInterval(() => setNow(new Date()), 1000)

    return (
      <header>
        <img src={logo}/>
        {/* <h3>React University</h3> */}
        <span>время сейчас: {now.toLocaleTimeString()}</span>
      </header>
    )
  }