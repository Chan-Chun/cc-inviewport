module.exports = (element, offset) => {
  if (!element) {
    return
  }
  let mainOffsetTop = element.scrollTop
  let mainHeight = element.offsetHeight
  let winHeight = window.body.scrollHeight
  let winScrollTop = window.body.scrollTop
  return !(winScrollTop > mainOffsetTop + mainHeight || winScrollTop < mainOffsetTop - winHeight)
}
