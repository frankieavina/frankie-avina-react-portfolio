import React from 'react';
// import './Home.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Particle from '../Particle/Particle';

const HomeWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
height: 90vh;
p{
  button{
    background-color: #e7e7e7;
    padding: 0.5rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    width: 5%;
    position: relative;
    z-index:3;
  }
  button:hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
  }
}
`

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <HomeWrapper>
          <h2>Hi, my name is Frankie Avina.</h2>
          <h3>I am a developer of the web.</h3>
          <p>Frontend and Backend Developer, computer engineer, car enthusiast, and connoisseur of food in search on new 
            adventures.
          </p>
          <p>Always working magic and building singular digital experiences. View my <button onClick={() => navigate('/projects')}>Projects</button>, 
            <button onClick={() => navigate('/resume')} >Resume</button>, or send me a <button onClick={() => navigate('/message')}>Message</button>. 
          </p>
      </HomeWrapper>
      <Particle />
    </>

  )
}

export default Home;
