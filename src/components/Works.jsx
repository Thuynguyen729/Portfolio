import Tilt from "react-parallax-tilt"
import { motion } from "framer-motion"

import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"

const ProjectCard = ({
  name,
  description,
  tags,
  image,
  link,
  index,
  tiltMaxAngleX = 3,
  tiltMaxAngleY = 1,
}) => {
  return (
    <Tilt
      tiltMaxAngleX={tiltMaxAngleX}
      tiltMaxAngleY={tiltMaxAngleY}
      className=" green-pink-gradient p-[1px] rounded-lg shadow-card"
    >
      <div className=" bg-tertiary rounded-lg  w-full flex flex-col-reverse items-center gap-3 justify-between md:py-5 md:pl-5  md:flex-row  md:h-[280px] ">
        <div className=" h-[40%] md:w-2/5 md:h-full flex flex-col flex-wrap  justify-between p-5 md:p-0 md:pr-10 ">
          <div>
            <h3 className="text-white font-bold text-[24px] ">{name}</h3>
            <p className="text-gray-200 text-[14px] mt-5">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag) => (
              <p key={tag.name} className={` ${tag.color} text-[12px]`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </div>
        <div className=" w-full h-[270px] md:w-3/5 md:h-[320px] md:absolute md:right-0 ">
          <a href={link} target="_blank">
            <img
              src={image}
              alt={name}
              className="inline-block object-cover rounded-t-lg md:rounded-lg w-full h-full hover:cursor-pointer"
            />
          </a>
        </div>
      </div>
    </Tilt>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variant={textVariant}>
        <p className={styles.sectionSubText}>Works</p>
        <h2 className={styles.sectionHeadText}>My Project.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. It reflects my ability to solve problems, work with
        different technologies, and manage projects effectively.
      </motion.p>
      <div className="mt-20 flex flex-col gap-20">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
