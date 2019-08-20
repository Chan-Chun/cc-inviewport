export default (element, offset = 0) => {
  if (!window || !document) {
    throw new Error('[inviewport] Please running inviewport on browser')
    return
  }
  if (!element) {
    throw new Error('[inviewport] element doesn\'t exist')
    return
  }
  if(!element || element.nodeType !== 1){
    throw new Error(`[inviewport] element ${element} is\'t a HTML element`)
    return
  }
  if (typeof offset !== 'number') {
    throw new Error(`[inviewport] offset ${offset} is\'t number`)
    return
  }
  const mainOffsetTop = element.offsetTop
  const mainHeight = element.offsetHeight
  const winHeight = window.innerHeight
  const winScrollTop = document.body.scrollTop + document.documentElement.scrollTop
  return !(winScrollTop > mainOffsetTop + mainHeight + offset ||
    winScrollTop + offset < mainOffsetTop - winHeight)
}
