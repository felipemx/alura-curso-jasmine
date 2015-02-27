function NumerosRomanos() {
	
	var classBody = {
		paraDecimal : function(valor) {
			
			var tokensRomanos = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"];
			var equivalencias = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
			var caracteresRestantes = valor;
			var valorFinal = 0;

			while(caracteresRestantes.length > 0){
				for (var i = tokensRomanos.length - 1; i >= 0; i--) {
					if(caracteresRestantes.indexOf(tokensRomanos[i]) == 0){
						valorFinal += equivalencias[i];
						caracteresRestantes = caracteresRestantes.slice(tokensRomanos[i].length);
						break;
					}
					
				};
			}

			return valorFinal;
		}
	};

	return classBody;
}