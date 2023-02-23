// import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import { ThemeProvider }  from './Context/ThemeContext';
import './style.css';

function App() {
  return (
    <div>
      <ThemeProvider>
        <div>
          <Header />
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
