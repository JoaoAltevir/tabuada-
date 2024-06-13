let tabuada = 0;

console.log("Você deseja ver a tabuada de qual número?")
process.stdin.on("data", function (data){
    let entradaUsuario = Number(data.toString().trim());
    for(let i = 0; i < 11; i++){
        tabuada = entradaUsuario * i;
        console.log(entradaUsuario ,"X", i, "=", tabuada);
    }
    process.exit();
})