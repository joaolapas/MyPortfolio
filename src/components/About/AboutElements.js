import styled from "styled-components";

export const AboutContainer = styled.div`
  background: #000;
  color: white;
  height: 140vh;
  margin-top: -80px;
  padding-top: 200px;

  @media screen and (max-width: 768px) {
    height: 90vh;
  }
`;

export const AboutVideoContainer = styled.div`
  width: 60vw;
  height: 60vh;
  background: linear-gradient(to left, #01ef77, green);
  border-radius: 30px;
  translate: -100px;
  rotate: -10deg;
  overflow: hidden;
  position: relative;
  top: -500px;
  box-shadow: 10px 10px 50px black;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
        180deg,
        rgba(0, 50, 0, 0.1) 0%,
        rgba(0, 50, 0, 0.7) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
  @media screen and (max-width: 1380px) {
    width: 40vw;
    height: 50vh;
  }

  @media screen and (max-width: 780px) {
    width: 30vw;
    height: 40vh;
    translate: -50px;
  }
  @media screen and (max-width: 580px) {
    translate: 0;

  }
  @media screen and (max-width: 480px) {
    translate: 40px;
    width: 250px;
    height: 150px;
    margin-top: -30px;;
  }
`;

export const AboutVideo = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  border-radius: 30px;
  overflow: hidden;
`;
export const TextContainer = styled.div`
  width: 100%;
  height: 60%;
  background: linear-gradient(to left, #01ef77, #131);
  border-radius: 30px;
  translate: -100px;
  rotate: -4deg;
  position: relative;
  display: flex;
  justify-content: flex-end;

  

  @media screen and (max-width: 1380px) {
    width: 90vw;
  }
  @media screen and (max-width: 780px) {
    width: 100vw;
  }
  @media screen and (max-width: 580px) {
    width: 120vw;
    padding-right:20px;
  }
  @media screen and (max-width: 480px) {
    padding-right:40px;
  }
`;

export const AboutText = styled.pre`
  width: 25vw;
  display: block;
  color: #000;
  padding: 30px;
  margin-right: 100px;
  margin-top: 20px;
  rotate: 4deg;

  @media screen and (max-width: 1380px) {
    margin-right: 200px;
    scale: .80;
  }
  @media screen and (max-width: 780px) {
    scale: .70;
    
  }
  @media screen and (max-width: 580px) {
    
  }
  @media screen and (max-width: 480px) {
    
  }

 
  
`;
