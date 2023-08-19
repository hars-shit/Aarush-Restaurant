import { AppBar, Button, styled } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {MdShoppingCart} from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { slice2 } from '../../store/slice/about'
import { slice3 } from '../../store/slice/contact'
import { slice5 } from '../../store/slice/shop'
import { slice4 } from '../../store/slice/service'

const Navbar=styled(AppBar)({
    width: '70%',
    textAlign: 'center',
    backgroundColor: 'rgb(37, 37, 37)',
    height: 'auto',
    display: 'flex',
    alignItems:'center',
    flexDirection:'row',
    margin: '0px auto',
    padding: 20,
    '@media (max-width:970px)':{
        display:'none'
    },
    '@media (max-width:1082px)':{
        width:'80%'
    },
})
const First=styled('section')({
    width: '78%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    // float: 'left',
    '& > a':{
        // float: 'left',
        fontSize: 18,
        textDecoration:'none',
        color: 'rgb(255, 255, 255)',
        textTransform: 'uppercase',
        padding:'0px 10px',
    '& : hover':{
        color: 'rgb(142, 181, 11)',
    }
    },
   '& > button':{
    display:'flex',
    flexDirection:'column',
        marginRight:20,
        textDecoration:'none',
        fontSize:17.5,
        color:'white',
      
    }

})
const Search=styled('section')`
display:flex;
justify-content:center;
align-Items:center;

    float: left;
    font-size: 22px;
    // color: rgb(255, 255, 255);
    text-transform: uppercase;
    // padding: 0px 20px;
    
    & > a{
        margin-right:20px;
        text-decoration:none;
        font-size:27px;
        color:white;
      
    }
   
`
const LowerNavbar=()=> {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [about,setAbout]=useState(false);
    const [contact,setContact]=useState(false);
    const [service,setService]=useState(false);
    const [shop,setShop]=useState(false);
    const handleAbout=()=>{
        setAbout(true)
       dispatch(slice2(true))
        // {console.log("about",about)}
    }
    const handleContact=()=>{
        setContact(true)
       dispatch(slice3(true))
        // {console.log("about",about)}
    }
   
    const handleShop=()=>{
        setShop(true)
       dispatch(slice5(true))
        // {console.log("about",about)}
    }
   
    const handleService=()=>{
        setService(true)
       dispatch(slice4(true))
        // {console.log("about",about)}
    }
   
  return (
    <Navbar position='static'>
        <First>
            <Button onClick={()=>navigate('/')}>Home</Button>
            <Button onClick={()=>handleAbout(about)}>About</Button>
            <Button onClick={()=>handleContact(contact)}>Contact Us</Button>
            <Button  onClick={()=>navigate('/delivery')}>Shop</Button>
            <Button onClick={()=>handleService(service)}>Services</Button>
        </First>
        <Search>
          <Link to={'/delivery'}><MdShoppingCart /></Link>
        </Search>
    </Navbar>
  )
}
export default LowerNavbar