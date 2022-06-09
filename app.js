let countriesHeading = document.getElementById("countries-heading")
const countriesSection = document.getElementById("countries-section")
const countryForm = document.getElementById("country-name-form")

const parseCountries = (countryData) => {
    for (let country of countryData) {
        let countryName = country.name
        let countryPop = country.population
        let countryFlag = country.flag
        let newParagraph = document.createElement("p")
        newParagraph.append(countryName + ", population: " + countryPop)
        let newFlag = document.createElement("img")
        newFlag.setAttribute("src", countryFlag)
        newFlag.setAttribute("height", 100)
        countriesSection.append(newParagraph)
        countriesSection.append(newFlag)
    }
}

const getAllCountries = () => {
    const request = fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => parseCountries(data))
    .then(() => countriesHeading.innerText = "Countries:")
}

const getCountryByName = (countryName) => {
    if (!countryName) {
        getAllCountries()
        return
    }
    const request = fetch("https://restcountries.com/v2/name/" + countryName)
    .then(response => response.json())
    .then(data => parseCountries(data))
    .then(() => countriesHeading.innerText = "Countries:")
    .ghd 
    
}

const clearList = () => {
    countriesSection.innerHTML = `<h2 id="countries-heading">Loading Data...</h2>`
    countriesHeading = document.getElementById("countries-heading")
}

countryForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const input = document.getElementById("input-field")
    clearList()
    getCountryByName(input.value)
})

getAllCountries()
