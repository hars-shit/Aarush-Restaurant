import { Box, styled } from '@mui/material'
import React from 'react'
import LowerNavbar from '../components/Navbar/LowerNavbar'
import MainFrame from '../components/Frame/MainFrame'


const Container=styled(Box)({
    width: '100%',
    backgroundColor: 'rgba(18, 18, 18, 0.9)',
    height: 'auto',
    backgroundSize: 'cover',
    float: 'left'

})
const Home=()=> {
  return (
    <Container>
        <LowerNavbar />
     <MainFrame />
        
    </Container>
  )
}
export default Home
