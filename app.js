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
    name: 'Suger Cone',
    image: '',
}, {
    name: 'Bowl',
    image: '',
}, {
    name: 'Waffle Cone',
    image: 'https://freepngimg.com/thumb/ice_cream/24787-5-ice-cream-cone-hd.png',
},
]

let orders = []
let orderCones = []

function drawCone() {
    let coneTemplate = ''
    cone.forEach(coneType => {
        coneTemplate += `
        <div class="col-10 text-center m-2 bg-pink row p-1 iceCreamFlavor rounded" onclick="order('${coneType.name}')">
            <p class="bg-medium shadow-lg p-1 pe-0 mb-1 rounded fs-3 title-font">${coneType.name}</p>
            <div class="">
                <img class=" mt-0 img-fluid" src="${coneType.image}">
            </div>
        </div>
    `}) 
    console.log(coneTemplate);
    let menuElm = document.getElementById('cone-type')
    menuElm.innerHTML = coneTemplate
}
drawCone()

function drawMenu() {
    let flavorTemplate = ''
    menuItems.forEach(flavor => {
        flavorTemplate += `
        <div class="col-5 text-center m-2 bg-pink row p-1 iceCreamFlavor rounded" onclick="order('${flavor.name}')">
            <p class="bg-medium shadow-lg p-1 pe-0 mb-1 rounded fs-3 title-font">${flavor.name} <span class="fs-5 ps-3">$${flavor.price}</span></p>
            <div class="">
                <img class=" mt-0 img-fluid" src="${flavor.image}">
            </div>
        </div>
    `}) 
    console.log(flavorTemplate);
    let menuElm = document.getElementById('menu-items')
    menuElm.innerHTML = flavorTemplate
}
drawMenu()




function drawCart() {
    let cartTemplate = ''
    orders.forEach(order => {
        cartTemplate += `
        <img class=" img-fluid imgSpecial" src="${orderCone.image}
        <img class=" img-fluid imgSpecial" src="${order.image}">
        `})
    console.log(cartTemplate);
    let orderElm = document.getElementById('flavors-selected')
    orderElm.innerHTML = cartTemplate
}
drawCart()


function order(selectYourFlavor) {
    let foundFlavor = menuItems.find(fla => fla.name == selectYourFlavor)
    orders.unshift(foundFlavor)

    drawCart()
    drawTotal()
}

function orderCone(selectYourCone){
    let foundCone = cone.find(c => c.name == selectYourCone)
    orderCones.unshift(foundCone)

    drawCart()
}


function drawTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal);
    let totalElm = document.getElementById('total')
    totalElm.innerText = subtotal
}

