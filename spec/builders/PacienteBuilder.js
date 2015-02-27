function PacienteBuilder(){
	var nome = "Felipe";
	var idade = 29;
	var peso = 81;
	var altura = 1.76;

	var classBody = {
		comIdade : function(valor) {
			idade = valor;
			return this;
		},

		comPeso : function(valor) {
			peso = valor;
			return this;
		},

		gerar : function(){
			return new Paciente(nome, idade, peso, altura);
		}
	};

	return classBody;
}