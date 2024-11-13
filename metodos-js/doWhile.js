// const usuario = {nome: 'Danel', idade: 17, time: 'Fluminense'}
// const bemVindo = 'Seja bem vindo'
// const bemVindoGeral = 'Seja bem vindo geral'
// const malVindo = 'Seja mal vindo'

// let numeroDeRepetições = 0;

// do {
//     usuario.time === 'Fluminense' && usuario.idade >= 18 
//     ? console.log(bemVindo) 
//     : usuario.time === 'Flamengo' && usuario.idade >= 18 
//     ? console.log(malVindo) 
//     :  usuario.idade >= 18 
//     ?  console.log(bemVindoGeral) 
//     : console.log('Não vendemos pra menores')/
//     numeroDeRepetições++
// } while (numeroDeRepetições < 1)

//>Na escola Senai Morvan Figueiredo, os alunos de Desenvolvimento de Sistemas estão criando um sistema de cadastro de novos estudantes. Crie um programa que pergunte o nome e a idade de cada aluno e armazene essas informações. O programa deve continuar pedindo os dados até que o usuário escolha parar.<//

// let usuario1 = require ('prompt-sync')();
// let cadastroDeAlunos = [];
// let continuar ;

// do {
//     let nome = usuario1('Digite seu nome: ');
//     let idade = usuario1('Digite sua idade: ');

//     cadastroDeAlunos.push({nome: nome, idade: idade});

//     continuar = usuario1('Deseja cadastrar novo aluno? (s/n): ');
// } while (continuar.toLowerCase() === 's');

// console.log('Alunos cadastrados na lista, ',cadastroDeAlunos);

//>O sistema de avaliação da escola permite que os alunos simulem suas notas. Crie um programa que peça ao aluno para inserir as notas das provas, calculando a média ao final. O programa deve continuar perguntando se o aluno quer simular mais notas até ele responder que não.<//

// const SimularNotas = require ('prompt-sync')();

// let NotaAlunos = [];
// let Prosseguir;

// do {
//     let Nota1 = parseFloat(SimularNotas(" Digite sua primeira nota: "));
//     let Nota2 = parseFloat(SimularNotas(" Digite sua segunda nota: "));
//     let Nota3 = parseFloat(SimularNotas(" Digite sua terceira nota: "));
//     let MediaNotas = (Nota1 + Nota2 + Nota3 ) /3;

//     console.log(MediaNotas);

//     NotaAlunos.push({nota1: Nota1, nota2: Nota2, nota3: Nota3});
//     NotaAlunos.push({MediaNotas});

//     Prosseguir = SimularNotas(" Deseja avaliar mais uma média de notas? (S/N): ");

// } while (Prosseguir == "S" || Prosseguir == "s");

// console.log(`Média retirada de nossas notas, `,NotaAlunos);

//>Para acessar o sistema de informações, os alunos precisam realizar o login. Crie um programa que simule o processo de login, pedindo o nome de usuário e a senha e verificando se estão corretos. O programa deve permitir tentativas repetidas até que o login seja bem-sucedido ou o usuário opte por sair.<//

// const usuario4 = {
//     nome: 'gomes',
//     senha: 1234
// };

// do{
// if (usuario4.nome === 'gomes' && usuario4.senha === 1234) {
//     console.log(`Bem-vindo, ${usuario4.nome}`);
// } else {
//     console.log('Acesso negado.');
// }
// }while(false);

// //>Durante a aula de matemática, os alunos aprenderam sobre potência. Crie um programa que peça ao usuário para inserir um número e um expoente e exiba o resultado. O programa deve perguntar se o usuário deseja calcular outra potência e repetir até ele responder que não.<//
// let num = require ('prompt-sync')();
// let poten = [];
// let contin;

// do{
//     let numero = num("digite um numero");
//     let potencia = num("digite uma potencia");
//     let calculo = numero ** potencia

//     poten.push ({calculo});

//     contin = num('deseja colocar outra conta (s/n): ');
// }while(contin.toLowerCase() === 's');

// console.log('contas feitas,', poten);

//>No Senai, os alunos devem usar senhas fortes para acessar o sistema. Crie um programa que peça uma senha e verifique se ela atende aos critérios de uma senha forte (mínimo de 8 caracteres, letras e números). O programa deve continuar pedindo até que uma senha válida seja inserida.<//

// let usuario5 = require ('prompt-sync') ();

// function senhaForte(senha) {
//     let temLetra = /[A-Za-z]/.test(senha)
//     let temNumero = /[1-9]/.test(senha)
//     return senha.length >= 8 && temLetra && temNumero;
// }

// let senhaValida = false;

// do {
//     let senha = usuario5('Cadastre sua senha: ');
    
//     if (senhaForte(senha)) {
//         console.log('Senha aprovada');
//         senhaValida = true;
//     } else {
//         console.log('A senha cadastrada deve conter 8 ou mais caracteres, incluindo letras e números');
//     }
// } while (!senhaValida );

//>Para verificar o progresso dos alunos, os professores precisam calcular a média de várias notas. Crie um programa que peça uma nota ao usuário e adicione ao total até que ele informe que não deseja inserir mais notas. Exiba a média ao final.<//

// let nota = require ('prompt-sync')();
// let fdp = [];
// let calcular;

// do{
//     let nota1 = parseFloat(nota("digite uma nota"));
//     let nota2 = parseFloat(nota("digite outra nota"));
//     let nota3 = parseFloat(nota("digite mais uma nota"));
//     let calculado = (nota1+nota2+nota3)/3;
   

//     fdp.push ({calculado});

//     calcular = nota('deseja calcular a nota de outro aluno?(s/n): ');
// }while(calcular.toLowerCase() === 's');

// console.log('notas', fdp);

//>Para verificar o progresso dos alunos, os professores precisam calcular a média de várias notas. Crie um programa que peça uma nota ao usuário e adicione ao total até que ele informe que não deseja inserir mais notas. Exiba a média ao final.<//

// const prompt = require('prompt-sync')();

// let totalNotas = 0;
// let contadorNotas = 0;
// let continuar;

// do {
//     let nota = parseFloat(prompt('Digite uma nota: '));

//     totalNotas += nota;
//     contadorNotas++;

//     continuar = prompt('Deseja inserir outra nota? (s/n): ').toLowerCase();
// } while (continuar === 's');

// const media = totalNotas / contadorNotas;
// console.log(`A média das notas é: ${media.toFixed(2)}`);


//>Para melhorar o raciocínio lógico, os alunos praticam jogos de adivinhação. Crie um programa que peça ao usuário para adivinhar um número entre 1 e 10. Se a resposta estiver errada, o programa deve pedir outra tentativa, continuando até o número correto ser adivinhado.<//

let n = require('prompt-sync')();

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
let chute;

console.log('Um número aleatório foi gerado. Tente adivinhar!');

do {
    chute = parseInt(n("Faça um chute: "));

    if (chute !== numeroAleatorio) {
        console.log(`Você errou o número. Tente novamente: `)
    } 
    
} while (chute !== numeroAleatorio)

    console.log(`Você acertou o ${numeroAleatorio}`)

//>No sistema de cadastro de alunos, é importante garantir que o nome e a idade sejam válidos. Crie um programa que peça o nome e a idade de um aluno, verificando se a idade está entre 16 e 100. Caso contrário, o programa deve pedir novamente até receber uma idade válida.<//

//>Os alunos estão criando um sistema de inventário para o laboratório de informática. Crie um programa que peça ao usuário o nome de um produto e a quantidade em estoque. O programa deve continuar pedindo até que o usuário decida parar.<//

//>Em um exercício de matemática, os alunos devem calcular o fatorial de um número. Crie um programa que peça ao usuário um número inteiro positivo e exiba seu fatorial. O programa deve perguntar se o usuário deseja calcular outro fatorial e repetir o processo até ele responder que não.<//

//>O Senai Morvan Figueiredo está desenvolvendo uma simulação de conta bancária para os alunos praticarem finanças. Crie um programa que permita ao usuário inserir depósitos e saques, mostrando o saldo atualizado após cada operação. O programa deve continuar até o usuário desejar parar.<//

//>Os alunos estão desenvolvendo um aplicativo de conversão de temperatura para fins educacionais. Crie um programa que converta temperaturas de Celsius para Fahrenheit e peça ao usuário se deseja realizar outra conversão.<//

