import React, { useState } from 'react'
import { Box, Card, CardContent, CardMedia, Typography, styled } from '@mui/material'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'
const Amount=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    gap:15
  })
  const Purchase=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:15
  })
const FoodDelivery=({item}) =>{
    const [amount,setAmout]=useState(1);
    const handleDecrease=()=>{
        if(amount > 1){
            
            setAmout(amount-1);
        }
    }
    const handleIncrease=()=>{
        setAmout(amount+1);
    }
    let cost=amount * item.pay
  return (
    <Card sx={{ display: 'flex',width:345,height:140 }} key={item.id}>
    <CardMedia
component="img"
sx={{ width: 120,padding:'10px 10px',borderRadius:'50%'}}
image={item.image}
alt="Live from space album cover"
/>
<Box sx={{ display: 'flex', flexDirection: 'column' }}>
<CardContent sx={{ flex: '1 0 auto' }}>
 <Typography component="div" >
   {item.title}
 </Typography>
 <Typography  color="text.secondary" fontSize={15}  component="div" marginTop={0.5}>
   {item.heading}
 </Typography>
 <Typography fontSize={20}   component="div" marginTop={0.5} style={{display:'flex',alignItems:'center'}}>
   <BiRupee fontSize={25}/>{cost}
 </Typography>
 <Purchase>
   <Typography  width={100}>
    {
      Array.from({length:item.rating},(_,i)=>(
        <AiFillStar key={i} style={{color:'rgb(142, 181, 11)'}}/>
        ))
       }
       </Typography>
       <Amount>
    <Typography onClick={handleDecrease} style={{cursor:'pointer',fontSize:30,fontWeight:700}}>-</Typography>
    
        <Typography>{amount}</Typography>
    
    <Typography onClick={handleIncrease} style={{cursor:'pointer',fontSize:18,fontWeight:700}}>+</Typography>
       </Amount>
 </Purchase>
</CardContent>

</Box>

    </Card>
  )
}
export default FoodDelivery
