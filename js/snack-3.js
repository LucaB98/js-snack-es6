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


const {name: minWeightBikeName, weight: minWeight} = bikesList.reduce((min, bike) => (bike.weight < min.weight ? bike : min), bikesList[0]);

console.log(`La bici più leggera è ${minWeightBikeName} con un peso di ${minWeight} kg`);

     