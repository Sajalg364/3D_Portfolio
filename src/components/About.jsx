import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon, img, url }) => (
  <Tilt className='xs:w-[250px] max-w-[280px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='max-w-[280px]  p-[1px] rounded-[20px]'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-primary rounded-[20px] py-5 px-12 min-h-[280px] max-w-[280px] flex justify-evenly items-center flex-col'
        style={{ border: '0.1px solid #854CE6', boxShadow: 'rgba(23, 92, 285, 0.18) 0px 4px 30px' }}
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={() => window.open(url, "_blank")}
            className='bg-black w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img
              src={img}
              alt='source code'
              className='w-10 h-10 rounded-full object-contain'
            />
          </div>
        </div>

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}><span className="text-main">O</span>verview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a skilled software developer with experience in
        <span className="text-main"> JavaScript</span> and <span className="text-main"> MongoDb</span>, and expertise in frameworks like <span className="text-main"> React, React Native, Node.js, and
          Express.js</span>. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-center lg:justify-normal gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");