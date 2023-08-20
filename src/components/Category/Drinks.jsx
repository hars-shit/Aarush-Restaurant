import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import LowerNavbar from '../Navbar/LowerNavbar'
import UperFooter from '../Footer/UperFooter'
import Cards from './Cards';
import drinks from '../../DB/drinks';
import LowerFooter from '../Footer/LowerFooter';
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
  display: 'grid',
    gap: 60,
    gridTemplateColumns: 'auto auto auto',
  justifyContent:'center',
  flexDirection:'column',
  alignItems:'center',
  gap:50,
  '@media (max-width:1188px)':{
    gridTemplateColumns: 'auto auto',
    
},
'@media (max-width:772px)':{
  gridTemplateColumns: 'auto',
  
},
})
const Drinks=()=> {
 
  return (
    <Container>
         <LowerNavbar />
    <Food>

         <Heading>
    <Typography>
    Liquid Euphoria
    </Typography>
         </Heading>
         {/* food section  */}
         <Item>
         
         
    {
      drinks.map(item=>{
        return(
          <Cards item={item} />
        

        )
      })
    }
     
   
         </Item>
         </Food>


         <UperFooter />
        <LowerFooter />
    </Container>
  )
}
export default Drinks