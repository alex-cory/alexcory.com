import React from 'react'
import styled from 'styled-components'
import { SocialLink } from '.'
import { media } from '../utils'

const Container = styled.div`
  position: absolute;
  color: white;
  ${media.phone`
    display: flex;
    margin: 8px;
  `}
  width: 50px;
  margin: 8px 0;
  text-align: center;
`

export const SocialMedia = () => (
  <Container>
    <SocialLink type='github' url='https://github.com/alex-cory' />
    <SocialLink type='linkedin' url='https://linkedin.com/in/alexcory' />
    <SocialLink type='codepen' url='https://codepen.io/alex-cory/' />
    <SocialLink type='twitter' url='twitter.com/alexcory_' />
    <SocialLink type='stackoverflow' url='https://stackoverflow.com/users/2782583/alex-cory' />
    <SocialLink type='facebook' url='fb.com/alexlcory' />
    <SocialLink type='medium' url='https://medium.com/alexcory' />
    <SocialLink type='jsfiddle' url='https://jsfiddle.net/user/alexcory/fiddles/' />
    <SocialLink type='email' url='mailto:results@alexcory.com' />
    {/* Runkit: https://runkit.com/alex-cory */}
    {/* Codesandbox: https://codesandbox.io/dashboard/recent */}
  </Container>
)
