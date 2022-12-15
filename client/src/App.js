import logo from './logo.svg';
import{BrowserRouter,Route,Routes} from "react-router-dom"
import './App.css';
import LandingPage from "./components/landingPage/LandingPage"
import Header from './components/header/header';
import NewPost from './components/newpost/newpost';
function App() {
  return (
    <>
    
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/Header' element={<Header/>}/>
          <Route path="/NewPost" element={<NewPost/>}/>
        </Routes>
      </BrowserRouter>

    </div>
    </>
  );
}

export default App;
