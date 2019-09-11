const getusersPromiseBtnObj = document.getElementById('getusersPromiseBtn');

const getusersAsyncAwaitBtnObj = document.getElementById('getusersAsyncAwaitBtn');

getusersPromiseBtnObj.onclick = () => {
    fetch('http://cileria.com:3050/users')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
}

getusersAsyncAwaitBtnObj.onclick = async () => {
    const response = await fetch('http://cileria.com:3050/users');

    const responseJson = await response.json();
    const responseStr = JSON.stringify(responseJson);

    console.log(responseStr);
}

