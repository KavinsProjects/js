    const users = [
        {
        id : 1,
        name : "kavin",
        ticket : true,
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

   const tocheck = users.every(users=> users.ticket == true); 
   console.log(tocheck);