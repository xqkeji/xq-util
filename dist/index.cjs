/*!
 * xq-util v1.0.1 (http://xqkeji.cn/)
 * Author xqkeji.cn
 * LICENSE SSPL-1.0
 * Copyright 2023 xqkeji.cn
 */
 'use strict';

const domReady = (callBack) => {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", callBack);
  } else {
    callBack();
  }
};
const windowReady = (callBack) => {
  if (document.readyState === "complete") {
    callBack();
  } else {
    window.addEventListener("load", callBack);
  }
};
const slideUp = (target, duration = 500) => {
  target.style.transitionProperty = "height, margin, padding";
  target.style.transitionDuration = `${duration}ms`;
  target.style.boxSizing = "border-box";
  target.style.height = `${target.offsetHeight}px`;
  target.style.overflow = "hidden";
  window.setTimeout(() => {
    target.style.height = "0";
    target.style.paddingTop = "0";
    target.style.paddingBottom = "0";
    target.style.marginTop = "0";
    target.style.marginBottom = "0";
  }, 1);
  window.setTimeout(() => {
    target.style.display = "none";
    target.style.removeProperty("height");
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};
const slideDown = (target, duration = 500) => {
  target.style.removeProperty("display");
  let { display } = window.getComputedStyle(target);
  if (display === "none") {
    display = "block";
  }
  target.style.display = display;
  const height = target.offsetHeight;
  target.style.overflow = "hidden";
  target.style.height = "0";
  target.style.paddingTop = "0";
  target.style.paddingBottom = "0";
  target.style.marginTop = "0";
  target.style.marginBottom = "0";
  window.setTimeout(() => {
    target.style.boxSizing = "border-box";
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = `${duration}ms`;
    target.style.height = `${height}px`;
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
  }, 1);
  window.setTimeout(() => {
    target.style.removeProperty("height");
    target.style.removeProperty("overflow");
    target.style.removeProperty("transition-duration");
    target.style.removeProperty("transition-property");
  }, duration);
};
const slideToggle = (target, duration = 500) => {
  if (window.getComputedStyle(target).display === "none") {
    slideDown(target, duration);
    return;
  }
  slideUp(target, duration);
};
const children = (element, selector) => {
  return [...element.children].flat().filter((child) => child.matches(selector));
};
const parents = (element, selector) => {
  const parents2 = [];
  let ancestor = element.parentNode;
  while (ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== 3) {
    if (ancestor.matches(selector)) {
      parents2.push(ancestor);
    }
    ancestor = ancestor.parentNode;
  }
  return parents2;
};
const prev = (element, selector) => {
  let previous = element.previousElementSibling;
  while (previous) {
    if (previous.matches(selector)) {
      return [previous];
    }
    previous = previous.previousElementSibling;
  }
  return [];
};
const next = (element, selector) => {
  let next2 = element.nextElementSibling;
  while (next2) {
    if (next2.matches(selector)) {
      return [next2];
    }
    next2 = next2.nextElementSibling;
  }
  return [];
};
const append = (element, dom) => {
  const node = document.createRange().createContextualFragment(dom);
  element.append(node);
};
const prepend = (element, dom) => {
  const node = document.createRange().createContextualFragment(dom);
  element.prepend(node);
};
const before = (element, dom) => {
  const node = document.createRange().createContextualFragment(dom);
  element.before(node);
};
const after = (element, dom) => {
  const node = document.createRange().createContextualFragment(dom);
  element.after(node);
};
const find = (selector, element = document.documentElement) => {
  return [...Element.prototype.querySelectorAll.call(element, selector)].flat();
};
const findOne = (selector, element = document.documentElement) => {
  return Element.prototype.querySelector.call(element, selector);
};
const jsonFormData = (form) => {
  const object = {};
  const formData = new FormData(form);
  for (const item of formData) {
    const top_key = item[0];
    if (top_key.includes("[")) {
      const key1 = top_key.slice(0, Math.max(0, top_key.indexOf("[")));
      const key2 = top_key.slice(top_key.indexOf("[") + 1, top_key.indexOf("]"));
      const data = {};
      data[key2] = item[1];
      if (object[key1]) {
        const tmp = object[key1];
        tmp[key2] = item[1];
        object[key1] = tmp;
      } else {
        object[key1] = data;
      }
    } else {
      object[item[0]] = item[1];
    }
  }
  return object;
};

exports.after = after;
exports.append = append;
exports.before = before;
exports.children = children;
exports.domReady = domReady;
exports.find = find;
exports.findOne = findOne;
exports.jsonFormData = jsonFormData;
exports.next = next;
exports.parents = parents;
exports.prepend = prepend;
exports.prev = prev;
exports.slideDown = slideDown;
exports.slideToggle = slideToggle;
exports.slideUp = slideUp;
exports.windowReady = windowReady;
