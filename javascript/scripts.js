
// Tache 1
function getEvenNumbers (arrayN){
    // Si le reste de la divison est 0 donc le nombre est pair
    return arrayN.filter(arrayN => arrayN % 2 === 0);
}

const arrayN = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const evenN = getEvenNumbers(arrayN);
console.log(evenN);

document.getElementById("showEvenN").textContent = "Even numbers are: " + evenN.toString();

// Tache 2
document.getElementById('btnChange').addEventListener('click', function() {
    document.getElementById('myText').textContent = 'Hello, Check !';
});

// Tache 3
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {

        const todosList = document.getElementById('todosList');

        for (let i = 0; i < 5; i++) {
            const listItem = document.createElement('li');
            listItem.textContent = (i+1) + " => " + data[i].title;
            todosList.appendChild(listItem);
        }

    })
    .catch((error) => console.error("FETCH ERROR:", error));