import { lazy } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

// const  ComputersCanvas  = lazy(() => import("./canvas/Computers"));

const Hero = () => {

  const [ text ] = useTypewriter({
    words: ['SAJAL', 'Developer', 'Coder'],
            loop: 2,
            typeSpeed: 120,
            deleteSpeed: 50,
  })
  return (
    <section className="mx-auto relative mt-[0] w-full h-screen">
      <div className={`${styles.paddingX} flex flex-row absolute inset-0 top-[120px] max-w-7xl mx-auto items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="h-4 w-4 rounded-full bg-main" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-b from-main" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className="text-main"> {text} </span>
          </h1>
            {/* <span><Cursor cursorStyle='_'/></span> */}
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop React Websites <br className="sm:block hidden" />
            & React Native Apps
          </p>
        </div>
      </div>
      
      {/* <ComputersCanvas /> */}

      <div className="absolute flex justify-center w-full items-center xs:bottom-10 bottom-30">
        <a href="#about">
          <div className="flex justify-center p-2 items-start border-secondary w-[35px] h-[64px] border-4 rounded-3xl">
            <motion.div
              animate={{
                y: [0, 25, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: 5,
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