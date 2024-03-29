/*!
 * xq-util v1.0.4 (http://xqkeji.cn/)
 * Author xqkeji.cn
 * LICENSE SSPL-1.0
 * Copyright 2023 xqkeji.cn
 */
 declare const domReady: (callBack: () => void) => void;
declare const windowReady: (callBack: () => void) => void;
declare const slideUp: (target: HTMLElement, duration?: number) => void;
declare const slideDown: (target: HTMLElement, duration?: number) => void;
declare const slideToggle: (target: HTMLElement, duration?: number) => void;
declare const children: (element: Element, selector: string) => Element[];
declare const parent: (element: HTMLElement, selector: string) => HTMLElement | null;
declare const parents: (element: Element, selector: string) => Element[];
declare const prev: (element: Element, selector: string) => Element[];
declare const next: (element: Element, selector: string) => Element[];
declare const append: (element: Element, dom: string) => void;
declare const prepend: (element: Element, dom: string) => void;
declare const before: (element: Element, dom: string) => void;
declare const after: (element: Element, dom: string) => void;
declare const find: (selector: string, element?: HTMLElement) => Element[];
declare const findOne: (selector: string, element?: HTMLElement) => Element | null;
declare const jsonFormData: (form: HTMLFormElement) => {};
declare const setUrlParam: (url: string, key: string, value: string | number | null) => string;

export { after, append, before, children, domReady, find, findOne, jsonFormData, next, parent, parents, prepend, prev, setUrlParam, slideDown, slideToggle, slideUp, windowReady };
