const formSearch = document.querySelector('.form-search'),
    inputCitiesFrom = document.querySelector('.input__cities-from'), //formSearch
    dropdownCitiesFrom = document.querySelector('.dropdown__cities-from'),
    inputCitiesTo = document.querySelector('.input__cities-to'),
    dropdownCitiesTo = document.querySelector('.dropdown__cities-to'),
    inputDateDepart = document.querySelector('.input__date-depart');

const cities = ['Kyiv', 'Lviv', 'Istambul', 'Warsaw', 'Krakow', 'Gdansk', 'Minsk', 'London', 'Paris', 'Stockholm', 'Tokyo', 'Dubai', 'Lisbon'];

inputCitiesFrom.addEventListener('input', () => {
    const filterCity = cities.filter((item) => {
        const fixItem = item.toLowerCase();
        return fixItem.includes(inputCitiesFrom.value.toLowerCase());
    });

    console.log(filterCity);
});