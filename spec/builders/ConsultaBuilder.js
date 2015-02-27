function ConsultaBuilder() {
	var paciente = new PacienteBuilder().gerar();
	var procedimentos = [];
	var particular = false;
	var retorno = false;
	var data = new Date();

	var classBody = {

		comPaciente : function(valor){
			paciente = valor;
			return this;
		},
		comProcedimentos : function(valor){
			procedimentos = valor;
			return this;
		},
		comParticular : function(valor){
			particular = valor;
			return this;
		},
		comRetorno : function(valor){
			retorno = valor;
			return this;
		},
		comData : function(valor){
			data = valor;
			return this;
		},

		gerar : function(){
			return new Consulta(paciente, procedimentos, particular, retorno, data);
		}
	};

	return classBody;
}