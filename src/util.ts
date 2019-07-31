export const getRandomId = () => {
  return (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
}

export const getScrollTop = () => {
  return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
}

export const getScrollLeft = () => {
  return window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
}

export const getOffset = (el: HTMLElement) => {
  const rect = el.getBoundingClientRect();
  return {
    top: rect.top + getScrollTop(),
    left: rect.left + getScrollLeft()
  }
}
