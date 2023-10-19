function Pesq(){
    const texto = document.querySelector("h1");
    const imagem = document.querySelector("img");
    const valor = document.querySelector('#valor').value;
    const biogra = document.querySelector("h3");
    
    if(valor==" " || valor=="os pilares da oo" || valor=="Pilares da OO"){
        texto.innerHTML = "Os Pilares da OO";
        imagem.setAttribute("src","img/pilares.jpg");
        imagem.setAttribute("width","500px");
        biogra.innerHTML = "Os pilares da programação orientada a objetos são: ENCAPSULAMENTO onde tem Isolar o estado interno de um objeto e controlar o acesso a ele; HERANÇA Permitir a criação de novas classes com base em classes existentes; POLIMORFISMO Capacidade de objetos de diferentes classes responderem ao mesmo método de maneira específica.";
    }
    
    else if(valor=="O que é Objeto" || valor == "o que e objeto" || valor == "O que e objeto"){
        texto.innerHTML = "O que é Objeto";
        imagem.setAttribute("src","img/ex2.jpg");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = "Um objeto é uma instância de uma classe. Ele representa uma entidade do mundo real e encapsula dados e comportamentos relacionados. Por exemplo, um objeto da classe Carro pode representar um carro específico, com atributos como marca, modelo e métodos como acelerar e frear.";
    }

    else if(valor=="O que é Classe" || valor == "o que e classe" || valor == "o que e classe"){
        texto.innerHTML = "O que é Classe";
        imagem.setAttribute("src","img/ex1.jpg");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = "Uma classe é um modelo ou plano para criar objetos. Ela define atributos (variáveis) e métodos (funções) que os objetos dessa classe terão. Existem três tipos de classes notáveis em Java";
    }
    
    else if(valor=="O que são atributos" || valor == "o que sao atributos" || valor == "O que sao atributos"){
        texto.innerHTML = "O que são atributos ";
        imagem.setAttribute("src","img/ex3.jpg");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = "Atributos são variáveis que representam características dos objetos de uma classe. Exemplo de atributos em uma classe Pessoa";
    }

    else if(valor=="O que são métodos" || valor == "o que são metodos" || valor == "O que sao metodos"){
        texto.innerHTML = "O que são métodos ";
        imagem.setAttribute("src","img/ex4.jpg");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = "Métodos são funções que representam o comportamento de um objeto. Por exemplo, acelerar() é um método na classe Carro. Métodos e modificadores de acesso, os modificadores de acesso (como public, private, protected) controlam a visibilidade dos membros de uma classe.";
    }

    else if(valor=="O que são pacotes" || valor == "o que sao pacotes" || valor == "O que sao pacotes"){
        texto.innerHTML = "O que são pacotes";
        imagem.setAttribute("src","img/ex5.jpg");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = "Pacotes são namespaces que organizam classes em Java. Eles ajudam a evitar conflitos de nomes e permitem uma estrutura hierárquica. Para criar e usar classes em pacotes";
    }

    else if(valor=="O que é uma interface em Java" || valor == "O que e uma interface em java" || valor == "O que e uma interface em Java"){
        texto.innerHTML = "O que é uma interface em Java";
        imagem.setAttribute("src","img/ex7.png");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = " é o nome dado para o modo como ocorre a “comunicação” entre duas partes distintas e que não podem se conectar diretamente. Um software ou sistema operacional, por exemplo, pode ser controlado através de uma pessoa usando um computador.";
    }

    else if(valor==" O que são enumerações" || valor == " o que sao enumeraçoes" || valor == "o que são enumerações"){
        texto.innerHTML = " O que são enumerações?";
        imagem.setAttribute("src","img/ex6.png");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = "Enumeração, ou simplesmente enum, é um tipo de dados especial que permite definir um conjunto de valores nomeados.";
    }

    else if(valor==" O que é Serialização de Objetos em Java" || valor == "o que e serializaçao de objetos em java" || valor == " o que é serialização de objetos em java?"){
        texto.innerHTML = "  O que é Serialização de Objetos em Java?";
        imagem.setAttribute("src","img/ex8.webp");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = ". A serialização possibilitará capturar o estado do objeto ou a estrutura de dados, e transformar em uma cadeia de bytes quando for necessário."
    }

    else if(valor=="o que e relacionamento de objetos" || valor == "o que e relacionamento de objetos" || valor == "o que é relacionamento de objetos"){
        texto.innerHTML = "O  que é relacionamento de objetos?";
        imagem.setAttribute("src","img/ex9.png");
        imagem.setAttribute("width","600px");
        biogra.innerHTML = "Os relacionamentos ligam as classes/objetos entre si criando relações lógicas entre estas entidades.";
    }

    else{
        texto.innerHTML = "Conteúdo não encontrado =(";
        imagem.setAttribute("src","img/x.webp");
        imagem.setAttribute("width","250px");
    }

    var modal = document.getElementById("myModal");


    var btn = document.getElementById("myBtn");


    var span = document.getElementsByClassName("close")[0];


    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
}
