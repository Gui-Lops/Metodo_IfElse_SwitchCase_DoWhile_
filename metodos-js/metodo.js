//<Em um sistema de gerenciamento de cadastro, é comum padronizar nomes para garantir consistência. Receba um nome completo e exiba-o em maiúsculas e minúsculas, ajudando a identificar se a entrada do usuário está formatada corretamente.>//

function Maiuscula(str) {
    console.log( str.toUpperCase())
    console.log(str.toLowerCase())
}

Maiuscula(`Nicolas`);

//<Imagine que você está criando uma pesquisa de conteúdo em uma plataforma. Verifique se uma frase contém a letra "a" e, caso esteja, mostre a posição da primeira ocorrência, facilitando a busca de termos específicos.>//

let nomes = 'Manoel';

console.log(nomes.includes('a'));
console.log(nomes.indexOf('a'));

//<Ao exibir um resumo de uma notícia, você precisa cortar o texto de forma dinâmica. Receba um texto e um intervalo para o corte (índice inicial e final), e exiba somente o trecho selecionado, simulando a exibição de resumos.>//

function txt(texto, índiceInicial, índiceFinal) {
    return texto.slice(índiceInicial, índiceFinal)
}

const string = `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

const resumo = txt(string, 0, 90);

console.log(resumo);

//<Em um sistema de mensagens, duas mensagens podem ser unidas para melhorar a visualização. Receba duas frases e exiba o resultado da junção, simulando a concatenação de mensagens do mesmo usuário.>//

function juntaMsg(msg1, msg2) {
    console.log(msg1 + msg2)
}

juntaMsg('Oi, tudo bem?', ' Como vc está?');

//<Num sistema de edição de texto, um usuário quer substituir uma palavra específica. Receba uma frase e troque todas as ocorrências de uma palavra antiga por uma nova, ajudando a simular um recurso de "substituir palavra".>//

let frase = `Jefferson uma vez conheceu outro cara`;

console.log(frase.replace('Jefferson', 'Augustinho'))