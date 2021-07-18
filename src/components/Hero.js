import React from 'react'
import styled from "styled-components";
import Video from "../assets/videos/HeroBackground.mp4"
import { Link } from "gatsby";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline/>
            </HeroBg>
            <HeroContent>
                <HeroItems>
                    <HeroH1>
                        Hire The Best Freelancer
                    </HeroH1>
                    <HeroP>
                    We connects you.
                    </HeroP>
                    <HeroBtn to="/postproject">Hire Freelancer</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div`
background: #0c0c0c;
display:flex;
justify-content:center;
align-items:center;
height:100vh;
padding:0 1rem;
position:relative;
margin-top:-80px;
color: #fff;

:before{
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    z-index:2;
    background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%,
), linear-gradient(180deg, rgba(0,0,0,0.2) 0%  ,transparent 100%);
}
`

const HeroBg=styled.div`
position:absolute;
top:0;
bottom:0;
right:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`

const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
`

const HeroContent = styled.div`
z-index:3;
height:calc(100vh-80px);
max-height:100%;
margin-top:280px;
padding:0rem calc((100vw-1300px) / 2);
`

const HeroItems=styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
max-height:100%;
padding:0;
color:#fff;
line-height:1.1;
font-weight:bold;

`;

const HeroH1=styled.h1`
font-size: clamp(1.5rem, 3vw ,5 rem);
letter-spacing:3px;
`;

const HeroP=styled.p`
font-size: clamp(1rem, 3vw ,3rem);
margin-bottom:2rem;
font-weight:400;
color:#003;
`

const HeroBtn = styled(Link)`
    border-radius: 50px;
    background: #014FB9;
    white-space: nowrap;
    padding: 12px 24px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration:none;
    transition: all 0.2s ease-in-out;
    margin-right: 10px;
    
    
    &:hover{
        transition: all 0.1s ease-in-out;
        background:#fff;
        color: #010606;
        text-decoration:none;
    }
`;