import { Box, Button, Typography } from "@mui/material";
import React, { useRef, useState } from "react";
import Data from "../../DB/data";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)({
    marginTop:40,
  display: "grid",
  justifyContent:'center',
  gap: 50,
 
  gridTemplateColumns: "auto auto auto auto auto auto",
  '@media (max-width:970px)':{
    gridTemplateColumns: "auto auto auto ",
  },
  '@media (max-width:632px)':{
    gridTemplateColumns: "auto auto ",

  },
  "& > div": {
  
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap:10,
    flexDirection: "column",
    flexWrap: "wrap",
    '& > div ':{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'10rem',
        height:'8rem',

        border:'2px solid white',
        '@media (max-width:632px)':{
            width:'6rem',
            height:'6rem'
            
          },
    },
    '& > p':{
      fontSize:27,
      fontWeight:700,
      color:'white',
      '@media (max-width:632px)':{
        fontSize:20,
      },
    },
    '& > button':{
        border:'2px solid rgb(142, 181, 11)',
        backgroundColor: 'rgb(142, 181, 11)',
        width:'10rem',
        height:'3rem',
       color:'white',
       fontWeight:700,
       '@media (max-width:632px)':{
        width:'7rem'
       }


    }
  },
});

const Item = () => {
  const navigate=useNavigate();
  const handleClick=(name)=>{
    let route=name.toLowerCase();
    console.log(route);
    navigate(`/${route}`);

  }
  return (
    <Container>
        
      {Data.map((item) => {
        return (
          <Box key={Math.random()}>
            {/* for image  */}
            <Box>
              <img src={item.img} alt="" />
            </Box>
            <Typography >{item.title}</Typography>
            <Button onClick={()=>handleClick(item.title)}>{item.button}</Button>
          </Box>
        );
      })}
    </Container>
  );
};
export default Item;
