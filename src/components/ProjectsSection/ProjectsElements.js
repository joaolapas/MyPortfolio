import styled from "styled-components";

export const ProjectsContainer = styled.div`
    height: 100%;
    background: #000;
    padding-top: 82px;
    margin-top: -2px;
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

    &:hover {
        background: #142; 
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
    font-size: 2rem;
    padding:10px;
    color: #01ef71;
`

export const ProjectCardDescription = styled.p`
    color:#fff;
    padding: 10px;
    height: 100px;
    max-width: 280px;
    text-align: center;
`