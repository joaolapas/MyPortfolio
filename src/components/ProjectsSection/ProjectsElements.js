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
`
export const ProjectsH1 = styled.h1`
    font-size: 5rem;
    color: #01ef71;
    text-align: center;
`

export const CardsContainer = styled.div`
    width: 90%;
    display: flex;
    //flex-direction: column;
    justify-content: center;
    background-color: #000;
    padding: 40px;
    gap: 60px;
    flex-wrap: wrap;
`
export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: #131;
    max-width: 290px;
    max-height:350px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background: #142; 
        scale: 1.2;
        transition: all 0.3s ease-in-out;
    }
    &:active {
        scale:1.1;
    }

`
export const ProjectCardImage = styled.img`
    width: 270px;
    height: 190px;
    border-radius: 30px;
    overflow: hidden;
    margin: 10px;
    box-shadow: 5px 5px 5px rgba(200, 255, 200, .1);
`
export const ProjectCardTitle = styled.h2`
    font-size: 2vw;
    padding:10px;
    color: #01ef71;
    text-align: center;
`

export const ProjectCardDescription = styled.p`
    color:#fff;
    padding: 10px;
    height: 100px;
    max-width: 280px;
    text-align: center;
`

export const ModalCard = styled.div`
    
`