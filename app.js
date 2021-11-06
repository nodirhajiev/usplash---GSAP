document.addEventListener('DOMContentLoaded', function () {
  let tl = gsap.timeline()
  tl.to('.right', 2, {
    width: '50%',
    ease: 'Power2.easeInOut',
  })
  tl.to(
    '.left',
    2,
    {
      width: '50%',
      ease: 'Power2.easeInOut',
    },
    '-=1.8',
  )
  tl.from(
    '.main__nav',
    2,
    {
      opacity: 0,
      ease: 'Expo.easeInOut',
    },
    '-=1.8',
  )
  tl.from(
    '.text h1',
    2,
    {
      x: '120%',
      ease: 'Circ.easeInOut',
    },
    '-=1.8',
  )
  tl.from(
    '.text p',
    2,
    {
      x: '120%',
      ease: 'Circ.easeInOut',
    },
    '-=1.9',
  )
  tl.to(
    '.img_wrapper .img',
    2,
    {
      width: '800px',
      ease: 'Power2.easeInOut',
    },
    '-=1.9',
  )
  tl.from(
    '.bottom_nav ul li',
    2,
    {
      x: '180%',
      stagger: 0.08,
      ease: 'Circ.easeInOut',
    },
    '-=1.9',
  )
  tl.from(
    '.info',
    2,
    {
      y: '100%',
      ease: 'Circ.easeInOut',
    },
    '-=1.9',
  )
  tl.from(
    '.name',
    2,
    {
      x: '-100%',
      ease: 'Circ.easeInOut',
    },
    '-=1.9',
  )
})
