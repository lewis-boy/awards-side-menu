"use client"
import React, { useState } from "react"
import styles from "./style.module.scss"
import Button from "./Button"
import { AnimatePresence, motion } from "framer-motion"
import Nav from "./Nav"

const variants = {
  open: {
    width: 480,
    height: 650,
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: 100,
    height: 40,
    top: "0px",
    right: "0px",
    transition: { duration: 0.5, delay: 0.35, ease: [0.76, 0, 0.24, 1] },
  },
}

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.header}>
      <motion.div
        className={styles.menu}
        variants={variants}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {/* before unmounting, trigger your exit animation. use AnimatePresence */}
        <AnimatePresence>{isActive && <Nav />}</AnimatePresence>
      </motion.div>
      <Button
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </div>
  )
}

export default Header
