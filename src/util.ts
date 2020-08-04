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

export const debounce = (func: () => void, wait: number, immediate: boolean = false) => {
	let timeout: number | undefined;
	return () => {
		let later = () => {
			timeout = undefined;
			if (!immediate) {
        func();
      }
		};
		const callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = window.setTimeout(later, wait);
		if (callNow) {
      func();
    }
	};
};
