import { Box, ButtonBase, InputBase, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import Item from '../Items/Item'
import Customer from '../Items/Customer'
import SignUp from '../Items/SignUp'
import UperFooter from '../Footer/UperFooter'
import LowerFooter from '../Footer/LowerFooter'
import { useNavigate } from 'react-router-dom'
import breakfast from '../../DB/breakfast'
import coffee from '../../DB/coffee'
import dinner from '../../DB/dinner'
import drinks from '../../DB/drinks'
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
    marginBottom:20,
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
const Searched=styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    border:'1px solid',
    padding:'5px 5px',
    width:'30%',
    alignItems:'center',
    marginBottom:20,
    '& > p':{
        width:'100%',
        borderBottom:'1px solid',
        color:'white',
    }
})
const MainFrame=()=> {
    
    const [match,setMatch]=useState([]);
    const handleChange=(e)=>{
        // replace(/\s+/g,'') to replace spaces 
       let search=e.target.value.toLowerCase().replace(/\s+/g,'');
       const newMatch=[];
        // console.log('value',search)
        for(let i=0;i<array.length;i++){
            let title=array[i].title.toLowerCase().replace(/\s+/g,'');
            if(title.includes(search) ){
                newMatch.push(array[i].title);
            }
        }
        console.log("match title :",match)
        setMatch(newMatch)
    }
    const array=[...breakfast, ...coffee, ...dinner , ...drinks];
    const navigate=useNavigate();
    const handleBreakfast=()=>{
        navigate('/breakfast')
    }
    const handleCoffee=()=>{
        navigate('/coffee')
    }
    const handleDinner=()=>{
        navigate('/dinner')
    }
    const handleDrinks=()=>{
        navigate('/drinks')
    }
    const handleClick=()=>{
        navigate('/delivery')
    }
    
  return (
    <Main>
        {console.log("array",array)}
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
        <InputBase placeholder='Search Food' onChange={(e)=>handleChange(e)}/>
        <BiSearchAlt2 />
        </InputContainer>
        {
            match.length !==0 &&     <Searched>

            {
            match.length !== 0 && match.map((title,index)=>(
                
                breakfast.map((data)=>(
                data.title===title && <Typography onClick={handleBreakfast}  key={index}>{title}</Typography>

                ))
               
            ))
            
            }
                {
            match.length !== 0 && match.map((title,index)=>(
                
                coffee.map((data)=>(
                data.title===title && <Typography onClick={handleCoffee}  key={index}>{title}</Typography>

                ))
              
            ))
            
            }
                {
            match.length !== 0 && match.map((title,index)=>(
                
                dinner.map((data)=>(
                data.title===title && <Typography onClick={handleDinner}  key={index}>{title}</Typography>

                ))
             
            ))
            
            }
                {
            match.length !== 0 && match.map((title,index)=>(
                
                drinks.map((data)=>(
                data.title===title && <Typography onClick={handleDrinks}  key={index}>{title}</Typography>

                ))
    
            ))
            
            }
         </Searched>
}


        {/* for order button  */}
        <Bag>
        <Click onClick={handleClick}>
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
        {/* <LowerFooter /> */}
    </Main>
  )
}
export default MainFrame