import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../icons';

const StyledProject = styled.li`
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(12, 1fr)
    align-items: center;

    &:nth-of-type(odd) {
        .project-content {
          grid-column: 7 / -1;
          text-align: right;
    
          @media (max-width: 1080px) {
            grid-column: 5 / -1;
          }
          @media (max-width: 768px) {
            grid-column: 1 / -1;
            padding: 40px 40px 30px;
            text-align: left;
          }
          @media (max-width: 480px) {
            padding: 25px 25px 20px;
          }
        }
        .project-tech-list {
          justify-content: flex-end;
    
          @media (max-width: 768px) {
            justify-content: flex-start;
          }
    
          li {
            margin: 0 0 5px 20px;
    
            @media (max-width: 768px) {
              margin: 0 10px 5px 0;
            }
          }
        }
        .project-links {
          justify-content: flex-end;
          margin-left: 0;
          margin-right: -10px;
    
          @media (max-width: 768px) {
            justify-content: flex-start;
            margin-left: -10px;
            margin-right: 0;
          }
        }
        .project-image {
          grid-column: 1 / 8;
    
          @media (max-width: 768px) {
            grid-column: 1 / -1;
          }
        }
    }

    .project-content {
        position: relative;
        grid-column: 1 / 7;
        grid-row: 1 / -1;
    
        @media (max-width: 1080px) {
          grid-column: 1 / 9;
        }
    
        @media (max-width: 768px) {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          grid-column: 1 / -1;
          padding: 40px 40px 30px;
          z-index: 5;
        }
    
        @media (max-width: 480px) {
          padding: 30px 25px 20px;
        }
    }

    .project-description {
        position: relative;
        z-index: 2;
        padding: 25px;
        border-radius: ;
        background-color: ;
        color: ;
        font-size: ;
    
        @media (max-width: 768px) {
          padding: 20px 0;
          background-color: transparent;
          box-shadow: none;
    
          &:hover {
            box-shadow: none;
          }
        }
    }

    .project-overline {
        margin: 10px 0;
        color: ;
        font-family: ;
        font-size: ;
        font-weight: 400;
    }

    .project-title {
        color:;
        font-size: clamp(24px, 5vw, 28px);
    
        @media (min-width: 768px) {
          margin: 0 0 20px;
        }
    
        @media (max-width: 768px) {
          color:;
    
          a {
            position: static;
    
            &:before {
              content: '';
              display: block;
              position: absolute;
              z-index: 0;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
            }
          }
        }
    }

    .project-tech-list{
        display: flex;
        flex-wrap: wrap;
        position: relative;
        z-index: 2;
        margin: 25px 0 10px;
        padding: 0;
        list-style: none;
    
        li {
          margin: 0 20px 5px 0;
          font-size: var(--fz-xs);
          white-space: nowrap;
        }
    
        @media (max-width: 768px) {
          margin: 10px 0;
    
          li {
            margin: 0 10px 5px 0;
          }
        }
    }

    .project-links {
        display: flex;
        align-items: center;
        position: relative;
        margin-top: 10px;
        margin-left: -10px;
        color: var(--lightest-slate);
        a {
          padding: 10px;
          svg {
            width: 20px;
            height: 20px;
        }
        .cta {
            margin: 10px;
          }
    }

    .project-image {
        grid-column: 6 / -1;
        grid-row: 1 / -1;
        position: relative;
        z-index: 1;
    
        @media (max-width: 768px) {
          grid-column: 1 / -1;
          height: 100%;
          opacity: 0.25;
        }
    
        a {
          width: 100%;
          height: 100%;
          background-color: var(--green);
          border-radius: var(--border-radius);
          vertical-align: middle;
    
          &:hover,
          &:focus {
            background: transparent;
            outline: 0;
    
            &:before,
            .img {
              background: transparent;
              filter: none;
            }
          }
    
          &:before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 3;
            transition: var(--transition);
            background-color: var(--navy);
            mix-blend-mode: screen;
          }
        }
    
        .img {
          border-radius: var(--border-radius);
          mix-blend-mode: multiply;
          filter: grayscale(100%) contrast(1) brightness(90%);
    
          @media (max-width: 768px) {
            object-fit: cover;
            width: auto;
            height: 100%;
            filter: grayscale(100%) contrast(1) brightness(50%);
          }
        }
      }
`

function ProjectCard({info}) {
    const [image, setImage] = useState('');
    const [error, setError] = useState('');

    useEffect(()=>{
        const fetchImage = async () => {
            try {
                const response = await import(`../../images/${info.image}`);
                setImage(response.default);
            } catch (err) {
                setError(err);
            }
        }
        fetchImage()
    },[info.image])

  return (
    <StyledProject>
        <div className="project-content">
          <div>
            <p className="project-overline">Featured Project</p>

            <h3 className="project-title">
                <a href={info.github}>{info.title}</a>
            </h3>

            <div className="project-description">
                {info.description}
            </div>

            {info.tech.length && (
                <ul className="project-tech-list">
                {info.tech.map((tech) => (
                    <li>{tech}</li>
                ))}
                </ul>
            )}

            <div className="project-links">
                {info.external && (
                <a href={info.github} aria-label="Course Link" className="cta">
                    Learn More
                </a>
                )}
                {info.github && (
                <a href={info.github} aria-label="GitHub Link">
                    <Icon name="GitHub" />
                </a>
                )}
                {info.external && (
                <a href={info.external} aria-label="External Link" className="external">
                    <Icon name="External" />
                </a>
                )}
            </div>
          </div>
        </div>

        <div className="project-image">
            <a href={info.external ? info.external : info.github ? info.github : '#'}>
            <img src={image} alt={info.title} className="img" />
            </a>
        </div>
    </StyledProject>
  )
}

export default ProjectCard