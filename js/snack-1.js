// SNACK 1
// TAVOLO VIP
const tableName = 'Tavolo Vip';
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


const guestsList = guests.map((guest, index) => {
 return  {
        table: tableName,
        name: guest,
        seatNumber: index + 1
    };
});

console.log(guestsList)