fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {

    
    // 1. Get all countries from Asia
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Countries in Asia:');
    console.log(asiaCountries);

    // 2. Get countries with a population of less than 200,000
    const smallPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Countries with population less than 200,000:');
    console.log(smallPopulationCountries);

    // 3. Print name, capital, and flag for each country
    console.log('Details for each country:');
    data.forEach(country => {
      console.log('Name:', country.name.common);
      console.log('Capital:', country.capital);
      console.log('Flag:', country.flags[0]);
    });

    // 4. Calculate the total population of all countries
    const totalPopulation = data.reduce((total, country) => total + country.population, 0);
    console.log('Total population of all countries:', totalPopulation);

    // 5. Find and print the country that uses US dollars as currency
    const usDollarCountry = data.find(country => country.currencies.USD);
    if (usDollarCountry) {
      console.log('Country that uses US dollars:', usDollarCountry.name.common);
    } else {
      console.log('No country uses US dollars as currency.');
    }
  })
  .catch(error => {
    console.error('An error occurred:', error);
  });
