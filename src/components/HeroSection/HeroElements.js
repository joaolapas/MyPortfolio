import styled from "styled-components";
import { MdArrowForward, MdArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: ${({modalIsOpen}) => (modalIsOpen? 'none' : 'flex')};
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position:relative;
    top: -80px;
    z-index: 1 ;
    
    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        height: 100%;
        width: 100%;
        background: linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.99) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

export const HeroContent = styled.div`
    z-index: 3;
    max-width:  1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: start;
    
`

export const HeroH2 = styled.h2`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }
    @media screen and (max-width: 480px) {
        font-size: 20px;
    }
`
export const HeroName = styled.h1`
    color: #01ef71;
    font-size: 5rem;

    @media screen and (max-width: 768px) {
        font-size: 4rem;
    }
    @media screen and (max-width: 480px) {
        font-size: 3rem;
    }
`

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }
    @media screen and (max-width: 768px) {
        font-size: 16px;
    }
`

export const HeroBtnWrapper = styled.div`
    align-self: center;
    margin-top: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`
export const ArrowRight = styled(MdArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`

export const LeftSideButtons = styled.div`
    position: absolute;
    top: 30%;
    left: -170px;
    z-index: 4;

    @media screen and (max-width: 768px) {
        scale: calc(.8);
        translate: 14px;
        top: 10%;
    }

`

export const LeftBtn = styled.a`
    text-decoration: none;
    
`
export const LeftButton = styled.button`
    border-radius: 20px;
    height: 50px;
    width: 200px;
    background: ${({primary}) => (primary? '#01bf71' : '#010606')};
    white-space: nowrap;
    color: ${({dark}) => (dark? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display:  flex;
    justify-content: flex-end;
    align-items: center;
    transition: all .2s ease-in-out;
    margin-bottom: 40px;
    
    div {
        padding-right: 5px;
        padding-top: 5px;
        font-size: 1.4rem;
    }

    &:hover {
        transition: all .3s ease-in-out;
        background: ${({primary}) => (primary? '#01ff71' : '#01bf71')};
        transform: translateX(80px);
    }
`
