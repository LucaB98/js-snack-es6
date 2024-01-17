// SNACK 2
// ELENCO DEGLI STUDENTI
const studentList = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades:78
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    },

];


const over70Vote = studentList.filter(({grades}) => grades > 70);

const over70VoteOver120Id = over70Vote.filter(({id}) => id > 120);

const upperCaseNames = studentList.map(({name}) => name.toUpperCase());

let items = '';

upperCaseNames.forEach(({name}) => {
    items += `<li>${name}</li>`
});

console.log(over70Vote, over70VoteOver120Id, upperCaseNames);

