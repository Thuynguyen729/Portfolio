import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className=" max-w-7xl h-[calc(100vh-88px)] mx-auto mt-[50px] xs:mt-[88px] flex flex-col-reverse xs:flex-col ">
      <div
        className={`${styles.paddingX}  relative inset-0 my-[40px]  flex flex-row items-start gap-5 `}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 rounded-full bg-[#915eff]" />
          <div className="w-1 h-24 sm:h-28 md:h-32 lg:h-40 violet-gradient" />
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

      <div className="relative h-[350px] md:min-h-[55%] mx-[20px] md:mx-[120px] my-10 xs:my-0 ">
        <ComputersCanvas />
      </div>
    </section>
  )
}

export default Hero
