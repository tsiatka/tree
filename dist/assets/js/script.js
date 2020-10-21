// const tree = document.querySelector('#tree')
// const Uls = document.querySelectorAll('ul')
// const Uls = tree.childNodes



// function checkChild(el, target, subtarget) {
//     el.childNodes.forEach( subli => {
//         // Check si il y a des LI
//         if (subli.tagName == target) {
//             // Return la box pour le SVG
//             subli.childNodes.forEach( box => {
//                 if (box.tagName == "DIV") {
//                     // X Y de .box
//                     console.log(box)
//                 }
//             })
//             // Check si il y a des UL et reproduit le schema
//             subli.childNodes.forEach( subul => {
//                 if (subul.tagName == subtarget) {
//                     console.log("salut")
//                     checkChild(subul, "LI", "UL")
//                 }
//             })
//         }
//     })
// }

// checkChild(tree, "LI", "UL")

let elem = document.querySelectorAll(':not(.arbo) > li > *:not(ul)')
elem.forEach(item => {
    const itemX = parseInt(item.getBoundingClientRect().x + item.getBoundingClientRect().width/2)
    const itemY = parseInt(item.getBoundingClientRect().y + item.getBoundingClientRect().height)
    
    const parent = item.parentElement.parentElement.parentElement.firstChild
    const parentX = parseInt(item.getBoundingClientRect().x + item.getBoundingClientRect().width/2)
    const parentY = parseInt(item.getBoundingClientRect().y)

})