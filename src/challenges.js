const nums = [1, 2, 3, 4, 5];

const squares = nums.map(function (num) {
    return num * num;
});
console.log(squares);

const names = ["alice", "bob", "charlie", "danielle"];
const namesCapitalized = names.map(
    name => name[0].toUpperCase() + name.slice(1)
);
console.log(namesCapitalized);

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
const newPok = pokemon.map((creature) => `<p>${creature}</p>`);
console.log(newPok);

{colors.map(color => `<h3>${color}</h3>`)}

// export default function App() {
//     const jokeElements = jokesData.map(joke => {
//         return <Joke setup={joke.setup} punchline={joke.punchline} />
//     })
//     return (
//         <div>
//             {jokeElements}
//         </div>
//     )
// }

// export default [
//     {
//         setup: "I got my daughter a fridge for her birthday.",
//         punchline: "I can't wait to see her face light up when she opens it."
//     },
//     {
//         setup: "How did the hacker escape the police?",
//         punchline: "He just ransomware!"
//     }
// ]