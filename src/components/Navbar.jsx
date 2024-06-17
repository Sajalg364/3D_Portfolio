import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks, bio } from '../constants';
import { logo, menu, close } from '../assets';
import styled from 'styled-components';

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 20px;
  color: white;
  cursor: pointer;
  padding: 5px 10px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: '#915eff';     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
  // width: 20%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`${styles.paddingX} ${scrolled ? "bg-primary" : "bg-transparent"} z-20 fixed top-0  py-5 items-center w-full flex`}>
      <div className='w-full flex justify-between items-center mx-auto max-w-7xl'>
        <Link
          to="./"
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0, 0)
          }}
        >
          <img src={logo} alt="logo" style={{ marginLeft: 0 }} className="w-9 h-9 object-contain" />
          <p className={`text-main text-[16px] font-bold cursor-pointer flex`}>Sajal &nbsp;
            <span className='text-white sm:block hidden'>|&nbsp; React Developer</span></p>
        </Link>
        <ul className='list-none hidden lg:flex flex-row gap-8 justify-center'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-main" : "text-white"
                } hover:text-main text-[16px] font-medium cursor-pointer
             `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`} className='items-center'>{link.title}</a>
            </li>
          ))}
        </ul>

          <ButtonContainer>
            <GitHubButton href={bio.github} target="_blank" className='text-white hover:text-main'>Github Profile</GitHubButton>
          </ButtonContainer>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 min-w-[140px] mx-4 my-2 z-20 rounded-xl`}>
            <ul className='list-none flex items-start justify-end flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${active === link.title ? "text-main" : "text-white"
                    } hover:text-main font-poppins text-[16px] font-medium cursor-pointer
             `}
                  onClick={() => {
                    setToggle(!toggle)
                    setActive(link.title)
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
              <GitHubButton style={{ padding: '5px 8px', width: 'max-content' }}  href={bio.github} target="_blank" className='text-white hover:text-main'>Github Profile</GitHubButton>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar