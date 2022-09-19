const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(data => displayCountries(data))
}

const displayCountries = countries => {
    // console.log(countries);
    const countriesHTML = countries.map(country => getCountryHTML(country));
    // console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

// // original
// const getCountryHTML = country => {
//     return `
//         <div class="country">
//             <h2>${country.name.common}</h2>
//             <img src="${country.flags.png}">
//         </div>
//     `
// }


// // option 1-destructuring
// const getCountryHTML = country => {
//     // option 1
//     const{name, flags} = country;
//     return `
//         <div class="country">
//             <h2>${name.common}</h2>
//             <img src="${flags.png}">
//         </div>
//     `
// }


// option 2- parameter er moddhe destructuring kora hoyeche
const getCountryHTML = ({ name, flags, area}) => {
    return `
        <div class="country">
            <h2>${name.common}</h2>
            <p>Area: ${area}</P>
            <img src="${flags.png}">
        </div>
    `
}

loadCountries();