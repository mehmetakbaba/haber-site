import React from 'react';
import { SwipeableDrawer, Box, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { setFalse, setTrue } from "./WideScreenSlider.js";

function BottomDrawer() {
    const { value: isWideScreen, title, description } = useSelector((state) => state.WideSc); 
  const dispatch = useDispatch();

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isWideScreen}
      onClose={() => dispatch(setFalse())}
      onOpen={() => dispatch(setTrue())}
      slotProps={{
        paper: {
          sx: {
            
            height: '70vh',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
            backgroundColor: '#F4F1DE',
            
          },
        },
      }}
    >
      <Box sx={{ p: 2, height: '100%' ,textAlign:'center',margin:'10px',padding:'10px'}}>
        <Typography variant="h5">{title}</Typography>
        <p>{description}</p>
      </Box>
    </SwipeableDrawer>
  );
};

export default BottomDrawer;