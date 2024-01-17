// SNACK 1
// TAVOLO VIP
const table = 'Tavolo Vip';
// LISTA DEGLI INVITATI
const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];


const guestsList = guests.map((name, index) => ({table, name, seatNumber: index + 1}));

console.log(guestsList)