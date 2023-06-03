import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser"

import { slideIn } from "../utils/motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    if (form.message && form.email) {
      emailjs
        .send(
          "service_2gcvt0g",
          "template_jhui1bv",
          {
            from_name: form.name,
            to_name: "Thuy Nguyen",
            from_email: form.email,
            to_email: "thuytn.design@gmail.com",
            message: form.message,
          },
          "jmp5n29fDiJu5i8xx"
        )
        .then(() => {
          setLoading(false)
          alert("Thank you for contacting. I will get back to you soon")

          setForm({
            name: "",
            email: "",
            message: "",
          })
        })
    } else if (!form.message) {
      setLoading(false)
      alert("Message can not be empty")
    } else if (!form.email) {
      setLoading(false)
      alert("Please enter your email address")
    } else {
      setLoading(false)
      alert("Something went wrong")
    }
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden w-[100%] sm:w-[80%]">
      <motion.div
        variants={slideIn("left", "spring", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className=" bg-tertiary hover:bg-white text-white font-semibold hover:text-tertiary py-2 px-4 border border-secondary hover:border-transparent rounded w-20 "
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")
