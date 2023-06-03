import React from "react"
import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { styles } from "../styles"
import { services } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { SectionWrapper } from "../hoc"

const ServiceCard = ({ title, index, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-lg shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[16px] max-w-3xl leading-[30px] 	"
      >
        I'm a skilled front-end developer with core experience in{" "}
        <span className="text-white">HTML, CSS, Javascript</span>, and expertise
        in using cutting-edge technologies such as{" "}
        <span className="text-white">
          ReactJs, NextJs, Three.js, Bootstrap, Tailwind and Github
        </span>
        . I am looking for new opportunities to learn and grow as a developer.
        If you're looking for a driven and enthusiastic team player to help
        create amazing web applications, let's work together!
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 ">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            index={index}
            {...service} /* spread all props of {service} */
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")
