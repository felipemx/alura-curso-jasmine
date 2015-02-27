var MaiorEMenor = function(){
	var menor;
	var maior;

	var classBody = {
		encontra : function(numeros){
			menor = Number.MAX_VALUE;
			maior = Number.MIN_VALUE;	

			numeros.forEach(function(numero){
				if(numero > maior){
					maior = numero;
				}
				if(numero < menor){
					menor = numero;
				}
			});
		},
		pegaMenor : function(){return menor},
		pegaMaior : function(){return maior}		
	};

	return classBody;
};