import { Box, Typography, styled } from '@mui/material'
import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import {MdCall,MdLocationOn} from 'react-icons/md'
import {GrMail} from 'react-icons/gr'
import {AiFillInstagram,AiFillGoogleCircle} from 'react-icons/ai'
import {BiLogoTwitter,BiLogoFacebook } from 'react-icons/bi'
import {GoDotFill} from 'react-icons/go'
import { useSelector } from 'react-redux'
const Container=styled(Box)({
    display:'flex',
    flexDirection:'column',
    margin:'50px 20px',
})
const Main=styled(Box)({
    display:'flex',
    flexDirection:'column',   
    gap:10,
    marginBottom:20,
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
const Heading=styled(Typography)({
    fontSize:40,
    color:'rgb(255,255,255)',
    fontWeight:'bold'
})
const Lower=styled(Typography)({
    fontSize:30,
    color:'rgb(255,255,255)',
    fontWeight:'bold'

})
const Links=styled(Box)({
    display:'flex',
    flexDirection:'column',
    '&>a':{
        display:'flex',
        alignItems:'center',
        textDecoration:'none',
        color:'white',
        gap:10,
        '&  > svg':{
            color:'rgb(142, 181, 11)',
        }
    }
})
const Info=styled(Typography)({
    color:'rgb(142, 181, 11)',
    marginLeft:25,
    fontSize:15,
    
})
const Media=styled(Box)({
    display:'flex',
    gap:10,
   '& > div':{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    background:'rgb(255,255,255)',
    border:'1px solid rgb(255,255,255)',
    width:40,
    height:40,
    '&> svg':{
        fontSize:22,
        color: 'rgb(37, 37, 37)'
    }
   }
    
})
const UperFooter=()=> {
    const show=useSelector(state=>state.aboutSlice)
    const about=useRef(null);
  
    if(show && about.current){
        about.current.scrollIntoView({behavior:'smooth'})
    }
   
    // if(show===true){
    //     about.current.scrollIntoView({behavior:'smooth'})
    // }
  return (
    <Container ref={about}>
        {/* for established */}
        <Main>
        <Heading>
            AARUSH
        </Heading>
        <Font>
        For two years, Aarush has graced the culinary scene of Gopeshwar, earning a reputation as an iconic destination for exceptional dining.
        </Font>
        </Main>

        {/* for navigation  */}
        {/* <Main>
            <Lower>
                NAVIGATION
            </Lower>
            <Links>
            <Link to='/'><GoDotFill /> Home</Link>
            <Link onClick={()=>handleRoute(about)}><GoDotFill /> About</Link>
            <Link to='/delivery'><GoDotFill /> Shop</Link>
            <Link to='/services'><GoDotFill /> Services</Link>
            </Links>

        </Main> */}

        {/* for contact info  */}
        <Main>
            <Lower>
                CONTACT INFO
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

        </Main>

        {/* follow  */}
        <Main>       
        <Lower >
            DISCOVER
        </Lower>
        <Media>
       <Box><BiLogoFacebook /></Box> 
        <Box><AiFillInstagram /></Box>
        <Box><BiLogoTwitter /></Box>
        <Box><AiFillGoogleCircle /></Box>
        </Media>
        </Main>
       
    </Container>
  )
}
export default UperFooter
