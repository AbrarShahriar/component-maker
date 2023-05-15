import { log, create, select, parseDepthValueForLogging } from './utils.js'
import { applyStylesIfAvailable, renderParent } from './helper.js'

const root = {
  node: "div",
  depth: 0,
  children: []
}

for(let i = 0; i <=40; i++) {
  document.body.innerHTML += "Amin🙂🤲 " + "<br>"
}

const elName = select(".el-name")
const app = select(".root")


const dom = {
  name: "card",
  node: 'div',
  depth: 0,
  styles: {background: 'red'},
  children: [
    {
      name: "title",
      depth: 1,
      node: 'h1',
      text: "Card header",
      styles: {color: "white"},
    },
    {
      name: "contents",
      depth: 1,
      node: 'div',
      children: [
        {
          name: "button",
          depth: 2,
          node: 'button',
          text: "Click me",
          styles: {padding: "10px 20px", color: "green"}
        }
      ]
    }
  ]
}

const dom2 = {
  node: 'button',
  text: 'click me'
}

const dom3 = {
  node: 'div',
  children: [
    {
    node: "p",
    text: "hello world!!"
  }
  ]
}



function renderDom(curNode, parent) {
  log(curNode)
  let el = create(curNode.node)
  log("created:", curNode.node)
  
  applyStylesIfAvailable(el, curNode)
  
  if (curNode.children) {
    log(curNode.node, 'has children')
    parent.append(el)
    curNode.children.forEach(child => {
      renderDom(child, el)
    })
  } else {
    renderParent(el, curNode, parent)
  }
}

function updateDomStructure(node) {
  
}
  
function renderStructure(curNode) {
  
  log(parseDepthValueForLogging(curNode.depth), curNode.node)
  
  let el = select(".structure")
  
  let span = create("span")
  span.innerText = parseDepthValueForLogging(curNode.depth) + " " + curNode.node
  
  let btn = create("button")
  btn.innerText = "add"
  btn.addEventListener("click", () => {
    let node = {
    node: elName.value.toLowerCase().trim(),
    depth: curNode.depth+1,
    styles: {
      width: "100px",
      height: "20px",
      backgroundColor: "red"
    }
  }
    
    if(curNode.children) {
      curNode.children.push(node)
    } else {
      curNode.children = [node]
    }
    
    log(root)
    
    el.innerHTML = ""
    app.innerHTML = ""
    renderStructure(root)
    renderDom(root, select(".root"))
  }) 
  
  let div = create("div")
  div.append(span)
  div.append(btn)
  
  el.append(div)
 
  let children = curNode.children
  
  if(children) {
    children.forEach(child => {
      renderStructure(child)
    })
  }
}

renderStructure(root)

renderDom(root, select(".root"))

/*
*
* root.children[0].depth = 1
* root.depth = 0
*
*/