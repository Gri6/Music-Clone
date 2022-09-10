import React from 'react'
import { LeftMenu } from './Components/LeftMenu'
import { MainContainer } from './Components/MainContainer'
import { RightMenu } from './Components/RightMenu'
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <LeftMenu />
      <MainContainer />
      <RightMenu />

      <div className='background'></div>
    </div>
  )
}

export default App