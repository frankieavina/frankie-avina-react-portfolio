import { Container } from 'react-bootstrap';
import styled from 'styled-components'

export const PageHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  justify-content: start;
  text-align: start;
  margin-bottom: 50px;

  h1 {
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
    margin-bottom: 0.25rem;
  }
  
`;

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 100px;

  .text-right {
    text-align: right;
  }

  .text-left {
    text-align: left;
  }
`

export const ProjInfoContainer = styled(Container)`
display: flex;
flex-direction: column;
`

export const ProjPhotoContainer = styled(Container)`
`