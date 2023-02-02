import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);
  
  useEffect(()=>{
    const id = setTimeout(() =>{
      setLoading(false);
    }, 1000);

    return ()=>{
      clearTimeout(id);
    };
  }, [loading])

  return (
    <div className="app">
      <div
      style={{
        background: '#cfcccc',
        width: '400px',
        height: '400px',
        borderRadius: '1rem',
        padding: '2rem',
      }}
      >
        <Stack spacing={2} direction="row">
        <Button variant='contained' color='error'>Checkout</Button>
        <Button variant='outlined'>Checkout</Button>
        <LoadingButton
          loading={loading}
          variant='outline'
          onClick={()=> setLoading(true)}
        >
          Fetch Data
        </LoadingButton>
        </Stack>



      </div>
    </div>
  );
}

export default App;
