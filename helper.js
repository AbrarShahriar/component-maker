import { log } from './utils.js'

export const applyStylesIfAvailable = (createdEl, curNode) => {
  if(curNode.styles) {
    let styleKeys = Object.keys(curNode.styles)
    styleKeys.forEach(key => {
      createdEl.style[key] = curNode.styles[key]
    })
    log("applying style to:", curNode.node)
  }
}

export const renderParent = (el, curNode, parent) => {
 
    log(curNode.node, 'has no children')
    
    if(curNode.text) {
      el.innerText = curNode.text
    }
    parent.innerHTML = ""
    parent.append(el)
}