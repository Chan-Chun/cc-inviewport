module.exports = (element, offset) => {
  if (!element && !window) {
    return
  }
  console.log(element)
  let mainOffsetTop = element.offsetTop
  let mainHeight = element.offsetHeight
  let winHeight = window.innerHeight
  let winScrollTop = document.body.scrollTop + document.documentElement.scrollTop
  console.log(mainOffsetTop, mainHeight, winHeight, winScrollTop)
  return !(winScrollTop > mainOffsetTop + mainHeight || winScrollTop < mainOffsetTop - winHeight)
}
