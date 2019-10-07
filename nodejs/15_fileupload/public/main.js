console.log('Hallo World from Frontend.');

const btnSendFileObj = document.getElementById('btnSendFile');

btnSendFileObj.onclick = async () => {

    const sampleFileObj = document.getElementById('sampleFile');
    console.log(sampleFileObj);

    const data = new FormData();
    data.append('x', '5');
    data.append('hallo', 'world');
    data.append('imageUpload', sampleFileObj.files[0])

    try {
        const response = await fetch('http://localhost:3000/upload',
            {
                method: 'POST',
                body: data
            });
        // falls http-antwort 200 oder 304 war 
        if(response.ok) {
            // 2. das objekt als json interpretieren -> wir bekommen ein objekt
            const responseJson = await response.json();
        }
    }
    catch (e) {
        console.log('Error: ' + e); 
    }
}