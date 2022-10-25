const menuItems = [{
    name: 'Cookie Dough',
    image: 'https://www.hersheyicecream.com/products/images/premium-gold/cookie-doughlicious-scoop2.png',
    price: 3
}, {
    name: 'Vanilla',
    image: 'https://www.hersheyicecream.com/products/images/premium-gold/old-fashioned-vanilla-scoop2.png',
    price: 2
}, {
    name: 'Strawberry',
    image: 'https://www.hersheyicecream.com/products/images/lighter-side/rfnsa-strawberry-scoop2.png',
    price: 2
},
{
    name: 'Chocolate',
    image: 'https://www.hersheyicecream.com/products/images/premium/heavenly-hazelnut-scoop2.png',
    price: 2
}]

const cone = [{
    name: 'Cake',
    image: 'https://mattcones.com/wp-content/uploads/2017/03/large-cake-cone.png',
}, {
    name: 'Bowl',
    image: 'https://www.nicepng.com/png/full/361-3610970_12-oz-compostable-sugarcane-bagasse-round-bowls-disposable.png',
}, {
    name: 'Waffle',
    image: 'https://freepngimg.com/thumb/ice_cream/24787-5-ice-cream-cone-hd.png',
},
]

let orders = []
let orderCones = []

function drawCone() {
    let coneTemplate = ''
    cone.forEach(coneType => {
        coneTemplate += `
        <div class="col-10 text-center m-2 bg-medium row p-1 rounded" onclick="order('${coneType.name}')">
            <p class="bg-pink shadow-lg p-1 pe-0 mb-1 rounded fs-3 title-font">${coneType.name}</p>
            <div class="">
                <img class=" mt-0 img-fluid" src="${coneType.image}">
            </div>
        </div>
    `}) 
    let menuElm = document.getElementById('cone-type')
    menuElm.innerHTML = coneTemplate
}
drawCone()

function drawMenu() {
    let flavorTemplate = ''
    menuItems.forEach(flavor => {
        flavorTemplate += `
        <div class="col-5 text-center m-2 bg-pink row p-1 rounded" onclick="order('${flavor.name}')">
            <p class="bg-medium shadow-lg p-1 pe-0 mb-1 rounded fs-3 title-font">${flavor.name} <span class="fs-5 ps-3">$${flavor.price}</span></p>
            <div class="">
                <img class=" mt-0 img-fluid" src="${flavor.image}">
            </div>
        </div>
    `}) 
    let menuElm = document.getElementById('menu-items')
    menuElm.innerHTML = flavorTemplate
}
drawMenu()




function drawCart() {
    let cartTemplate = ''
    orders.forEach(order => {
        cartTemplate += `
        <img class="img-fluid imgSpecial" src="${order.image}">
        `})
    let orderElm = document.getElementById('flavors-selected')
    orderElm.innerHTML = cartTemplate
}
drawCart()


function order(selectYourFlavor) {
    let foundFlavor = menuItems.find(fla => fla.name == selectYourFlavor)
    let foundCone = cone.find(c => c.name == selectYourFlavor)
    orders.unshift(foundFlavor, foundCone)

    drawCart()
    drawTotal()
}




function drawTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal);
    let totalElm = document.getElementById('total')
    totalElm.innerText = subtotal
}

