import { AppBar, Box, Button, Drawer, Typography } from "@mui/material";
import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";
import {MdCall} from 'react-icons/md'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdMail} from 'react-icons/io'
const Header=styled(AppBar)({
    width: '100%',
    float: 'left',
    backgroundColor: 'rgb(142, 181, 11)',
    height: 'auto',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
   
    gap:'6rem',
   
    
})
const Content=styled('section')({
    alignContent:'center',
    fontSize: 18,
    fontWeight:600,
    float: 'left',
    backgroundColor: 'rgb(37, 37, 37)',
    padding: '20px 30px',

    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    gap:10,
    '@media (max-width:970px)':{
        display:'none'
    }
     

})
const Link=styled('a')({
    color:'white',
    textDecoration:'none',
    display:'flex',
    justifyContent:'center',
   
    alignContent:'center',
    gap:10,
    '& > svg':{
        marginTop:5,
    }
  
})
const Logo=styled('section')({
    marginTop:3,
    marginBottom:3,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    '@media (max-width:970px)':{
        float:'left'
    },
    '& > img':{
        width:80,
       
    },
    '& > p':{
        color:'white',
        fontSize:30,
      fontFamily:"monospace",
        fontWeight:600
    }
})
const Sidebar=styled(Box)({
     display:'none',
     '@media (max-width:970px)':{
        display:'flex',
        '& > button > svg':{
            fontSize:35,
            color:'white'
        }
    },
     
})
const UperNavbar = () => {
    const [open,setOpen]=useState(false);

  return (
    <Fragment>
      <Header position="static">
        <Content className="call-box">
          <Link href="">
          <MdCall /> Call : +9520593613
          </Link>
        </Content>
        <Logo>
          <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2017%2F02%2F21%2F08%2F49%2Ffood-2085075_960_720.png&f=1&nofb=1&ipt=e6727fb95b614090319cfca9d70699efbce26350da8efc394d6ca0b87c82c1a9&ipo=images" alt="" />
        <Typography>
           Aarush 
        </Typography>
        
        </Logo>
        <Content className="call-box">
          <Link href="">
          <IoMdMail /> Email : arush14@gmail.com
          </Link>
        </Content>
        <Sidebar>
        <Button onClick={()=>setOpen(true)}><GiHamburgerMenu  /></Button>
        <Drawer open={open} >
hii
        </Drawer>
        </Sidebar>
      </Header>
    </Fragment>
  );
};
export default UperNavbar;
