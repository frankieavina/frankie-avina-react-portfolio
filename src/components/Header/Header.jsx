import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

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
    z-index:9999;
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
      color: lightgrey;
    }
    &.active {
      color: red;
      // font-style: italic;
      &:hover {
        color: yellow;
      }
    }
  }
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
            <NavLink to="/resume">Resume</NavLink>
            </li>
            <li>
            <NavLink to="/contact">Contact</NavLink>
            </li>
        </ul>
        </nav>
    </HeaderWrapper>
  );
}

export default Header;
