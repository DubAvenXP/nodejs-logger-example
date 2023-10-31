const { SHELL, USER, npm_lifecycle_script } = process.env;


console.table({ SHELL, USER, npm_lifecycle_script });


const characters = ['Obi-Wan', 'Vader', 'Yoda', 'Luke'];

const [, , , luke] = characters;
