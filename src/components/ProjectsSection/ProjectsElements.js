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
    background-color: "000";
    padding: 40px;
    gap: 40px;
    flex-wrap: wrap;
`
export const ProjectCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: #222;

`
export const ProjectCardImage = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 30px;
    overflow: hidden;
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
    max-width: 300px;
    text-align: center;
`