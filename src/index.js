module.exports = (element, offset = 0) => {
  if (!window) {
    throw new Error('Please running in browser')
    return
  }
  if (!element) {
    throw new Error('Element does not exist')
    return
  }
  if (typeof offset !== 'number') {
    throw new Error('Offset is\'t number')
    return
  }
  const mainOffsetTop = element.offsetTop
  const mainHeight = element.offsetHeight
  const winHeight = window.innerHeight
  const winScrollTop = window.document.body.scrollTop + window.document.documentElement.scrollTop
  return !(winScrollTop > mainOffsetTop + mainHeight + offset || winScrollTop + offset < mainOffsetTop - winHeight)
}
