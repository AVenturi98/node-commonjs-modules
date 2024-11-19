/*

Lavoriamo con i moduli commonjs esportando e importando valori e funzioni. Segui questi tre step creando i rispettivi files:

1 - names.js

Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.

Esporta la funzione dal file.

2 - hobbies.js

Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un oggetto con una proprietà hobbies, che è un array di hobby.

Esporta la funzione dal fil*e.

3 - people.js

Importa la tua funzione da names.js

Importa la tua funzione da hobbies.js

Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto. **

Buon lavoro

*/

const nameComplete = require('./name.js');
const hobbies = require('./hobbies.js');

function people() {
    const firstName = '';
    const lastName = '';
    const hobby = hobbies('hobby1', 'hobby2', 'hobby3')
    
    return {
        firstName, 
        lastName, 
        hobby
    }
}

console.log(people())