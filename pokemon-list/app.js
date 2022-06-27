const xhr = new XMLHttpRequest();

xhr.open("GET", "https://api.vschool.io/pokemon", true); 
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const JSONdata = xhr.responseText; 
        const data = JSON.parse(JSONdata); 
        displayData(data.objects[0].pokemon);
    }
}

const displayData = (arr) => {
    arr.forEach(pokemon => {
        const p = document.createElement('p');
        p.textContent = pokemon.name; 
        document.body.appendChild(p); 
    });
}