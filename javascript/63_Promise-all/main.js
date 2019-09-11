
function getImage(imageName) {
    let url = `http://openweathermap.org/img/w/${imageName}.png`;
    console.log(url);
    let myPromise = new Promise(function (resolve, reject) {
        var img = new Image();
        img.onload = function () {
            resolve(url);
        }
        img.onerror = function () {
            reject(url);
        }
        img.src = url;
    });
    console.log(myPromise);
    return myPromise;
}

const imageNames = ['01d', '04n', '09d', '50n'];
const imagePromises = imageNames.map(getImage); // call getImage on each array element and return array of promises

Promise.all(imagePromises).then(function (urls) {
    console.table(imagePromises);
    for (var i = 0; i < urls.length; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', urls[i]);
        container.append(img);
    }
}).catch(function (urls) {
    console.warn("Error fetching some images: " + urls)
});