import { LoadingButton } from '@mui/lab';
import { Avatar, Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
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
        <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
        >
          <Avatar alt="Remy Sharp" src="https://biographymask.com/wp-content/uploads/2020/06/Tom-Cruise-1200x1200.jpg"
            sx={{
              height: "80px",
              width: "80px",
              mb: "10px"
            }} />
          <Typography variant="h5" gutterBottom>
            Mamun Prodhan
          </Typography>
        </div>

        <Stack spacing={2} direction="row">
          <Button variant='contained' color='error'>Checkout</Button>
          <Button variant='outlined'>Checkout</Button>
          <LoadingButton
            loading={loading}
            variant='outline'
            onClick={() => setLoading(true)}
          >
            Fetch Data
          </LoadingButton>
        </Stack>





      </div>
    </div>
  );
}

export default App;
