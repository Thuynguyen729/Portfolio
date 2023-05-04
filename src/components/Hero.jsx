//A production-ready motion library for React
import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[160px] lg:top-[130px] 2xl:top-[180px]  max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]"> Thuy Nguyen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#915eff]`}>
            I develop <span className="text-white-100"> user interfaces </span>
            <br className="sm:block " /> and
            <span className="text-white-100"> web applications</span>
          </p>
        </div>
      </div>

      <ComputersCanvas className="z-10" />
    </section>
  )
}

export default Hero
