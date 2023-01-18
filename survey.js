const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

    rl.question('What is your name? Nicknames are also acceptable :) ', (answer) => {
        const name = answer;
        rl.question('What\'s an activity you like doing? ', (answer) => {
            const hobby = answer;
            rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
                const favFood = answer;
                rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
                    const power = answer;
                    console.log(`${name} likes to do ${hobby}, loves eating ${favFood} and is amazing at ${power}`)
                    rl.close();
              });
          });
      });
    });


  

