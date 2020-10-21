document.body.onload = createLines();

window.addEventListener("resize", () => {
    document.querySelector("svg").remove()
    createLines()
})

function createLines() {
    var arbo = document.querySelector(".arbo")
    var wrapper =  document.createElement('div')
    wrapper.setAttribute("class","wrapper")
    arbo.parentNode.insertBefore(wrapper, arbo)
    wrapper.appendChild(arbo)
    let viewBox = `0 0 ${arbo.offsetWidth} ${arbo.getBoundingClientRect().height}`
    var svg = document.createElementNS("http://www.w3.org/2000/svg","svg")     
    svg.setAttribute("viewBox", viewBox);
    wrapper.prepend(svg); 
    let elements = document.querySelectorAll(':not(.arbo) > li > *:not(ul)')
    elements.forEach(elem => {
    const parent = elem.parentElement.parentElement.parentElement.firstElementChild;
    const ul = elem.parentElement.parentElement;
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");

    for (let index = 0; index < 3; index++) {
        var line = document.createElementNS("http://www.w3.org/2000/svg","line");
        line.setAttribute("stroke", "red");
        var div1Rect = parent.getBoundingClientRect();
        var div2Rect = elem.getBoundingClientRect();
        if (index === 0) {
        line.setAttribute('x1', div1Rect.left + window.scrollX + (div1Rect.width / 2));
        line.setAttribute('x2', div1Rect.left + window.scrollX + (div1Rect.width / 2));
        line.setAttribute('y1', div1Rect.top + window.scrollY + div1Rect.height)
        line.setAttribute('y2', div1Rect.top + window.scrollY + div1Rect.height + (div2Rect.top + window.scrollY - div1Rect.top + window.scrollY - div1Rect
            .height) / 2);
        }
        if (index === 1) {
        line.setAttribute('x1', div1Rect.left + window.scrollX + (div1Rect.width / 2));
        line.setAttribute('x2', div2Rect.left + window.scrollX + (div2Rect.width / 2));
        line.setAttribute('y1', div1Rect.top + window.scrollY + div1Rect.height + (div2Rect.top + window.scrollY - div1Rect.top + window.scrollY - div1Rect.height) / 2);
        line.setAttribute('y2', div1Rect.top + window.scrollY + div1Rect.height + (div2Rect.top + window.scrollY - div1Rect.top + window.scrollY - div1Rect
            .height) / 2);
        }
        if (index === 2) {
        line.setAttribute('x1', div2Rect.left + window.scrollX + (div2Rect.width / 2));
        line.setAttribute('x2', div2Rect.left + window.scrollX + (div2Rect.width / 2));
        line.setAttribute('y1', div1Rect.top + window.scrollY + div1Rect.height + (div2Rect.top + window.scrollY - div1Rect.top + window.scrollY - div1Rect.height) / 2);
        line.setAttribute('y2', div2Rect.top + window.scrollY);
        }
        g.appendChild(line);
    }
    svg.appendChild(g);
    });
}