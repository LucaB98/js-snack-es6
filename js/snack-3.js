// SNACK 3

// CREO UN ELENCO DI BICI

const bikesList = [
    {
        name: 'bikered',
        weight: 13,
    },
    {
        name: 'bikeblu',
        weight: 10,
    },
    {
        name:'bikegreen',
        weight: 15,
    },
    {
        name:'bikeyellow',
        weight: 12,
    },
    {
        name:'bikeblack',
        weight: 20,
    }
];

const getLowerstItem = (arr, key) => arr.reduce((result, item) => item[key] < result[key] ? item : result ,arr[0]);

const lightest = getLowerstItem( bikesList, 'weight');

console.log(lightest)
    


     