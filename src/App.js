import './App.css';
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import About from './pages/About.jsx';
import Projects from './pages/Projects.jsx';
import Resume from './pages/Resume.jsx';
import Contact from './pages/Contact.jsx';
import Loading from './components/Loading/Loading';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App(props) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{
      setTimeout(() => {
          console.log("Delayed for 5 second.");
          setIsLoading(false);
        }, 7000)
  },[]);

  return (
  <>
    {(!isLoading)
      ?( 
        <div className="App">
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='about' element={<About />} />
              <Route path='projects' element={<Projects />} />
              <Route path='resume' element={<Resume />} />
              <Route path='contact' element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
          <div className='links'>
            <GitHubIcon className='icons'  fontSize='large' />
            <EmailIcon  className='icons' fontSize='large' />
            <LinkedInIcon  className='icons' fontSize='large' />
          </div>
        </div>
      ): 
        <Loading />
    }
  </>
  );
}

export default App;
