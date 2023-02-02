import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
import { Stack } from '@mui/system';
import './App.css';

function App() {
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
        <Button variant='text'>Checkout</Button>
        </Stack>



      </div>
    </div>
  );
}

export default App;
