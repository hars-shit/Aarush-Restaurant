import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import LowerNavbar from '../Navbar/LowerNavbar'

import UperFooter from '../Footer/UperFooter'


import Cards from './Cards';
import dinner from '../../DB/dinner';
const Container=styled(Box)`
    color:white;
    background: #121212e6;
    width:100%;
    height:auto;
`
const Food=styled(Box)`
background: '#fafdfb';
padding:100px 0px;
`
const Heading=styled(Box)({
  paddingTop:10,
  marginBottom:30,
  '& > p':{
    textAlign:'center',
    fontSize:35 ,
    fontWeight:900,
  }
})
const Item = styled(Box)({
  display:'flex',
  justifyContent:'center',
  flexDirection:'column',
  alignItems:'center',
  gap:50
})
const Dinner=()=> {
 
  return (
    <Container>
         <LowerNavbar />
    <Food>

         <Heading>
    <Typography>
      Evening Feast
    </Typography>
         </Heading>
         {/* food section  */}
         <Item>
         
         
    {
      dinner.map(item=>{
        return(
          <Cards item={item} />
        

        )
      })
    }
     
   
         </Item>
         </Food>


         <UperFooter />
        {/* <LowerFooter /> */}
    </Container>
  )
}
export default Dinner