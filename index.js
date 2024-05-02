const inventoryOption = document.querySelector (".inventoryOption").children
const inventorySection = document.querySelector (".inventorySection").children
const t = document.querySelector (".skill").children

// function collaspeButtonInventory (type) {
//     const conditionBoucle = type.length
//    console.log(type)
//     for (let i = 0; i < conditionBoucle; i++) {
//         console.log(type[i].innerHTML)
//         type[i].addEventListener("click",function (){
//             console.log(type[i])
//         })
//     }
// }

function collaspeButtonInventory (type,type2) {
    const conditionBoucle = type.length
    for (let i = 0; i < conditionBoucle; i++) {
        type[i].getAttribute("data-target")
        type[i].addEventListener("click",function (){
            for (let j = 0; j < type2.length; j++ ){
                const target = type[i].getAttribute("data-target")
                const targetDiv = document.getElementById(target)
                if (type2[j].style.display === "flex"){
                    type2[j].style.display = "none"
                }
                if (type[i].name === type2[j].className) {
                    type2[j].style.display = "flex"
                    //Ici tu écris ton code.
                }
            }
            
        })
    }
}

collaspeButtonInventory (inventoryOption,inventorySection)