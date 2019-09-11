// globale variablen/konstanten
let cart = [];
let products = [];
const thumbnailObj = document.getElementsByClassName('thumbnail');
const thumbnailContainerObj = document.getElementById('thumbnail-container');
const productDetailsObj = document.getElementById('product-details');
const cartObj = document.getElementById('cart');
const thankyouObj = document.getElementById('thankyou');
const cartBuyButtonObj = document.getElementById('cart-buy-button');
const logoObj = document.getElementById('logo');
// in den Warenkorb legen - Button
const putItemCartObj = document.getElementById('put-item-cart');

const loadProducts = async (category) => {

    // standardmäßig keine category
    let url = 'http://localhost:3000/product';
    
    // falls die category existiert, dann hänge
    // sie dran
    if(typeof category !== 'undefined') {
        url += '?category=' + category;
    }
    
    // 1. fetch-aufruf abfeuern
    const response = await fetch(url);
    // 2. das objekt als json interpretieren -> wir bekommen ein objekt
    const responseJson = await response.json();
    
    // <div class="thumbnail">
    //    <div class="thumbnail-name">Beethoven</div>
    //    <div class="thumbnail-price">100 €</div>
    // </div>    
    
    thumbnailContainerObj.innerHTML = '';
    for(product of responseJson.products) {
        products.push(product);
        const newDiv = document.createElement('div');
        newDiv.className = 'thumbnail';
        newDiv.style.background = `url(public/${product.imgurl}) center center`;
        newDiv.innerHTML = `
           <div class="thumbnail-name">${product.name}</div>
           <div class="thumbnail-price">${product.price} €</div>
        `;
        
        newDiv.onclick = showProductDetails.bind(this, product.id);
        thumbnailContainerObj.appendChild(newDiv);
    }

    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'flex';
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none';    
}

loadProducts();

const showStartpage = () => {
    loadProducts();
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'flex';
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none';
}

const showProductDetails = (id) => {
    // verstecke alles, außer die product-details seite
    productDetailsObj.style.display = 'block';
    thumbnailContainerObj.style.display = 'none';
    cartObj.style.display = 'none';
    thankyouObj.style.display = 'none'

    const currentProduct = products.filter((product) => product.id === id)[0];
    const productDetailsTitleObj = document.getElementById('product-details-title');

    // wir verändern die daten für die produktdetail-ansicht
    // den titel
    productDetailsTitleObj.innerText = currentProduct.name;
    // das bild
    const productDetailImageObj = document.getElementById('product-detail-image');
    productDetailImageObj.src = currentProduct.imgurl;
    // der beschreibungstext    
    const productDetailDescriptionObj = document.getElementById('product-detail-description');

    productDetailDescriptionObj.innerText = currentProduct.description;
 
    // den preis
    const productDetailPriceObj = document.getElementById('product-detail-price');
    
    productDetailPriceObj.innerText = currentProduct.price + '€';
    const productDetailTotalPriceObj = document.getElementById('product-detail-total-price');
    productDetailTotalPriceObj.innerText = currentProduct.price + '€';

    const productDetailQuantityObj = document.getElementById('product-detail-quantity');

    productDetailQuantityObj.value = 1;

    let quantity = 1;
    productDetailQuantityObj.onchange = () => {
        quantity = productDetailQuantityObj.value;
        const totalPrice = quantity * currentProduct.price;
        
        productDetailTotalPriceObj.innerText = totalPrice.toFixed(2) + '€';
    }

    // wir überschreiben das onclick für
    // in den warenkorb legen
    putItemCartObj.onclick = () => {
        // JSON string aus localStorage laden
        let cartItems = localStorage.getItem('cart');
        let cartItemsArray = [];
        if(cartItems !== null) {
            // array aus JSON vom localStorage laden
            cartItemsArray = JSON.parse(cartItems);
        }

        // wir überprüfen, ob es das item schon gibt,
        // also ob wir z.b. schonmal harry potter in den warenkorb
        // getan haben
        let itemFound = false;
        for(item of cartItemsArray) {
            if(item.id === currentProduct.id) {
                item.quantity += quantity;
                if(item.quantity > 9) {
                    item.quantity = 9;
                }
                itemFound = true;
                break;
            }
        }

        // falls das item nicht gefunden wurde,
        // dann in das array das neue item hinzufügen
        if(!itemFound) {
            cartItemsArray.push({
                ...currentProduct,
                quantity: quantity
            });
        }
            
        // localStorage überschreiben mit 
        // neuem Array
        localStorage.setItem('cart', JSON.stringify(cartItemsArray));
        showCart();
    }
}

const buy = async () => {

    let cartItems = localStorage.getItem('cart');
    let cartItemsArray = [];
    // falls items im cart sind
    if(cartItems !== null) {
        // wir füllen das array mit items aus
        // dem localStorage
        cartItemsArray = JSON.parse(cartItems);
    }

    let productIds = [];
    for(item of cartItemsArray) {
        productIds.push(item.id);
    }
    
    let body = {
        productids : productIds
    };

    try {
        const response = await fetch('http://localhost:3000/order',
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(body)
            });
        // falls http-antwort 200 oder 304 war 
        if(response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseJson = await response.json();
            // 3. als string darstellen
            const responseStr = JSON.stringify(responseJson);
            localStorage.clear();
            showThankYou();
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }
}

const removeItem = (id) => {
    const removeDivObj = document.getElementById(id);
    removeDivObj.remove();

    let cartItems = localStorage.getItem('cart');
    // falls items im cart sind
    if(cartItems !== null) {
        // wir füllen das array mit items aus
        // dem localStorage
        let cartItemsArray = JSON.parse(cartItems);

        let i=0;
        for(item of cartItemsArray) {
            if(item.id === id) {
                cartItemsArray.splice(i, 1);
                break;
            }
            i++;
        }

        localStorage.setItem('cart', JSON.stringify(cartItemsArray));
    }    

    showCart();
}

const showCart = () => {
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'none';
    cartObj.style.display = 'block';
    thankyouObj.style.display = 'none';

    // cart löschen
    cartObj.innerHTML = '';

    let cartItems = localStorage.getItem('cart');
    let cartItemsArray = [];
    // falls items im cart sind
    if(cartItems !== null) {
        // wir füllen das array mit items aus
        // dem localStorage
        cartItemsArray = JSON.parse(cartItems);
    }

    let sum = 0;
    for(item of cartItemsArray) {
        console.log(item);
        const newItem = `<div class="cart-item" id="${item.id}">
            <div class="cart-thumbnail">
                <img src="${item.imgurl}" alt="" class="cart-picture">
            </div>
            <div class="cart-description">
                <div>
                    <span class="cart-quantity">${item.quantity}</span>&nbsp;x
                    <span class="cart-productname">${item.name}</span>
                    <span class="cart-amount">${item.price * item.quantity}€</span>
                    <button class="remove-cart-item" onclick="removeItem('${item.id}')">Remove</button>
                </div>
            </div>
        </div>`;

        sum += item.quantity * item.price;
        cartObj.innerHTML += newItem;
    }
    
    const buySection = `<div class="cart-buy">
        Total Amount: <span class="cart-totalamount">${sum.toFixed(2)}</span> € <button onclick="buy()" id="cart-buy-button" class="cart-buy-button">Buy Now</button>
    </div>`;

    cartObj.innerHTML += buySection;
}

const showThankYou = () => {
    productDetailsObj.style.display = 'none';
    thumbnailContainerObj.style.display = 'none';
    cartObj.style.display = 'none';
    /*
    analog zu:

    .thankyou {
        display: flex
    }
    */
    thankyouObj.style.display = 'flex';
}

// cartBuyButtonObj.onclick = () => {
//     showThankYou();
// }

for (let i = 0; i < thumbnailObj.length; i++) {
    thumbnailObj[i].onclick = () => {
        showProductDetails();
    }
}

logoObj.onclick = () => {
    showStartpage();
}