/*
funcionarios
   nome,
   sobrenome,
   email,
   cpf,
   registro
clientes
   nome,
   sobrenome,
   email,
   cpf,
   renda
funções
   descrição
   salário
*/

class Funcao{
    constructor(descricao, salario){
        this._descricao = descricao;
        this._salario = salario;
    }

    get descricao (){
        return this._descricao;
    }

    set descricao (descricao){
        this._descricao = descricao;
    }

    get salario (){
        return this._salario;
    }

    set salario (salario){
        this._salario = salario;
    }
}

class Pessoa {
    constructor (nome, sobrenome, email, cpf){
        this._nome = nome;
        this._sobrenome = sobrenome;
        this._email = email;
        this._cpf = cpf;
    }

    get nome (){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome (){
        return this.sobrenome;
    }

    set sobrenome (sobrenome){
        this._sobrenome = sobrenome;
    }

    get email (){
        return this._email = email;
    }

    set email (email){
        this._email = email;
    }

    get cpf (){
        return this._cpf;
    }

    set cpf (cpf){
        this._cpf = cpf;
    }

    // Métodos extras

    get nome_completo (){
        return this._nome + ' ' + this._sobrenome;
    }

    set nome_completo(nome_completo){
        nome_completo = nome_completo.split (' ');

        this.nome = nome_completo.shift();
        this._sobrenome = nome_completo.join (' ');
    }
}

class Funcionario extends Pessoa{
    constructor (nome, sobrenome, email, cpf, funcao, registro){
        super (nome, sobrenome, email, cpf);
        this._funcao = funcao;
        this._registro = registro;
    }

    get funcao (){
        return this._funcao;
    }

    set funcao (funcao){
        this._funcao = funcao;
    }

    get registro (){
        return this._registro;
    }

    set registro (registro){
        this._registro = registro;
    }
}

class Cliente extends Pessoa {
    constructor (nome, sobrenome, email, cpf, renda){
        super (nome, sobrenome, email, cpf);
        this._renda = renda;
    }

    get renda (){
        return this._renda;
    }

    set renda (renda){
        this._renda = renda;
    }
}

const c1 = new Cliente ('Felicity', 'Jones', 'felicity@gmail.com', '123.456.789-00', 6789.44);
const c2 = new Cliente ('Roger', 'Guedes', 'Rguedes@gmail.com', '952.402.852-11', 8909.22);

console.log (c1);
console.log (c2);

console.log (c1.nome_completo);
console.log (c2.nome_completo);

c1.nome_completo = 'Xuxa Meneguel';

console.log (c1);