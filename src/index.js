module.exports = (element, offset = 0) => {
  if (!element && !window) {
    throw new Error('Please running in browser')
    return
  }
  if (typeof offset !== 'number') {
    throw new Error('Offset is\'t number')
    return
  }
  let mainOffsetTop = element.offsetTop
  let mainHeight = element.offsetHeight
  let winHeight = window.innerHeight
  let winScrollTop = window.document.body.scrollTop + window.document.documentElement.scrollTop
  return !(winScrollTop > mainOffsetTop + mainHeight + offset || winScrollTop + offset < mainOffsetTop - winHeight)
}
