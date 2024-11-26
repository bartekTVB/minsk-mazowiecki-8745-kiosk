const tableVariants = {
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

const tableTransition = {
  type: "tween",
  ease: [0.855, -0.230, 0.380, 1.000],
  duration: .5,
}

const labelVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
}

const labelTransition = {
  duration: .5,
}

export { tableVariants, tableTransition, labelVariants, labelTransition };
