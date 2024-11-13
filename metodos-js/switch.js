const usuario = {nome: 'johnny', idade: 17, time: 'sem querê'};
const boasVindas = 'Bem vindo'
const boasVindas2 = 'Muito bem vindo'
const boasVindas3 = 'Mal vindo'

switch (usuario.time) {
    case 'fluminense' :
        console.log(boasVindas3);
    break;
    case 'sem querê' :
        console.log(boasVindas2);
    break;
    case 'palmeiras' :
        console.log(boasVindas);
    break;
}

//>Os alunos do Senai Morvan Figueiredo estão desenvolvendo um sistema de cadastro de cursos. Crie um programa que peça ao usuário o nome do curso (por exemplo, "Desenvolvimento de Sistemas", "Logística", "Administração") e use um switch-case para exibir uma mensagem sobre o curso selecionado, incluindo a duração e a carga horária.<//

const aluno = {nome: 'Galileu', curso: 'Logística'}

switch (aluno.curso) {
    case 'Logística' :
        console.log(`O curso ${aluno.curso} tem como duração 12 meses e carga horaria de 5 horas`);
        break;
        case 'Dev' :
            console.log(`O curso ${aluno.curso} tem como duração 24 meses e carga horaria de 9 horas`);
    break;
    case 'Mecânica' :
        console.log(`O curso ${aluno.curso} tem como duração 36 meses e carga horaria de 6 horas`)
        break;
    }
    
 //>Durante as aulas de programação, os alunos estão criando uma calculadora. Crie um programa que peça ao usuário dois números e uma operação (soma, subtração, multiplicação ou divisão). Use um switch-case para realizar a operação correta e exibir o resultado.<//
    
function calculadora (a, b, operação) {
    switch (operação) {
        case 'soma' :
                console.log(a + b)
            break;
            case 'subtração' :
                console.log(a - b)
            break;
            case 'divisão' :
                console.log(a / b)
            break;
            case 'multiplicação' :
                console.log(a * b)
            break;
            }
        }

            calculadora(12, 3, 'divisão')
            
//>No cadastro da escola, os alunos são classificados por faixa etária. Crie um programa que peça a idade do usuário e, usando switch-case, classifique-o como "Infantil", "Adolescente", "Adulto" ou "Idoso".<//

function aluno2 (idade) {
    switch (true) {
        case (idade >= 5 && idade < 12) :
            console.log(`Sua idade é ${idade} você esta classificado como infantil`)
            break;
            case (idade >= 12 && idade < 18) :
                console.log(`Sua idade é ${idade} você esta classificado como adolecente`)
                break;
                case (idade >= 18 && idade < 65) :
                    console.log(`Sua idade é ${idade} você esta classificado como adulto`)
                    break;
                    case (idade >= 65) :
                        console.log(`Sua idade é ${idade} você esta classificado como idoso`)
        break;
    }
}

aluno2(65)

//>Os alunos precisam de um sistema para classificar suas notas. Crie um programa que peça uma nota de 0 a 10 e, com switch-case, classifique-a como "Insuficiente", "Regular", "Bom", ou "Excelente".<//

function aluno3 (media) {
    switch (true) {
        case (media > 9) :
            console.log(`Sua nota é ${media} você esta classificado como excelente`)
            break;
            case (media >= 7 && media < 9) :
                console.log(`Sua nota é ${media} você esta classificado como bom`)
            break;
            case (media >= 4 && media < 7) :
                console.log(`Sua nota é ${media} você esta classificado como regular`)
            break;
            case (media < 4) :
                console.log(`Sua nota é ${media} você esta classificado como insuficiente`)
            break;
        default :
        console.log(`Tu não fizestes as provas bichinho!`)
    }
}
                
aluno3(4)
                
//>Em um sistema de agendamento, os alunos precisam lidar com os dias da semana. Crie um programa que peça ao usuário um número de 1 a 7 e use switch-case para exibir o dia correspondente (1 para Domingo, 2 para Segunda, etc.).<//

function semana (numeroSemana) {
    switch (true) {
        case numeroSemana === 1 :
            console.log(`Domingo`)
        break;
        case numeroSemana === 2 :
            console.log(`Segunda`)
        break;
        case numeroSemana === 3 :
            console.log(`Terça`)
        break;
        case numeroSemana === 4 :
            console.log(`Quarta`)
        break;
        case numeroSemana === 5 :
            console.log(`Quinta`)
        break;
        case numeroSemana === 6 :
            console.log(`Sexta`)
        break;
        case numeroSemana === 7 :
            console.log(`Sabado`)
        break;
        default :
        console.log(`Esse dia não existe`)
    }
}

semana(7)

//>Durante o ano letivo, diversos eventos acontecem no Senai. Crie um programa que peça ao usuário o nome de um evento (por exemplo, "Festa Junina", "Semana de Tecnologia", "Feira de Profissões") e exiba uma mensagem sobre o evento usando switch-case.<//

function evento (nomeEvento) {
    switch (nomeEvento) {
        case "Festa Junina" :
            console.log(`O evento é realizado um julho`)
            break;
        case "Semana de Tecnologia" :
            console.log(`O evento conta sobre seguimentos tech`)
            break;
        case "Feira de Profissões" :
            console.log(`Esse evento trás diferentes profissões como base pro futuro`)
            break;
    }
}

evento('Semana de Tecnologia')

//>Os alunos estão desenvolvendo um calendário digital. Crie um programa que peça um número de 1 a 12 e use switch-case para exibir o mês correspondente (1 para Janeiro, 2 para Fevereiro, etc.).<//

let mes = {mes:1}
switch (true) {
        case mes.mes === 1:
        console.log("esse dia é janeiro")
        break;
        case mes.mes === 2:
        console.log("esse dia é fevereiro")
        break;
        case mes.mes === 3:
        console.log("esse dia é março")
        break;
        case mes.mes === 4:
        console.log("esse dia é abril")
        break;
        case mes.mes === 5:
        console.log("esse dia é maio")
        break;
        case mes.mes === 6:
        console.log("esse dia é junho")
        break;
        case mes.mes === 7:
        console.log("esse dia é julho")
        break
        case mes.mes === 8:
        console.log("esse dia é agosto")
        break;
        case mes.mes === 9:
        console.log("esse dia é setembro")
        break;
        case mes.mes === 10:
        console.log("esse dia é outubro")
        break;
        case mes.mes === 11:
        console.log("esse dia é novembro")
        break;
        case mes.mes === 12:
        console.log("esse dia é dezembro")
        break;
}

//>Na aula de matemática, os alunos aprendem sobre conversão de unidades. Crie um programa que peça uma unidade (cm, m, km) e um valor. Use switch-case para converter esse valor para metros.<//

function converte (valor, unidade) {
    switch (unidade) {
        case 'cm' :
            console.log(`${valor} em m é ${valor / 1000} e em km é ${valor / 1000000}` )
            break;
        case 'm' :
            console.log(`${valor} em cm é ${valor * 1000} e em km é ${valor / 1000}`)
            break;
        case 'km' :
            console.log(`${valor} em cm é ${valor /1000000} e em m é ${valor / 1000}`)
            break;
        default:
            console.log(`essa metragem não está entre cm, m e km`)
    }
}

converte(1000, 'm')

//>Os alunos precisam de um sistema que traduza conceitos em notas. Crie um programa que peça um conceito (A, B, C, D ou F) e use switch-case para exibir a faixa de notas correspondente.<//

let Notinha = { ValorAvaliação: 9 };

switch (true) {
    case (Notinha.ValorAvaliação === 10 || Notinha.ValorAvaliação === 9):
        console.log('A nota esta categorizada como: A');
        break;
    case (Notinha.ValorAvaliação === 8 ||  Notinha.ValorAvaliação === 7):
        console.log('A nota esta categorizada como: B');
        break;
    case (Notinha.ValorAvaliação === 6 || Notinha.ValorAvaliação === 5):
        console.log('A nota esta categorizada como: C');
        break;
    case (Notinha.ValorAvaliação === 4 || Notinha.ValorAvaliação === 3):
        console.log('A nota esta categorizada como: D');
        break;
    case (Notinha.ValorAvaliação === 2 || Notinha.ValorAvaliação === 1):
        console.log('A nota esta categorizada como: F');
        break;
    default:
        console.log('A nota não pôde ser analisada.');
}

//>Os alunos estão desenvolvendo um conversor de moedas. Crie um programa que peça ao usuário uma moeda (USD, EUR, GBP) e um valor em reais. Use switch-case para converter o valor para a moeda selecionada.<//

function converteMoeda (valor, unidade) {
    switch (unidade) {
        case 'USD' :
            console.log(`${valor} em USD é ${valor / 5.71}` )
            break;
        case 'EUR' :
            console.log(`${valor} em EUR é ${valor * 6.12}`)
            break;
        case 'GBP' :
            console.log(`${valor} em GBP é ${valor / 7.97}`)
            break;
        default:
            console.log(`essa moeda não está entre (USD, EUR, GBP)`)
    }
}

converteMoeda(1000, 'USD')

//>No sistema de cadastro de cursos, é necessário especificar o tipo de curso (Técnico, Superior, Extensão). Crie um programa que peça o tipo e use switch-case para exibir a descrição correspondente.<//

let cur = {curs:"tecnico",};

switch(cur.curs){ 
case  "tecnico" : 
    console.log("seu curso é tecnico")
break;
 case 
    "superio" : 
    console.log("seu curso é superior")
    break;
case  "extensão":
    console.log("seu curso é extensão");
break;
default:
    console.log("curso não encontrado")
}

//>Os alunos precisam classificar tarefas por prioridade. Crie um programa que peça uma prioridade (1 para Alta, 2 para Média, 3 para Baixa) e use switch-case para exibir a descrição da prioridade.<//

let dificuldade = {not:1}
switch(true) {
        case dificuldade.not === 1:
        console.log("essa atividade tem prioridade alta")
        break;
        case dificuldade.not === 2:
        console.log("essa atividade tem prioridade media")
        break;
        case dificuldade.not === 3:
        console.log("essa atividade tem prioridade baixa")
        break;
}

//>Na aula de biologia, os alunos aprendem sobre o Índice de Massa Corporal (IMC). Crie um programa que calcule o IMC com base no peso e altura e use switch-case para exibir a classificação (Baixo peso, Peso normal, Sobrepeso, Obesidade).<//

function calcularIMC(Peso, Altura) {
    let IMC = Peso / (Altura * Altura);
    
        switch  (true) {
            case (IMC < 18.5):
        console.log("Classificação: Abaixo do peso");
            break;
            case (IMC >= 18.5 && IMC <= 24.9):
        console.log("Classificação: Peso normal");
            break;
            case  (IMC >= 25 && IMC <= 29.9):
        console.log("Classificação: Sobrepeso");
            break;
            case (IMC >= 30):
        console.log("Classificação: Obesidade");
        }
    }
    calcularIMC(80, 1.80);

//>No cadastro de novos alunos, é preciso identificar o tipo de documento apresentado (RG, CPF, Passaporte). Crie um programa que peça o tipo de documento e use switch-case para exibir uma mensagem sobre o documento selecionado.<//

let alu = {documento:"RG",};

switch(alu.documento){ 
case  "RG" : 
    console.log("vc precisa de um RG")
break;
 case 
    "CPF" : 
    console.log("vc precisa de um CPF")
    break;
case  "Passaporte":
    console.log("vc precisa de um Passaporte");
break;

}

//>Os alunos estão criando um sistema para calcular a tarifa do transporte público. Crie um programa que peça ao usuário o tipo de passageiro (Estudante, Trabalhador, Idoso) e use switch-case para exibir a tarifa correspondente.<//

let passa = {va:"estudante",};

switch(passa.va){ 
case  "estudantes" : 
    console.log("vc pagara apenas R$2,50")
break;
 case 
    "trabalhador" : 
    console.log("a empresa pagara por vc")
    break;
case  "idosa":
    console.log("o estado paga sua passagem");
break;
default:
    console.log("vc pagara normal R$5,00 ")

}

//>Os alunos precisam medir o desempenho dos algoritmos desenvolvidos. Crie um programa que peça um tempo de execução em segundos e use switch-case para classificá-lo como "Rápido", "Moderado", "Lento" ou "Muito Lento".<//

function tempoDemora (tempo) {
    switch (true) {
        case tempo < 0.1 :
            console.log(`O tempo de desempenho é rapido`)
            break;
        case tempo > 0.1 && tempo < 1 :
            console.log(`O tempo de desempenho é moderado`)
            break;
        case tempo > 1 && tempo < 3 :
            console.log(`O tempo de desempenho é lento`)
            break;
        case tempo > 3 :
            console.log(`O tempo de desempenho é muito lento`)
    }
}

tempoDemora(0.05)

//>No Senai, é importante garantir a acessibilidade dos alunos. Crie um programa que peça o tipo de deficiência do aluno (Visual, Auditiva, Motora) e use switch-case para exibir as opções de assistência disponíveis para cada tipo.<//

let deficiencia = {def:"visual",};

switch(alu.documento){ 
case  "visual" : 
    console.log("vc tem deficiencia visual")
break;
 case 
    "auditiva" : 
    console.log("vc tem deficiencia auditiva")
    break;
case  "motora":
    console.log("vc tem deficiencia motora");
break;

};

//>Crie um programa que peça ao usuário uma nota (por exemplo, 90 a 100 para "A", 80 a 89 para "B", etc.) e use switch-case para converter a nota numérica para o conceito correspondente.<//

function nota0a100 (notinha) {
    switch (true) {
        case (notinha === 100 && notinha >= 90):
            console.log('A nota esta categorizada como: A');
            break;
        case (notinha <= 80 &&  notinha >= 70):
            console.log('A nota esta categorizada como: B');
            break;
        case (notinha <= 60 && notinha >= 50):
            console.log('A nota esta categorizada como: C');
            break;
        case (notinha <= 40 && notinha >= 30):
            console.log('A nota esta categorizada como: D');
            break;
        case (notinha <= 20 && notinha >= 10):
            console.log('A nota esta categorizada como: F');
            break;
        default:
            console.log('A nota não pôde ser analisada.');
    }
}

nota0a100(70)

//>Para auxiliar nas atividades externas da escola, os alunos estão criando um simulador de previsão de tempo. Crie um programa que peça uma condição climática (por exemplo, "Sol", "Chuva", "Nublado") e use switch-case para exibir uma mensagem sobre como se preparar para o clima informado.<//