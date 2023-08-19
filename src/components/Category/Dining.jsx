import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useState } from 'react'
import LowerNavbar from '../Navbar/LowerNavbar'
import UperFooter from '../Footer/UperFooter'
import {MdLocationOn,MdCall} from 'react-icons/md'
import {GrMail } from 'react-icons/gr'
import LowerFooter from '../Footer/LowerFooter'
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
const Message=styled(Box)({
  border:'1px solid white',
  // marginBottom:25,
  color:'white',
  padding:'20px 20px'
})
const Info=styled(Typography)({
  color:'rgb(142, 181, 11)',
  marginLeft:25,
  fontSize:15,
  
})
const Lower=styled(Typography)({
  fontSize:30,
  color:'rgb(255,255,255)',
  fontWeight:'bold'

})
const Font=styled(Typography)({
  fontSize:15,
  display:'flex',
  gap:10,
alignItems:'center',
  color:'rgb(248,248,248)',
  '& > a':{
      textDecoration:'none',
      color:'rgb(248,248,248)',

  }
})
const Extra=styled(Box)({
  display:'flex',
  justifyContent:'center',
  alignItems:'center',
  flexDirection:'column',
  marginTop:20,
  gap:5
})
const Request=styled(Typography)({
  fontSize:14
})
const Dining=()=> {
  
  useEffect(()=>{
    scrollTo(0, 0)
  }, []);
 
 
  return (
    <Container>
         <LowerNavbar />
    <Food>

         <Heading>
    <Typography>
    Table Reservations
    </Typography>
         </Heading>
         {/* food section  */}
         <Item>
        <Message>
        <Lower>
               Directly book table vai 
            </Lower>
            {/* for addess */}
            <Box>
                    <Info>Restaurant Address</Info>
                <Font>
                    <MdLocationOn />Kothiyalsain,Gopeshwar 246424
                </Font>
                <Info>Customer Service</Info>
                <Font>
                    <MdCall /><a href="tel:+9520593613">+9520593613</a>
                </Font>
                <Font>
                    <GrMail /><a href="mailto:upadhyayharshit05@gmail.com">aarush@gmail.com</a>
                </Font>
            </Box>
            <Extra>
              
            <Typography>or</Typography>
            <Request>
            If tables are not free than please wait 10-20 minutes, you will get the table 
            </Request>
            </Extra>
        </Message>
         </Item>
         </Food>


         <UperFooter />
        <LowerFooter/>
    </Container>
  )
}
export default Dining