const nome = "lucas nunes de carvalho malaquias chabi"
const arrayDeNome = nome.split(" ");
let nomeFormatado = "";

for (let nome of arrayDeNome) {
    let primeiraLetra = nome.slice(0, 1);
    let restoDoNome = nome.slice(1);

    nomeFormatado += primeiraLetra.toUpperCase() + restoDoNome + " ";
}
console.log(nomeFormatado.trim())