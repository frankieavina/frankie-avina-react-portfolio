import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ProjectContainer, ProjInfoContainer, ProjPhotoContainer,  } from '../../common/styles/page';
import Image from 'react-bootstrap/Image'

import GitHubIcon from '../../assets/Icons/github-48.png'


function ProjectCard({info}) {
  // if id is odd align text to the left and set info to the left 
  const [alignLeft, setAlignLeft] = useState(true);
  const textAlignment = (info.id % 2 === 0) ? 'text-right' : 'text-left';

  // align content differently(left to right , right to left) every other project
  useEffect(() =>{
    const setContAlignment = () =>{
      if(info.id%2 === 0 ){
        setAlignLeft(false);
      } else {
        setAlignLeft(true);
      }
    }
    setContAlignment();
  },[info])

  console.log('Info:', info)

  return (
    <ProjectContainer>
      { (!alignLeft) &&
        <ProjPhotoContainer>
          <Image src={info.image}/>
        </ProjPhotoContainer>
      }
      <ProjInfoContainer>
        <Card className={textAlignment}>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{info.title}</Card.Title>
            <Card.Text>
              {info.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            <a href={info.github}>
              <span className='vectorIcon'>
                <img alt='procedure' src={GitHubIcon} className='icon' />
              </span>
            </a>
          </Card.Footer>
        </Card>
      </ProjInfoContainer>
      { (alignLeft) &&
        <ProjPhotoContainer>
          <Image src={info.image}/>
        </ProjPhotoContainer>
      }
    </ProjectContainer>

  )
}

export default ProjectCard