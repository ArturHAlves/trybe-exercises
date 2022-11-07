//ANTIGAMENTE 

// const greeting = (user) => console.log(`Welcome ${user}!`);

// greeting(); // Welcome undefined!




const greeting = (user = 'Artur') => console.log(`Welcome ${user}!`);

greeting(); // Vai retornar: Welcome Artur!
