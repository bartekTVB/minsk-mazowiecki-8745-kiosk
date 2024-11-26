const pageVariants = {
  initial: {
    x: '-110%',
  },
  in: {
    x: 0,
  },
  out: {
    x: '-110%',
  }
}

const pageTransition = {
  type: "tween",
  ease: [0.855, -0.230, 0.380, 1.000],
  duration: .5,
}

export { pageVariants, pageTransition };