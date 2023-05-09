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
  // course_code_link,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.5 * index, 0.75)}
      className=" green-pink-gradient p-[1px] rounded-2xl shadow-card"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-2xl p-5 sm:w-[350px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full object-cover rounded-2xl"
          />
        </div>
        <div>
          <h3 className="text-white font-bold text-[24px] mt-5">{name}</h3>
          <p className="text-secondary text-[14px] font-semibold mt-5">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <p key={tag.name} className={` ${tag.color} text-[14px]`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
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
        className="mt-4 text-secondary, text-[17px] max-w-3xl leading-[30px]"
      >
        Following projects showcases my skills and experience through real-world
        examples of my work. It reflects my ability to solve problems, work with
        different technologies, and manage projects effectively.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index} {...project} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")
