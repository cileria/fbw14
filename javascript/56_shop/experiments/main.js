const loadProductsBtnObj = document.getElementById('loadProductsBtn');
const loadProductsCategoryBtnObj = document.getElementById('loadProductsCategoryBtn');
const postOrderBtnObj = document.getElementById('postOrderBtn');

loadProductsBtnObj.onclick = async () => {
    // 1. fetch-aufruf abfeuern
    const response = await fetch('http://localhost:3000/product');
    // 2. das objekt als json interpretieren -> wir bekommen ein objekt
    const responseJson = await response.json();
    // 3. als string darstellen
    const responseStr = JSON.stringify(responseJson);
    console.log(responseStr);
}

loadProductsCategoryBtnObj.onclick = async () => {
    // 1. fetch-aufruf abfeuern
    const response = await fetch('http://localhost:3000/product?category=Movies');
    // 2. das objekt als json interpretieren -> wir bekommen ein objekt
    const responseJson = await response.json();
    // 3. als string darstellen
    const responseStr = JSON.stringify(responseJson);
    console.log(responseStr);
}

postOrderBtnObj.onclick = async () => {
    let body = {
        productids : [ 1, 2, 3 ]
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
            alert('Bestellung aufgenommen.');

            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseJson = await response.json();
            // 3. als string darstellen
            const responseStr = JSON.stringify(responseJson);
            console.log(responseStr);        
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }
}
