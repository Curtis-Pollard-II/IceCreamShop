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

let orders = []

function drawMenu() {
    let flavorTemplate = ''
    menuItems.forEach(flavor => {
        flavorTemplate += `
        <div class="background2 col-6 p-3 iceCreamFlavor" onclick="order('${flavor.name}')">
            <p class="bg-info fs-5"><b>${flavor.name}</b></p>               
            <img class=" mt-0 img-fluid" src="${flavor.image}">
            <p class="bg-info fs-5">$ ${flavor.price}</p>
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

