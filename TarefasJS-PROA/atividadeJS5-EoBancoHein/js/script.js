		
        var saldo = 10000.00; //Float
        var nome = prompt('Informe seu nome');
        alert('Olá, '+nome+'. É um prazer vê-lo(a) por aqui!')
		var senha = 0;
		var extrato = [ ];

		function inicio() {
            
			var escolha = parseInt(prompt('Selecione uma opção 1.) Saldo 2.) Extrato 3.) Saque 4.) Deposito 5.) Transferência 6.)Sair'));
			
			senha = parseInt(prompt("Digite sua senha"));

			switch(escolha){
				case 1 : ver_saldo();	
				break;

				case 2 : ver_extrato();
				break;

				case 3 : fazer_saque();
				break;

				case 4 : fazer_deposito();
				break;

				case 5 : fazer_transferencia();
				break;

				case 6: sair();
				break;

				default:
					erro();
			}

			/* if (escolha === 1 && senha === 3589) {
				ver_saldo();	

			} else if (escolha === 2){
				ver_extrato();

			} else if (escolha === 3){
				fazer_saque();

			} else if (escolha === 4){
				fazer_deposito();

			} else if (escolha === 5){
				fazer_transferencia();

			} else if (escolha === 6) {
				sair();

			} else {
				erro();
			} */
		}		

		function ver_saldo() {
			if(senha === 3589){
				alert('Seu saldo atualizado é: ' + saldo);
				inicio();
			} else{
				alert("A senha informada está incorreta!")
				inicio();
			}
		}

		function ver_extrato(){
			if(senha === 3589 ){
				alert("Extrato  extrato1: Loja do Zé-Café Pilão  R$15,00.  extrato2:  Loja do chico-Chocolate R$ 05,99");
			}
		}

		function fazer_saque() {
			var saque = 0;
			saque = parseFloat(prompt('Qual o valor para saque?'));
			if(senha === 3589 && saque != '' && saque > 0 && saque <= saldo){
					(saldo -= saque);
					alert("Você sacou R$ "+saque+" reais");
					ver_saldo();
                	inicio();
			}
			/* console.log(saque); */
			else if(senha != 3589){
				alert("A senha informada está incorreta! Informe a senha correta para efetuar o saque.");
				inicio();
			}

			else if (senha === 3589 && isNaN(saque) || saque === '') {
				alert('Por favor, informe o valor a ser sacado:');
				fazer_saque();

			} else if (senha === 3589 && saque > saldo) {
                alert('Operação não autorizada! Você não tem esse saldo disponível para saque.')
                ver_saldo();
                inicio();

			} else if (senha === 3589 && saque <= 0){
                alert('Operação não autorizada! Você não pode sacar R$ 0,00 ou menos');
				inicio();
				
            }
		}

		function fazer_deposito() {
			var deposito = parseFloat(prompt('Qual o valor para depósito?'));
			// Not a Number -> Isso é um não-número?
			if (isNaN(deposito) || deposito === '') {
				alert('Por favor, informe um número!');
				fazer_deposito();

			} else if(deposito <= 0){
				alert('Operação não autorizada! Você não pode depositar R$ 0,00 ou menos');
				inicio();

			} else {
				saldo = saldo + deposito;
                //saldo += deposito; 
				ver_saldo();
			}
		}
 
		function fazer_transferencia(){
			
			var nConta = parseInt(prompt("Informe o número da sua conta: "));
			var valorTransferencia = parseFloat(prompt("Informe o valor a ser tranferido: "));
			/* obs: no if exigir que nConta seja um numero */
			if(senha === 3589 && valorTransferencia != '' && valorTransferencia > 0 && valorTransferencia <= saldo 
			&& nConta != ''){
				saldo = saldo - valorTransferencia;
				alert("O valor tranferido foi R$ "+valorTransferencia+".");
				ver_saldo();
				inicio();

			} else if(senha != 3589){
				alert("A senha informada está incorreta! Informe a senha correta para efetuar a transferencia.");
				inicio();

			} else if (senha === 3589 && isNaN(nConta) || nConta === '') {
				alert('Por favor, informe o numero da conta: ');
				fazer_transferencia();

			} else if (senha === 3589 && isNaN(valorTransferencia) || valorTransferencia === '') {
				alert('Por favor, informe o valor a ser tranferido:');
				fazer_transferencia();

			} else if (senha === 3589 && valorTransferencia > saldo) {
                alert('Operação não autorizada! Você não tem esse saldo disponível para tranferir.')
                ver_saldo();
                inicio();

			} else if (senha === 3589 && valorTransferencia <= 0){
                alert('Operação não autorizada! Você não pode transferir R$ 0,00 ou menos');
				inicio();
            }
		}
		
		function sair() {
			var confirma = confirm('Você deseja sair?');
			if (confirma) {
				alert(nome+", foi um prazer tê-lo(a) por aqui!")
				window.close();

			} else {  
				inicio();
			}
		}

		function erro() {
			alert('Por favor, informe um número entre 1 e 6 e digite sua senha corretamente');
			inicio();
		}

		inicio();

    
