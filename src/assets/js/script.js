var arbo = document.querySelector(".arbo")
var wrapper =  document.createElement('div')
wrapper.setAttribute("class","wrapper")
arbo.parentNode.insertBefore(wrapper, arbo)
wrapper.appendChild(arbo)

function createLines() {
  let viewBox = `0 0 ${arbo.offsetWidth + window.scrollX} ${arbo.getBoundingClientRect().height}`
  var svg = document.createElementNS("http://www.w3.org/2000/svg","svg")     
  svg.setAttribute("viewBox", viewBox);
  wrapper.prepend(svg); 

  let elements = document.querySelectorAll(':not(.arbo) > li > *:not(ul)')
  elements.forEach(elem => {
    const parent = elem.parentElement.parentElement.parentElement.firstElementChild;
  
    var div1Rect = parent.getBoundingClientRect();
    var div2Rect = elem.getBoundingClientRect();

    var x1 =  div1Rect.left + window.scrollX + (div1Rect.width / 2);
    var y1 = div1Rect.top + window.scrollY + div1Rect.height
    var y2 = div1Rect.top + window.scrollY + div1Rect.height + (div2Rect.top + window.scrollY - div1Rect.top + window.scrollY - div1Rect.height) / 2;
    var x2 = div2Rect.left + window.scrollX + (div2Rect.width / 2)
    var y3 =  div2Rect.top + window.scrollY;

    var line = document.createElementNS("http://www.w3.org/2000/svg","path");
    line.setAttribute("stroke", "red");
    line.setAttribute("fill", "transparent");
    line.setAttribute('d', 'M'+ x1 +' '+ y1 +' V '+ y2 + ' H '+ x2  + ' V ' + y3);

    svg.appendChild(line);
  });
}
document.body.onload = createLines();

window.addEventListener("resize", () => {
    document.querySelector("svg").remove()
    createLines()
})
