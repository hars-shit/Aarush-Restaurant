import { Box, ButtonBase, InputBase, Typography, styled } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Image=styled(Box)`

background-image:url('/assets/contact-bg.png');
width: 100%;
text-align: center;
height: auto;
background-size: 100%;
padding: 40px 0px 60px;
margin:20px 10px;
display:flex;
flex-direction:column;
justify-content:center;
align-Items:center;
`
const Heading=styled(Typography)({
    marginTop:10,
    color:'white',
    fontSize:25,
    fontWeight:700,
    marginBottom:20
})
const Input=styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
alignItems:'center',


})
const Field=styled(InputBase)({
    background:'white',
    marginBottom:30,
    width:'20rem',
    borderRadius:10,
    padding:'10px 10px',

})
const Message=styled(InputBase)({
    background:'white',
    marginBottom:30,
    width:'20rem',
    height:'5rem',
    borderRadius:10,
    padding:'10px 10px',
})
const Btn=styled(ButtonBase)({
    marginTop:10,
    width:'10rem',
    height:'3.5rem',
    borderRadius:10,
    backgroundColor: 'rgb(142, 181, 11)',
    color: 'rgb(254, 254, 255)',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    
    
})
const Order=styled(Box)({
    marginTop:50,
    background:'white',
    width:'20rem',
    height:'12rem',
    borderRadius:10,
    padding:'20px 20px',
    '& > p':{
        fontSize:30,
        fontWeight:900,
        color:'black',
        marginTop:10,
    },
    '& > button':{
        marginTop:20
    }
})
 function SignUp() {
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/delivery')
    }
    const handleSend=()=>{
        window.location.reload();
    }
  return (
    <Image>
        <Heading>
            Get In Touch
        </Heading>
        <Input>
            <Field placeholder='Name'/>
            <Field placeholder='Phone Number'/>
            <Field placeholder='Email'/>
            <Message placeholder='Message'/>
        </Input>
        <Btn onClick={handleSend}>
            SEND
        </Btn>
        {/* for order  */}
        <Order>
        <Typography>
            ORDER BEST FOOD AT TIME
        </Typography>
        <Btn onClick={handleClick}>
            ORDER NOW
        </Btn>
        </Order>
    </Image>
  )
}
export default SignUp