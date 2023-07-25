import React from 'react'
import { PageHeader, ProjectContainer } from '../common/styles/page';
import styled from 'styled-components';
import AboutTimeline from '../components/About/Timeline';
import timelineData from '../data/about.json';
import Timeline from '@mui/lab/Timeline';

const AboutWrapper = styled.section`
display: flex;
width: 70%;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 100px 0;
margin: 0 auto;

@media (max-width: 768px) {
  padding: 80px 0;
}

@media (max-width: 480px) {
  padding: 60px 0;
}
  a {
    position: relative;
    z-index: 1;
  }
`

function About() {
  return (
    <AboutWrapper>
      <PageHeader>
        <h1>About Me</h1>
      </PageHeader>
      <ProjectContainer>
        <Timeline>
          {timelineData ?
            timelineData.map((data) => 
              <AboutTimeline data={data}/>
            ):
            <p> Loading ... </p>
          }
        </Timeline>
      </ProjectContainer>
    </AboutWrapper>
  )
}

export default About