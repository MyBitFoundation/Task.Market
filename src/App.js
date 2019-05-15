import React from 'react'
import { Root } from 'react-static'
import styled from 'styled-components'
//
import Footer from '@mybit/ui.footer'
import Header from '@mybit/ui.task-market.header'

import Icon from './images/icon-building.svg';
import './app.css'

const LandingWrapper = styled.div`
  margin: 64px auto 96px;
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

const TelegramButton = styled.a`
  line-height: 2.7;
  position: relative;
  display: inline-block;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0,0,0,0.015);
  cursor: pointer;
  transition: all .3s cubic-bezier(.645, .045, .355, 1);
  user-select: none;
  touch-action: manipulation;
  color: rgba(0,0,0,0.65);
  background-color: #fff;
  height: 40px;
  padding: 0 20px;
  font-size: 14px;
  border-radius: 4px;
  color: #fff;
  background-color: #1890ff;
  border-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
  box-shadow: 0 2px 0 rgba(0,0,0,0.045);
  font-family: Roboto;
  margin: 0 auto;
  display: block;
  width: max-content;
`

const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;

  &:hover{
    text-decoration: none;
    outline: 0;
    color: #40a9ff;
  }
`

function App() {
  return (
    <Root>
      <Header
        title="Task.Market is being replaced"
        content={<span>During our quest to design an application for decentralised workflows 
          we connected with Autark Labs and The Planning Suite (
            <StyledLink
              href="https://github.com/AutarkLabs/planning-suite"
              target="_blank"
              rel="noopener noreferrer"
            >
              TPS
            </StyledLink>
          ), which offers 
          the ideal solution for MyBit. Therefore, we decided to work together, rather 
          than compete with our own application.</span>}
      />
      <div className="content">
        <LandingWrapper>
          <LandingIcon />
          <LandingTitle>Opportunity to Create</LandingTitle>
          <LandingParagraph>
            TPS is an Aragon application which seamlessly integrates into the MyBit DAO. 
            They have received nearly $500,000 in funding from the Aragon Foundation to develop their 
            solution. Currently, it is still on testnet, but we have fully tested it and are ready to 
            bring it to the MyBit DAO the second it reaches main-net.
          </LandingParagraph>
          <LandingTagline>More to come shortly. Join Telegram for updates.</LandingTagline>
          <TelegramButton
            href="https://t.me/mybitio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join Telegram
          </TelegramButton>
        </LandingWrapper>
        <div  style={{ maxWidth: 1128, marginTop: 40, margin: 'auto' }}>
          <Footer />
        </div>
      </div>
    </Root>
  )
}

export default App
