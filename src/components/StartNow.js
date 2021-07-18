import React from 'react'
import styled from "styled-components";
import Img from "gatsby-image";
import { FaRegLightbulb } from "react-icons/fa";
import { Link } from "gatsby";
import { useStaticQuery ,graphql } from 'gatsby';

const StartNow = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: 
            {ext: {regex: "/(jpg)|(png)|(jpeg)/"}
            name: {in: ["user3","user4"]}
        }) {
          edges {
            node {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      
    `)
    return (
        <StartNowContainer>
            {/* <TopLine>
                Join Now!!
            </TopLine>
            <Description>
                What people are saying
            </Description> 
            <FaRegLightbulb> react-cions/fa
            */}
            <ContentWrapper>
                <ColumnTwo>
                {data.allFile.edges.map((image, key) => (
                    <Images key={key} fluid={image.node.childImageSharp.fluid}/>
                ))}
                </ColumnTwo>
                <ColumnOne>
                <Freelancer>
                    <p><FaRegLightbulb/></p>
                    <h3>Grow your business</h3>
                    <h1>Trusted globally by over 1 million businesses, small to large.</h1>
                    <StartBtn to="/start-now-for-free">Start Now</StartBtn>
                    </Freelancer>
                </ColumnOne>
            </ContentWrapper>
        </StartNowContainer>
)
}

export default StartNow


const StartNowContainer =styled.div`
width:100%;
background:#fcfcfc;
color:#000;
padding: 3rem calc((100vw - 1300px) / 2);
`;

const StartBtn = styled(Link)`
    border-radius: 50px;
    background: #014FB9;
    white-space: nowrap;
    padding: 12px 24px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight:bold;
    text-decoration:none;
    transition: all 0.2s ease-in-out;
    margin-right: 10px;
    
    
    &:hover{
        transition: all 0.1s ease-in-out;
        color: #010606;
        text-decoration:none;
        font-size: 16px;
        font-weight:bold;
    }
`;

// const TopLine =styled.p`
// color:#077bf1;
// font-size:1rem;
// padding-left:2rem;
// margin-bottom:0.75rem;`

// const Description = styled.p`
// text-align:start;
// padding-left:2rem;
// margin-bottom:4rem;
// font-size:clamp(1.5rem, 5vw , 2rem);
// font-weight:bold;
// `

const ContentWrapper = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
padding: 0 2rem;

@media screen and (max-width: 768px){
    grid-template-columns: 1fr;
}
`

const ColumnOne =styled.div`
display:grid;
 ${'' /* grid-template-rows:1fr 1fr; */}
margin-left:100px;

@media screen and (max-width:500px){
    grid-tmplate-columns:1fr;
    padding:0;
    margin-bottom:25px;
    top:0;
}
`

const Freelancer = styled.div`
margin-top:100px;
padding-right:2rem;

h1{
    margin-bottom:10px;
    font-style:bold;
    font-size:2rem;
    padding-bottom:50px;
}
h3{
    color:#3b3b3b;
}

p{
    color:#f9b19b;
    font-size:3rem;
    margin-bottom:10px;
`

const ColumnTwo = styled.div`

display:grid;
grid-template-columns:1fr 1fr;
margin-top:2rem;

@media screen and (max-width:500px){
    grid-tmplate-columns:1fr;
}`

const Images= styled(Img)`
border-radius:0px;
height:100%;
`

