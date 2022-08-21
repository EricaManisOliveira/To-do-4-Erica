import chalk from 'chalk';
import readlineSync from 'readline-sync';


const dados = readlineSync.question(chalk.green("digite seu cpf: "));
function usuario (cpf){
    if (cpf === "000.333.000"){
        return chalk.hex('#DEADED').underline(" Bem vinda Erica");
    }
    else{
        return "usuario nao cadastrado";
    }
}
const resultado = usuario(dados);
console.log(resultado)
