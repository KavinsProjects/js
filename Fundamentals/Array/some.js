    const users = [
        {
        id : 1,
        name : "kavin",
        ticket : false,
        },

        {
            id : 2,
            name : "booa",
            ticket : true,
        },

        {
            id : 3,
            name : "janu",
            ticket : true,
        },

    ];

    let theyCanGo = users.some(user=> user.ticket == true);
    console.log(theyCanGo);