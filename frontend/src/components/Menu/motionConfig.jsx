const pageVariants = {
  initial: {
    y: '5%',
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
  },
  out: {
    y: '5%',
    opacity: 0,
  }
}

const pageTransition = {
  type: "tween",
  ease: [0.855, -0.230, 0.380, 1.000],
  duration: .5,
}

export { pageVariants, pageTransition };