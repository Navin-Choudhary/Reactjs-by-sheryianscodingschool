import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user='Mikasa' age={18} img='https://tse3.mm.bing.net/th/id/OIP.32URIpthG-kHlO04wJGIeAHaHa?pid=Api&P=0&h=180'/>
      <Card user='Eren' age={19} img='https://tse1.mm.bing.net/th/id/OIP.92ht-gStSK-VSXyTA7JkcQHaHa?pid=Api&P=0&h=180'/>
      <Card user='Armin' age={20} img='https://tse3.mm.bing.net/th/id/OIP.Pcxq_Inw9bmDuXFaS0iqOQHaHa?pid=Api&P=0&h=180'/>
    </div>
  )
}

export default App