// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { lime, purple } from '@mui/material/colors';
import Footer from './components/Footer';
// import RalewayWoff2 from './fonts/Raleway-Regular.woff2';

// const theme = createTheme({
//   typography: {
//     fontFamily: 'Raleway, Arial',
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: `
//         @font-face {
//           font-family: 'Raleway';
//           font-style: normal;
//           font-display: swap;
//           font-weight: 400;
//           src: local('Raleway'), local('Raleway-Regular'), url(${RalewayWoff2}) format('woff2');
//           unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
//         }
//       `,
//     },
//   },
// });

// const theme = createTheme({
//   palette: {
//     primary: lime,
//     secondary: {
//       main: '#E0C2FF',
//       light: '#F5EBFF',
//       // dark: will be calculated from palette.secondary.main,
//       contrastText: '#47008F',
//     },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={theme}>
    <div >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
    // </ThemeProvider>
  );
}

export default App;
