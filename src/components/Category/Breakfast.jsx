import { Box, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import LowerNavbar from '../Navbar/LowerNavbar'

import UperFooter from '../Footer/UperFooter'

import breakfast from '../../DB/breakfast';

import Cards from './Cards';
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
const Breakfast=()=> {
  const [purchase,setPurchase]=useState(false);
 
 
 
  return (
    <Container>
         <LowerNavbar />
    <Food>

         <Heading>
    <Typography>
     Morning Delights
    </Typography>
         </Heading>
         {/* food section  */}
         <Item>
         
         
    {
      breakfast.map(item=>{
        return(
          <Cards item={item}  purchase={purchase} setPurchase={setPurchase}/>
        

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
export default Breakfast