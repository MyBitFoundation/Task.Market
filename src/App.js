import React from 'react'
import { Root } from 'react-static'
//
import Footer from '@mybit/ui.footer'
import Header from '@mybit/ui.task-market.header'

import './app.css'


function App() {
  return (
    <Root>
      <Header/>
      <div className="content">
        <div  style={{ maxWidth: 1128, marginTop: 40, margin: 'auto' }}>
          <Footer />
        </div>
      </div>
    </Root>
  )
}

export default App
