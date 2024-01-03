import Button from '@mui/material/Button';
import './index.css';
function App() {

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>
        <Button style={{ backgroundColor: 'red' }}>Click me</Button>

        <button className='bg-red-500'>Click me</button>
      </div>
    </>
  );
}

export default App;
