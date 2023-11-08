import React from "react"
import styles from "./style.module.scss"
import { Links } from "./data"
import { motion } from "framer-motion"

const perspective = {
  initial: {
    opacity: 0,
  },
  enter: (i) => ({
    opacity: 1,
    transition: {
      delay: 0.5 + i * 0.1,
    },
  }),
  exit: {
    opacity: 0,
  },
}

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {Links.map((link, i) => {
          return (
            <motion.div
              key={i}
              custom={i}
              variants={perspective}
              animate="enter"
              exit="exit"
              initial="initial"
            >
              <a href={link.href}>{link.title}</a>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Nav
