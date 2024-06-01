import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

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
    <nav className={`${styles.paddingX} ${
      scrolled ? "bg-primary" : "bg-transparent"} z-20 fixed top-0  py-5 items-center w-full flex`}>
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
        <ul className='list-none hidden sm:flex flex-row gap-6'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${active === link.title ? "text-main" : "text-secondary"
                } hover:text-main text-[14px] font-medium cursor-pointer
             `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
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
                  className={`${active === link.title ? "text-white" : "text-secondary"
                    } font-poppins text-[16px] font-medium cursor-pointer
             `}
                  onClick={() =>{
                    setToggle(!toggle)
                    setActive(link.title)
                  }} 
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar