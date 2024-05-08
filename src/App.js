import { Container, Typography } from '@mui/material';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Charts from './Pages/Charts';
import Options from './Pages/Options';
import NavigationMenu from './Pages/NavigationMenu';

function App() {
  return (
    <BrowserRouter>
            <header>
          <NavigationMenu/>      
          <Routes>
            <Route path="/charts" element={<Charts />} />
            <Route path="/options" element={<Options />} />
          </Routes>
        </header>
      <Container sx={{bgcolor:'grey', alignItems:'center'}}>
        <Typography>Made by Maksim Shastin for Natlex</Typography>
      </Container>
    </BrowserRouter>
  );
}

export default App;
