const path = require("path");
const fs = require("fs");


console.log(__dirname)


//pegar o nome de um arquivo
console.log('Nome do arquivo:',path.basename(__filename));

//Pegar a extensão de um arquivo
console.log('Extensão do arquivo:',path.extname(__filename));

//Criar uma rquivo no diretório do arquivo atual
fs.writeFile(path.join(__dirname, "Message.txt"), "Welcome to FSC!", () => {
    console.log("Arquivo criado com sucesso!")
});
