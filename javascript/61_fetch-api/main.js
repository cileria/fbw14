// AJAX


fetch('https://pbs.twimg.com/media/DbiFIr_U8AAupIa?format=jpg&name=large')
.then(imageResponse => {
    console.table(imageResponse);

    let newImage = document.createElement('IMG');
    newImage.src = imageResponse.url;
    document.body.appendChild(newImage);
});