const fetch = require('node-fetch');

const getRandomUsers = (number) => {
    fetch(`https://randomuser.me/api/?results=${number}`)
        .then(response => response.json())
        .then(data => console.log(data))
}

export default getRandomUsers