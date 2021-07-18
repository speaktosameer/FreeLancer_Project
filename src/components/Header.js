import React from "react"
import { Link } from "gatsby";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { menuData } from "../data/MenuData";

const Header = ({toogle}) => {
    return (
        <>
            <Nav>
                 <NavbarContainer>
                   <NavLogo to="/">freelancer</NavLogo>
                     <MobileIcon onClick={toogle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                             {menuData.map((item,index) => (
                            <NavLinks to={item.link} key={index}>
                            {item.title}
                            </NavLinks>
                            ))}

                        {/* <NavItem>
                            <NavLinks to="findtutor">Browse Jobs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="howitwork">How It Works</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="about">About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="becometutor">Become Freelancer</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/">Post Project</NavBtnLink>
                    </NavBtn>
                </NavbarContainer> 
            </Nav>
        </>
    )
};

export default Header


 const Nav = styled.nav`
    background: #077BF1;
    height: 80px;
    ${'' /* margin-top: -80px; */}
    display: flex;
    justify-content: center;
    align-items :center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;

  const NavbarContainer = styled.div`
     display: flex;
     justify-content: space-between;
     height: 80px;
     z-index: 1;
     width: 100%;
     padding: 0 24px;
     max-width: 1300px;
 `;
  const NavLogo = styled(Link)`
     color: #fff;
     justify-self: flex-start;
     cursor: pointer;
     font-size:2rem;
     display: flex;
     align-items: center;
     margin-left: 24px;
     font-weight: bold;
     text-decoration: none;

     &:hover{
         text-decoration:none;
         color:#fff;
     }
 `;

  const MobileIcon = styled.div`
     display:none;

     @media screen and (max-width: 768px){
         display: block;
         position: absolute;
         top: 0;
         right: 0;
         transform: translate(-100%, 60%);
         font-size: 1.8rem;
         cursor: pointer;
         color: #fff;
     }
 `;

  const NavMenu = styled.ul`
     display: flex;
     align-items: center;
     list-style: none;
     text-align: center;
     margin-right: -22px;

     @media screen and (max-width: 768px) {
         display:none;
     }
 `;


  const NavLinks = styled(Link)`
     color :#fff;
     font-size:16px;
     font-weight:bold;
     margin-top:25px;
     display: flex;
     align-items: center;
     text-decoration: none;
     padding: 0 1rem;
     height: 100%;
     cursor: pointer;

     &.active{
         border-bottom: 3px solid #01bf71;
         
     },
     &:hover{
        text-decoration: none;
     }

 `;

 const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }    
`;

 const NavBtnLink = styled(Link)`
    border-radius: 50px;
    background: #014FB9;
    white-space: nowrap;
    padding: 8px 20px;
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