// SNACK 4

// CREO UN ARRAY DI SQUADRE DA CALCIO

const squadsList = [
    {
        name: 'juventus',
        score: 0,
        errors: 0,
    },
    {
        name: 'milan',
        score: 0,
        errors: 0,
    },
    {
        name: 'inter',
        score: 0,
        errors: 0,
    },
    {
        name: 'toro',
        score: 0,
        errors: 0,
    },
    {
        name: 'roma',
        score: 0,
        errors: 0,
    },
    {
        name: 'fiorentina',
        score: 0,
        errors: 0,
    },
];

for(let squad of squadsList){
    squad.score = getRandomNumber(1, 100);
    squad.errors = getRandomNumber(1, 50);
}