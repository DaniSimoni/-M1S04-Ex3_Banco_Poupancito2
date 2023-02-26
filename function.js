/* Agora o banco quer criar uma nova classe chamada ContaPoupança. A conta poupança tem todos os métodos e atributos da classe Conta (herança). Porém, essa nova classe deve ter um novo método chamado atualizaJuros. Esse método deve pegar o valor do saldo e adicionar um ganho baseado em um índice de índice de 0.7% todas as vezes que for chamado. */


class Conta {
    constructor(saldo, senha) { 
        this.saldo = saldo;
        this.senha = senha;
    } 

    deposito(total) { 
        if(this.senha === 1234){
          this.saldo += total;
          console.log(`Depósito de R$ ${total} realizado com sucesso.`)
        }else {
          console.log('Senha Incorreta');
        }
    }
    
     retirada(total) {
        if(this.senha === 1234){
          this.saldo -= total;
          console.log(`Retirada de R$ ${total} realizado com sucesso.`)
        }else {
          console.log('Senha Incorreta');
    }
  };
};
    
class Poupança extends Conta {
    constructor(saldo, senha) {
      super(saldo, senha);
 
    }
    atualizaJuros(total){

      if(this.senha === 1234){
  
      }else {
          console.log('Senha Incorreta');
     
    }
  };
};

    const cadastro = new Conta (0 , 1234);
    cadastro.deposito(20);
    cadastro.deposito(100);
    cadastro.deposito(30);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.retirada(20);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.retirada(30);
    console.log(`Saldo atual: R$ ${cadastro.saldo}`);
    cadastro.atualizaJuros;
    

    const newPoupança = new Poupança (cadastro.saldo * 100.7 / 100 , 1234);
    newPoupança.atualizaJuros();
    console.log(`O saldo com juros atualizado é de R$ ${newPoupança.saldo}`);

