import React from 'react'
import { Root } from 'react-static'
import styled from 'styled-components'
//
import Footer from '@mybit/ui.footer'
import Header from '@mybit/ui.task-market.header'

import Icon from './images/icon-building.svg';
import './app.css'

const LandingWrapper = styled.div`
  margin: 128px auto;
`
const LandingTagline = styled.p`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  text-align: center;
  color: #111111;
  margin-top: 64px;
`

const LandingParagraph = styled.p`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
  color: #111111;
  max-width: 744px;
  margin: 16px auto;
`

const LandingTitle = styled.h2`
  font-family: Gilroy;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 40px;
  text-align: center;
  color: #111111;
  margin: 0;
`
const LandingIcon = styled(Icon)`
  display: block;
  margin: 0 auto;
`

function App() {
  return (
    <Root>
      <Header/>
      <div className="content">
        <LandingWrapper>
          <LandingIcon />
          <LandingTitle>Opportunity to Create</LandingTitle>
          <LandingParagraph>
            As such, we see this as a giant opportunity to create our own version on 
            Bounties.Network that maintains the values and principles of the industry as well as 
            maintains the best interests of the users.
          </LandingParagraph>
          <LandingTagline>More to come shortly.  Subscribe for updates.</LandingTagline>
        </LandingWrapper>
        <div  style={{ maxWidth: 1128, marginTop: 40, margin: 'auto' }}>
          <Footer />
        </div>
      </div>
    </Root>
  )
}

export default App
