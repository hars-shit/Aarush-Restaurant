import { AppBar, Box, Typography, styled } from '@mui/material'
import React from 'react'

const Footer=styled(Box)({
    width:'100%',
    background:'rgb(142, 181, 11)',
    height:'2rem',
    display:'flex',
    margin:'0px 0px',
    justifyContent:'center',
    alignItems:'center',
    padding:'20px 20px',
    '& > p':{
        color:'white',
        fontSize:14
    }
    
})
const LowerFooter=()=> {
  return (
    <Footer>
        <Typography>
             All Rights Reserved. Design with ❤️ by Harshit
        </Typography>
    </Footer>
  )
}
export default LowerFooter