import { Box,  Button,  ButtonBase,  Snackbar,  Typography, styled } from '@mui/material'
import React, { Fragment, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';

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
const Input=styled('form')({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
alignItems:'center',


})
const Field=styled('input')({
    background:'white',
    marginBottom:30,
    width:'20rem',
    borderRadius:10,
    padding:'10px 10px',

})
const Message=styled('textarea')({
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
const Send=styled('input')({
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
    const contact=useSelector(state=>state.contactSlice)
    const [open,setOpen]=useState(false);
    const form = useRef();
    const container=useRef(null);
    if(contact && container.current){
        container.current.scrollIntoView({behavior:'smooth'})
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_qwehe62', 'template_s22ibu8', form.current, 'ZrX4X_IoPovPpwQo7')
          .then((result) => {
              console.log(result.text);
              setOpen(true);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
        //   window.location.reload()
          
      };
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate('/delivery')
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpen(false);
      };
      const action=(
        <Fragment>
        <Button color="secondary" size="small" onClick={handleClose}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Fragment>

    )
   
  return (
    <Image ref={container}>
        <Heading>
            Get In Touch
        </Heading>
        {/* <Input onSubmit={sendEmail}>

            <Field placeholder='Name' name='name'/>
            <Field placeholder='Phone Number' name='phone_number'/>
            <Field placeholder='Email' name='email'/>
            <Message placeholder='Message' name='message'/>
        
        <Btn type='submit' value='Send' />
        </Input> */}
         <Input ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label> */}
      <Field type="text" name="name" placeholder='name'/>
      {/* <label>Phone Number</label> */}
      <Field type="number" name="phone_number" placeholder='phone number'/>
      {/* <label>Email</label> */}
      <Field type="email" name="email" placeholder='Enter email address'/>
      {/* <label>Message</label> */}
      <Message name="message" placeholder='message'/>
      <Send type="submit" value="Send" />
      <Snackbar 
      open={open}
      autoHideDuration={800}
      message="sent successfully"
      action={action}
      
      />
    </Input>
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