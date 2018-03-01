module.export = (element, offset) => {
  const element = document.querySelector(element)
  if (element) {
    let mainOffsetTop = $(el).offset().top
    let mainHeight = $(el).height()
    let winHeight = $(window).height()
    let winScrollTop = $(window).scrollTop()
    return !(winScrollTop > mainOffsetTop + mainHeight || winScrollTop < mainOffsetTop - winHeight)
  }
}
