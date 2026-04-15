let user = [
    {
        name : "kavin",
        lastname : "devx",
        age :20,
    },

    {
        name : "raja",
        lastname : "ram",
        age :10,
    },

    {
        name : "meena",
        lastname : "madhu",
        age :18,
    },
]
//target is usersage
const age = user.filter(person=> person.age > 18).map(person => `${person.name} ${person.lastname}`);
console.log(age);

