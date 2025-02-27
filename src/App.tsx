import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CssBaseline } from '@mui/material';
import Navbar from './components/layout/Navbar';
import TeamsPage from './pages/TeamsPage';
import DiagramPage from './pages/DiagramPage';
import ChartsPage from './pages/ChartsPage';
import { TeamProvider } from './context/TeamContext';
import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <LanguageProvider>
        <TeamProvider>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<TeamsPage />} />
              <Route path="/diagram" element={<DiagramPage />} />
              <Route path="/charts" element={<ChartsPage />} />
            </Routes>
          </BrowserRouter>
        </TeamProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default App;
