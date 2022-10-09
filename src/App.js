import Stack from '@mui/material/Stack';
import Sidenav from './components/Sidenav';
import Cards from './components/Cards';

function App() {
  return (
    <Stack direction='row' >
      <Sidenav />
      <Stack>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </Stack>
    </Stack>
  );
}

export default App;
