// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

let movie = {
    title: "Como treinar o seu dragao",
    director: "Nao me lembro",
    review: {
        rating: 10.0,
        comment: "Pesquisar o nome do diretor"
    }
};

console.log("\nPropriedades do filme:");
console.log("------------------------");
// console.log(`Nome: ${movie.title}`);
// console.log(`Diretor: ${movie.director}`); 
// console.log(`Nota: ${movie.review.rating}`);
// console.log(`Comentario: ${movie.review.comment}`);

for (let key in movie) {
    if (typeof movie[key] === 'object') {
        console.log(`${key}:`);
        for (let subKey in movie[key]) {
            console.log(`- ${subKey}: ${movie[key][subKey]}`);
        }
    } else {
        console.log(`${key}: ${movie[key]}`);
    }
}
