document.body.onload = generateArbo()

window.addEventListener("resize", () => {
    document.querySelector("svg").remove()
    generateArbo()
})

function createWrapper() {
    let wrapper = document.createElement('div')
    wrapper.setAttribute("class","wrapper")
    return wrapper
}

function addWrapperToArbo(wrapper, arbo) {
    arbo.parentNode.insertBefore(wrapper, arbo)
    wrapper.appendChild(arbo)
}

function generateWrapper(parent) {
    let wrapper = createWrapper()
    addWrapperToArbo(wrapper, parent)
}

function generateSVG(parent) {
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg")     
    svg.setAttribute("viewBox", `0 0 ${parent.scrollWidth} ${parent.offsetHeight}`)
    svg.setAttribute("width", parent.scrollWidth)
    return svg
}

function generateArbo() {
    var arbo = document.querySelector(".arbo")
    let wrapper = document.querySelector('.wrapper')
    
    if (!wrapper) {
        generateWrapper(arbo)
        // update wrapper
        wrapper = document.querySelector('.wrapper')
    }

    svg = generateSVG(arbo)
    wrapper.prepend(svg)

    const listItem = document.querySelectorAll(':not(.arbo) > li > *:not(ul)')
    listItem.forEach(item => {
        const path = document.createElementNS("http://www.w3.org/2000/svg","path")
        const itemParent = item.parentElement.parentElement.parentElement.firstElementChild
        const parentRect = itemParent.getBoundingClientRect()
        const ItemRect = item.getBoundingClientRect()

        if (window.innerWidth > 1100) {            
            const x1 = Math.floor(parentRect.left + window.scrollX + (parentRect.width / 2))
            const x2 = Math.floor(ItemRect.left + window.scrollX + (ItemRect.width / 2))
            const y1 = Math.floor(parentRect.top + window.scrollY + parentRect.height)
            const y2 = Math.floor(parentRect.top + window.scrollY + parentRect.height + (ItemRect.top + window.scrollY - parentRect.top + window.scrollY - parentRect.height) / 2)
            const y3 = Math.floor(ItemRect.top + window.scrollY)
            path.setAttribute('d', 'M'+ x1 +' '+ y1 +' V '+ y2 + ' H '+ x2  + ' V ' + y3)
        } else {
            const x1 = Math.floor(parentRect.left + window.scrollX + 20)
            const x2 = Math.floor(ItemRect.left + window.scrollX)
            const y1 = Math.floor(parentRect.top + window.scrollY + parentRect.height)
            const y2 = Math.floor(ItemRect.top + window.scrollY + parentRect.height /2)
            path.setAttribute('d', 'M'+ x1 +' '+ y1 +' V '+ y2 + ' H '+ x2 )
        }
        svg.appendChild(path)
    })
}