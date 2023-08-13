import { AppBar, styled } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import {BiSearchAlt2} from 'react-icons/bi'

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
})
const First=styled('section')({
    width: '78%',
    float: 'left',
    '& > a':{
        float: 'left',
        fontSize: 18,
        textDecoration:'none',
        color: 'rgb(255, 255, 255)',
        textTransform: 'uppercase',
        padding:'0px 10px',
    '& : hover':{
        color: 'rgb(142, 181, 11)',
    }
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
        color:white;
    }
`
const LowerNavbar=()=> {
  return (
    <Navbar position='static'>
        <First>
            <Link to='/'>Home</Link>
            <Link to='/blog'>Blog</Link>
            <Link to='/about'>About</Link>
            <Link to='/contacts'>Contacts</Link>
            <Link to='/shop'>Shop</Link>
            <Link to='/services'>Services</Link>
        </First>
        <Search>
            <Link >Login</Link>
            <BiSearchAlt2 /> 
        </Search>
    </Navbar>
  )
}
export default LowerNavbar