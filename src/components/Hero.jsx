import { lazy } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import Lottie from 'lottie-react';
import hero1 from '../assets/lottie2.json'
import styled from "styled-components";
import { bio } from "../constants";

// const  ComputersCanvas  = lazy(() => import("./canvas/Computers"));
const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 200px;
    text-align: center;
    padding: 12px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    // background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 10%, hsla(281, 100%, 50%, 1) 100%);
    // background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    // background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  10px 10px 30px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 10px 0;
        font-size: 18px;
        max-width: 120px;
    } 

`;

const Hero = () => {
  const [ text ] = useTypewriter({
    words: ['Developer', 'Leet Coder'],
            loop: Infinity,
            typeSpeed: 120,
            deleteSpeed: 50,
  })
  return (
    <section className="mx-auto flex flex-row relative mt-[0] w-full h-screen">
      <div className={`${styles.paddingX} flex flex-row absolute z-10 inset-0 top-[120px] max-w-7xl mx-auto items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-4 w-4 rounded-full bg-main" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-main" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className="text-main"> Sajal </span>
          </h1>
          <p className={`${styles.heroSubText2} text-white mt-[0.8rem]`}>
            I am a 
            <span className="text-main"> {text} </span>
          </p>
          <p className={`${styles.heroSubText} mt-[1.3rem] text-white-100`}>I develop React Websites <br/>
            & React Native Apps
          </p>
          <ResumeButton className="z-20 mt-[30px]" href={bio.resume} target='_blank' >Resume</ResumeButton>
        </div>
      </div>
      
      <div className="w-[90%] sm:w-[70%] md:w-[60%] lg:w-[45%] inset-0 relative top-[24rem] sm:top-[22] md:top-[20rem] lg:top-[18rem]  mx-auto items-center">
          <Lottie loop={true} animationData={hero1}/>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="absolute flex justify-center inset-0 w-full items-end xs:bottom-10 bottom-5">
        <a href="#about">
          <div className="flex justify-center p-2 items-start border-secondary w-[35px] h-[64px] border-4 rounded-3xl">
            <motion.div
              animate={{
                y: [0, 25, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className="bg-main w-3 h-3 rounded-full mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero