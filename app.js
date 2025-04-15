let users = [
   { 
    username: "Terence",
    email:"Tjsaverin98@live.com",
    password: 'test123',
    subscriptionStatus: "VIP",
    discordId: "Terence Saverin#0009",
    lessonCompleted: [0, 1],
   },
   { 
    username: "Mitri",
    email:"Tjsaverin98@live.com",
    password: 'mitri123',
    subscriptionStatus: "VIP",
    discordId: "Mitri#0009",
    lessonsCompleted: [0, 1, 2, 3],
   },
];

console.log(users[0].lessonsCompleted.map(elem => elem * 2))