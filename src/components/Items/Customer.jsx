import { Box, Typography, styled } from '@mui/material'
import React from 'react'

const Container=styled(Box)({
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    flexDirection:'column',
    
    margin:'70px 30px', 

})
const Heading=styled(Typography)({
     marginBottom:30,
    fontSize:60 ,
    fontWeight:900,
    color:'white',
    '@media (max-width:970px)':{
      fontSize:35 ,
    }
})
const Name=styled(Typography)({
    color:'rgb(142, 181, 11)',
    fontSize:17,
    marginBottom:12
})
const Message=styled(Typography)({
    border:'1px solid white',
    marginBottom:25,
    color:'white',
    padding:'20px 20px'
})
const Customer=()=> {
  return (
    <Container>
        <Heading>
            Customers Says
        </Heading>
        <Box>
            <Name>
                Mahak Shah
            </Name>
            <Message>
            For vegetarians, Aarush is a paradise of options. The array of vegetarian dishes is so flavorful and satisfying that even meat lovers are won over.
            </Message>
            <Name>
                Pinki Verma
            </Name>
            <Message>
            Aarush takes traditional Indian recipes and infuses them with a contemporary twist. It's a fusion of cultures that results in dishes that are familiar yet excitingly new.
            </Message>
            <Name>
                Kartik Bhatt
            </Name>
            <Message>
          They truly mastered the art of momo-making. The combination of perfectly steamed dough and well-seasoned fillings is sheer magic.
            </Message>
            

        </Box>
    </Container>
  )
}
export default Customer
