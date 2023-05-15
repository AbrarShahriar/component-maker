export const create = el => document.createElement(el)
export const log = (...arg) => console.log(...arg);
export const select = el => document.querySelector(el)
export const parseDepthValueForLogging = depth => {
  let arr = Array(depth).fill("_")
  arr.push(">")
  return arr.join(" ")
} 