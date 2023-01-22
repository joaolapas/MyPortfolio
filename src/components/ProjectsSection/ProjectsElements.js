import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 100%;
  background: #000;
  padding-top: 50px;
  margin-top: -5px;
  padding-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;
export const ProjectsH1 = styled.h1`
  font-size: 5rem;
  color: #01ef71;
  text-align: center;
`;

export const CardsContainer = styled.div`
  width: 90%;
  display: flex;
  //flex-direction: column;
  justify-content: center;
  background-color: #000;
  padding: 40px;
  gap: 60px;
  flex-wrap: wrap;
`;
export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background: #131;
  max-width: 290px;
  max-height: 350px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #142;
    scale: 1.2;
    transition: all 0.3s ease-in-out;
  }
  &:active {
    scale: 1.1;
  }
`;
export const ProjectCardImage = styled.img`
  width: 270px;
  height: 190px;
  border-radius: 30px;
  overflow: hidden;
  margin: 10px;
  box-shadow: 5px 5px 5px rgba(200, 255, 200, 0.1);
`;
export const ProjectCardTitle = styled.h2`
  font-size: 2vw;
  padding: 10px;
  color: #01ef71;
  text-align: center;
`;

export const ProjectCardDescription = styled.p`
  color: #fff;
  padding: 10px;
  height: 100px;
  max-width: 280px;
  text-align: center;
`;


export const ModalCard = styled.div`
  display: flex;
  height: 90%;
  width: 100%;
  border-radius: 50px;
  position:relative;
  flex-wrap: wrap;
  overflow: scroll;

  @media screen and (min-width: 480px) {
    flex-wrap: nowrap;
  }

  
`;

export const ExitButton = styled.button`
  background: #01ef71;
  color: #000;
  padding: 10px 30px;
  font-size: large;
  border-radius: 50px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    background: #01ef11;
    color: #000;
    transition: all 0.3s ease-in-out;
  }
`;
export const LeftContainer = styled.div`
  border-right: 1px solid #01ef71;
  border-top: 1px solid #01ef71;
  border-radius: 30px;
  height: 450px;
  max-height: 90%;
  padding: 10px;
  min-width: 300px;
  min-height: 335px;

`
export const ModalCardImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  grid-column: 1/2;
  grid-row: 1/2;
  border-radius: 30px;
  border-right: 1px solid #01ef71;
  border-bottom: 1px solid #01ef71;
`;
export const ModalCardTitle = styled.h2`
  color: #01ef71;
  font-size: 2vw;
  padding: 10px;
  order: 1;
  display: inline-block;

 
`;

export const ModalCardDescription = styled.p`
    display: inline-block;
  grid-column: 1/2;
  grid-row: 2/2;
  order: 2;
  margin-left: 10px;
  color: #fff;
  font-weight: 100;
  max-height: 50%;
  margin-bottom: 20px;
  font-size: 80%;
  overflow: scroll;
`;

export const RightContainer = styled.div`
  border-left: 1px solid #01ef71;
  border-top: 1px solid #01ef71;
  border-radius: 30px;
  margin: 0 20px;
  padding: 20px;
  grid-column: 2/2;
  grid-row-start: 1;
  grid-row-end: 3;
  width: 90%;
  height: 450px;
  max-height: 90%;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 170px;
  min-height: 335px;

  
`

export const ToolsTitle = styled.h3`
  color: #01ef71;
  margin: 10px;
  font-size: .9rem;
  text-align: center;
`
export const ModalTools = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Tool = styled.li`
  margin: 5px;
  list-style: none;
`

export const ProjectLinks = styled.div`
  display: flex;
  justify-content: space-around;
  border-left: 1px solid #01ef71;
  border-top: 1px solid #01ef71;
  border-radius: 30px;
  padding: 15px;
  max-height: 10%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`
export const CodeLink = styled.a`
  color: #fff;
  font-size: 100%;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  
  
  &:hover {
    color: #01ef71;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
  `
export const LiveLink = styled.a`
  color: #fff;
  font-size: 100%;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  
  &:hover {
    color: #01ef71;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`