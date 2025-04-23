const fs = require("fs");
const path = require("path");

//criar uma pasta em um diretório
fs.mkdir(path.join(__dirname, "newFolder"), (err) => {});

//criar um arquivo dentro da pasta criada
fs.writeFile(path.join(__dirname, "newFolder", "Message.txt"), "Welcome to FSC!", (error) => {
    if (error) {
        console.log("Erro ao criar o arquivo:", error);
    }
    console.log("Arquivo criado com sucesso!");
});

//adicionar conteúdo a um arquivo já existente
fs.appendFile(path.join(__dirname, "newFolder", "Message.txt"), "\nHello World!", (error) => {
    if (error) {
        console.log("Erro ao adicionar conteúdo ao arquivo:", error);
    }
    console.log("Conteúdo adicionado com sucesso!");
} );   

let filecontent = "";

//ler o conteúdo de um arquivo
fs.readFile(path.join(__dirname, "newFolder", "Message.txt"), "utf-8", (error, data) => {
    if (error) {
        console.log("Erro ao ler o arquivo:", error);
    }
    filecontent = data;
    console.log("Conteúdo do arquivo:", filecontent);
});