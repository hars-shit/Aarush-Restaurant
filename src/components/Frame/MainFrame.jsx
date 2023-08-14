import { Box, ButtonBase, InputBase, Typography, styled } from '@mui/material'
import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Item from '../Items/Item'
import Customer from '../Items/Customer'
import SignUp from '../Items/SignUp'
import UperFooter from '../Footer/UperFooter'
import LowerFooter from '../Footer/LowerFooter'

const Header=styled(Box)({
    width: '70%',
    color: 'rgb(255, 255, 255)',
    // paddingTop: 100,
    padding:50,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column',
    '@media (max-width:970)':{
        paddingTop: 30,
        
    },
    '& > p':{
        fontSize: 50,
        fontWeight: 800,
        textAlign: 'center',
        margin:'0px auto',
        '@media (max-width:970px)':{
            fontSize: 23,
            fontWeight: 700,
          
        },
          

    }
})
const Main=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'column'
})
const City=styled(Typography)({
    width: 385,
    fontSize: 50,
    color: 'rgb(142, 181, 11)',
    fontWeight: 800,
    textAlign: 'center',
    backgroundColor: 'rgb(255, 255, 255)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0px auto',
    borderRadius: 7,
    padding:0,
    '@media (max-width:970px)':{
        fontSize: 22,
        fontWeight: 700,
        width: 200,
        height:'3rem'
      
    },
      

})
const InputContainer=styled(Box)({
    display: 'flex',
    alignItems:'center',
    marginTop:50,
    marginBottom:30,
    justifyContent:'space-between',
    padding:'0px 20px',
    background:'white',
    width:'38rem',
    height:'2.8rem',
    borderRadius:30,
    '@media (max-width:970px)':{
        width: '20rem',
        height:'3rem'
      
    },
    '@media (max-width:632px)':{
        width: '17rem',
        height:'3rem'
      
    },
    '& > input':{
        fontSize:25,
    },
    '& > svg':{
        fontSize:25,
        color:'black',
    }
  
   
})
const Click=styled(ButtonBase)({
    width: 200,
    height:'3.2rem',
    float: 'left',
    fontWeight:600,
    fontSize: 20,
    color: 'rgb(255, 255, 255)',
    backgroundColor: 'rgb(142, 181, 11)',
    textAlign: 'center',
    padding: '10px 0px',
    borderRadius: 5,
    


})
const Bag=styled(Box)({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    alignItems:'center',
    gap:10
})
const QuickSearch=styled(Typography)({
  fontSize:60 ,
  fontWeight:900,
  marginTop:50,
  color:'white',
  '@media (max-width:970px)':{
    fontSize:35 ,
  }
})
const MainFrame=()=> {
  return (
    <Main>
        {/* for Banner  */}
        <Header>
    <Typography>
        The Best Restaurant Cafe
    </Typography>
    <Typography>
        And Corner in 
    </Typography>
        </Header>
        {/* for main heading */}
        <Box>
            <City>
                GOPESHWAR
            </City>
        </Box>
        {/* for search */}


        <InputContainer>
        <InputBase placeholder='Search Food'/>
        <BiSearchAlt2 />
        </InputContainer>


        {/* for order button  */}
        <Bag>
        <Click>
            Order Now
        </Click>
        <QuickSearch>
        Quick Searches
        </QuickSearch>
        </Bag>
        <Item />
        <Customer />
        <SignUp />
        <UperFooter />
        <LowerFooter />
    </Main>
  )
}
export default MainFrame