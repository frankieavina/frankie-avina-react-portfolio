import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
// use google drive to link resume 
import Resume from '../../assets/web-developer-francisco-avina.pdf';

const HeaderWrapper = styled.header`
align-items: center;
background-color: #333;
display: flex;
justify-content: space-between;
padding: 1rem 1.5rem; 
& > a {
  color: #fefefe;
  text-decoration: none;
}
a,
a:visited {
  color: #fefefe;
}
h1 {
  margin: 1rem 0;
  position: relative;
  z-index:9999;
}
span {
  padding: 0 1rem;
}
nav {
  ul {
    display: flex;
    list-style-type: none;
  }
  li {
    padding-left: 1.5rem;
    position: relative;
    z-index:99;
    &:first-child {
      padding-left: 0;
    }
  }
  a {
    color: #fefefe;
    font-size: 1.25rem;
    font-weight: 700;
    text-decoration: none;
    &:hover {
      color: black;
    }
    &.active {
      color: red;
      font-style: italic;
      &:hover {
        color: black;
      }
    }
  }
}
`;

const ResumeButton = styled.button`
  color: black !important;
  position:relative;
  z-index: 500;
  padding: 0.5rem 1rem; 
  background-color: #e7e7e7;
  color: black;
  border:none;
  border-radius: 10px;
  &:hover {
    box-shadow: 0 15px 30px -8px white;
    border: 0.5px solid black;
   padding: 0.5rem 0.9505rem; 
  }
`;



function Header() {

  return (
    <HeaderWrapper>
        <Link to="/">
        <h1>FA.</h1>
        </Link>
        <nav>
        <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <ResumeButton href={Resume} target="_blank" rel="noopener noreferrer">
                Resume
              </ResumeButton>
            </li>
        </ul>
        </nav>
    </HeaderWrapper>
  );
}

export default Header;
