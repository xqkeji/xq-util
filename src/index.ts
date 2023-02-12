const domReady = (callBack: () => void): void => {
	if (document.readyState === 'loading') {
	  document.addEventListener('DOMContentLoaded', callBack)
	} else {
	  callBack()
	}
  }
  
  const windowReady = (callBack: () => void): void => {
	if (document.readyState === 'complete') {
	  callBack()
	} else {
	  window.addEventListener('load', callBack)
	}
  }
  
  /* SLIDE UP */
  const slideUp = (target: HTMLElement, duration = 500) => {
	target.style.transitionProperty = 'height, margin, padding'
	target.style.transitionDuration = `${duration}ms`
	target.style.boxSizing = 'border-box'
	target.style.height = `${target.offsetHeight}px`
	target.style.overflow = 'hidden'
  
	window.setTimeout(() => {
	  target.style.height = '0'
	  target.style.paddingTop = '0'
	  target.style.paddingBottom = '0'
	  target.style.marginTop = '0'
	  target.style.marginBottom = '0'
	}, 1)
  
	window.setTimeout(() => {
	  target.style.display = 'none'
	  target.style.removeProperty('height')
	  target.style.removeProperty('padding-top')
	  target.style.removeProperty('padding-bottom')
	  target.style.removeProperty('margin-top')
	  target.style.removeProperty('margin-bottom')
	  target.style.removeProperty('overflow')
	  target.style.removeProperty('transition-duration')
	  target.style.removeProperty('transition-property')
	}, duration)
  }
  
  /* SLIDE DOWN */
  const slideDown = (target: HTMLElement, duration = 500) => {
	target.style.removeProperty('display')
	let {display} = window.getComputedStyle(target)
	if (display === 'none') {
	  display = 'block'
	}
  
	target.style.display = display
	const height = target.offsetHeight
	target.style.overflow = 'hidden'
	target.style.height = '0'
	target.style.paddingTop = '0'
	target.style.paddingBottom = '0'
	target.style.marginTop = '0'
	target.style.marginBottom = '0'
  
	window.setTimeout(() => {
	  target.style.boxSizing = 'border-box'
	  target.style.transitionProperty = 'height, margin, padding'
	  target.style.transitionDuration = `${duration}ms`
	  target.style.height = `${height}px`
	  target.style.removeProperty('padding-top')
	  target.style.removeProperty('padding-bottom')
	  target.style.removeProperty('margin-top')
	  target.style.removeProperty('margin-bottom')
	}, 1)
  
	window.setTimeout(() => {
	  target.style.removeProperty('height')
	  target.style.removeProperty('overflow')
	  target.style.removeProperty('transition-duration')
	  target.style.removeProperty('transition-property')
	}, duration)
  }
  
  /* TOOGLE */
  const slideToggle = (target: HTMLElement, duration = 500) => {
	if (window.getComputedStyle(target).display === 'none') {
	  slideDown(target, duration)
	  return
	}
  
	slideUp(target, duration)
  }
  
  // dom操作
  const children = (element: Element, selector: string) => {
	return [...element.children].flat().filter(child => child.matches(selector))
  }
  const parent=(element: HTMLElement, selector: string): HTMLElement | null=> {
    let ancestor = element.parentNode
    while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== 3) {
      // @ts-ignore
      // eslint-disable-next-line  @typescript-eslint/no-unsafe-call
      if (ancestor.matches(selector)) {
        return ancestor as HTMLElement
      }

      ancestor = ancestor.parentNode
    }

    return null
  }
  const parents = (element: Element, selector: string) => {
	const parents = []
	let ancestor = element.parentNode as Element
	while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== 3) {
	  if (ancestor.matches(selector)) {
		parents.push(ancestor)
	  }
  
	  ancestor = ancestor.parentNode as Element
	}
  
	return parents
  }
  
  const prev = (element: Element, selector: string) => {
	let previous = element.previousElementSibling
  
	while (previous) {
	  if (previous.matches(selector)) {
		return [previous]
	  }
  
	  previous = previous.previousElementSibling
	}
  
	return []
  }
  
  const next = (element: Element, selector: string) => {
	let next = element.nextElementSibling
	while (next) {
	  if (next.matches(selector)) {
		return [next]
	  }
  
	  next = next.nextElementSibling
	}
  
	return []
  }
  
  const append = (element: Element, dom: string): void => {
	const node = document.createRange().createContextualFragment(dom) as Node
	element.append(node)
  }
  
  const prepend = (element: Element, dom: string): void => {
	const node = document.createRange().createContextualFragment(dom) as Node
	element.prepend(node)
  }
  const before = (element: Element, dom: string): void => {
	const node = document.createRange().createContextualFragment(dom) as Node
	element.before(node)
  }
  const after = (element: Element, dom: string): void => {
	const node = document.createRange().createContextualFragment(dom) as Node
	element.after(node)
  }
  
  const find = (selector: string, element = document.documentElement) => {
	return [...Element.prototype.querySelectorAll.call(element, selector)].flat()
  }
  
  const findOne = (selector: string, element = document.documentElement) => {
	return Element.prototype.querySelector.call(element, selector)
  }
  
  const jsonFormData = (form: HTMLFormElement) => {
	const object = {}
  
	const formData = new FormData(form)
  
	for (const item of formData) {
	  const top_key = item[0]
	  if (top_key.includes('[')) {
		const key1 = top_key.slice(0, Math.max(0, top_key.indexOf('[')))
		const key2 = top_key.slice(top_key.indexOf('[') + 1, top_key.indexOf(']'))
		const data = {}
		// @ts-expect-error
		data[key2] = item[1]
		// @ts-expect-error
		if (object[key1]) {
		  // @ts-expect-error
		  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		  const tmp = object[key1]
		  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
		  tmp[key2] = item[1]
		  // @ts-expect-error
		  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		  object[key1] = tmp
		} else {
		  // @ts-expect-error
		  object[key1] = data
		}
	  } else {
		// @ts-expect-error
		object[item[0]] = item[1]
	  }
	}
  
	return object
  }
  
  export {
	domReady,
	windowReady,
	slideUp,
	slideDown,
	slideToggle,
	children,
	parent,
	parents,
	prev,
	next,
	find,
	findOne,
	append,
	before,
	after,
	prepend,
	jsonFormData
  }
  