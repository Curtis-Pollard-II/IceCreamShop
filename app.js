const menuItems = [{
        isCone: true,
        name: 'Cake',
        image: 'https://mattcones.com/wp-content/uploads/2017/03/large-cake-cone.png',
        price: 1
    }, {
        isCone: true,
        name: 'Bowl',
        image: 'https://www.nicepng.com/png/full/361-3610970_12-oz-compostable-sugarcane-bagasse-round-bowls-disposable.png',
        price: 1
    }, {
        isCone: true,
        name: 'Waffle',
        image: 'https://freepngimg.com/thumb/ice_cream/24787-5-ice-cream-cone-hd.png',
        price: 2
    },{
    isCone: false,
    name: 'Cookie Dough',
    image: 'https://www.hersheyicecream.com/products/images/premium-gold/cookie-doughlicious-scoop2.png',
    price: 3
}, {
    isCone: false,
    name: 'Vanilla',
    image: 'https://www.hersheyicecream.com/products/images/premium-gold/old-fashioned-vanilla-scoop2.png',
    price: 2
}, {
    isCone: false,
    name: 'Strawberry',
    image: 'https://www.hersheyicecream.com/products/images/lighter-side/rfnsa-strawberry-scoop2.png',
    price: 2
}, {
    isCone: false,
    name: 'Chocolate',
    image: 'https://www.hersheyicecream.com/products/images/premium/heavenly-hazelnut-scoop2.png',
    price: 2
},
]

let orders = []



function drawMenu() {
    let flavorTemplate = ''
    menuItems.forEach(flavor => {
        flavorTemplate += `
        <div class="col-3 text-center m-2 p-1 bg-pink rounded" onclick="order('${flavor.name}')">
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

