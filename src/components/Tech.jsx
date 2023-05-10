import Marquee from "react-fast-marquee"

import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { styles } from "../styles"

const Marquees = ({
  className = "",
  style = {},
  pauseOnHover = false,
  gradient = false,
  autoFill = false,
  // play = false,
  children,
  ...props
}) => {
  return (
    <Marquee
      gradient={gradient}
      pauseOnHover={pauseOnHover}
      className={className}
      style={style}
      autoFill={autoFill}
      // play={play}
      {...props}
    >
      {children}
    </Marquee>
  )
}

const Tech = () => {
  return (
    <div className="mx-auto pt-6">
      <div className="mb-20 mt-10">
        <h2 className={styles.sectionHeadText}>Technologies.</h2>
      </div>
      <Marquees className="py-4 pb-6">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="group relative flex justify-center px-4 transition duration-200 ease-linear lg:px-6"
          >
            <img
              className="h-auto w-9 md:w-14"
              src={tech.icon}
              alt={tech.name}
            />
            <span className="absolute -top-4 w-max scale-0 rounded bg-gray-700/30 px-2 py-1 text-sm font-medium  shadow transition-all group-hover:scale-100 text-gray-300">
              {tech.name}
            </span>
          </div>
        ))}
      </Marquees>
    </div>
  )
}

export default SectionWrapper(Tech, "")
