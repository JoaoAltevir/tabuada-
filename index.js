let tabuada = 0;
let resposta;

console.log("Você deseja ver a tabuada de qual número?")
process.stdin.on("data", function (data){
    let input = data.toString().trim();
    if(!resposta){
        resposta = Number(input);
        for(let i = 0; i < 11; i++){
            tabuada = resposta * i;
            console.log(resposta ,"X", i, "=", tabuada);
        }
    }
    process.exit();
})