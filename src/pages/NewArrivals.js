import { useState, useEffect } from 'react';
import '../styles/NewArrivals.css';
import { Typography, Box, TextField, Autocomplete } from '@mui/material'
import FilterPrducts from '../components/FilterProducts';
import { fetchdata } from '../data/fetchdata';



function NewArrivals() {
 const [input, setInput] = useState('')
 const [list, setList] = useState([]);

 const handleInput = (e) => {
   console.log(e.target.value)
   setInput(e.target.value.toLowerCase())
 }

 useEffect(() => {
   fetchdata()
     .then(res => setList(res))
 }, [])


 return (
   <Box className="App"
     sx={{
       width: 400,
       height: 660,
       margin: '100px auto',
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'space-evenly',
      
     }}>
     <Typography variant='h4' className='arrivals' component={'h1'}>Our new arrivals</Typography>
     <Autocomplete
       disablePortal
       id="combo-box-demo"
       options={list.map(item => item.title)}

       renderInput={(params) => <TextField  {...params}
         label="What are you loooking for..."
         onSelect={handleInput}
         sx={{
           width: 350,
           margin: '10px auto',
           
          
         }} />}
     />


     <FilterPrducts searchstring={input} list={list} />
   </Box>
 );
}

export default NewArrivals;
