import React from 'react'
import { Box, Card, CardContent, CardMedia, IconButton, Typography, styled } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import {BiSolidCart,BiSolidCartAdd} from 'react-icons/bi'
import {AiFillStar} from 'react-icons/ai'
import {BiRupee} from 'react-icons/bi'

const Purchase=styled(Box)({
    display:'flex',
    alignItems:'center',
    gap:30
  
    
  })
const Cards=({item,purchase,setPurchase})=> {
    // const theme = useTheme();
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
   <BiRupee fontSize={25}/>{item.pay}
 </Typography>
 <Purchase>
   <Typography  width={100}>
    {
      Array.from({length:item.rating},(_,i)=>(
        <AiFillStar style={{color:'rgb(142, 181, 11)'}}/>
        ))
       }
       </Typography>
       <Typography>
        {  
        purchase ? <BiSolidCartAdd onClick={()=>setPurchase(!purchase)} style={{fontSize:25,color:'rgb(142, 181, 11)'}}/> : <BiSolidCart onClick={()=>setPurchase(!purchase)}  style={{fontSize:25}}/>
        }
         
       </Typography>
 </Purchase>
</CardContent>

</Box>

    </Card>


  )
}
export default Cards
