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
    price: 1
}, {
    name: 'Bowl',
    image: '',
    price: 1
}, {
    name: 'Waffle Cone',
    image: 'https://freepngimg.com/thumb/ice_cream/24787-5-ice-cream-cone-hd.png',
    price: 2
},
]

let orders = []

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


function drawTotal() {
    let subtotal = 0
    orders.forEach(order => subtotal += order.price)
    console.log('subtotal', subtotal);
    let totalElm = document.getElementById('total')
    totalElm.innerText = subtotal
}

