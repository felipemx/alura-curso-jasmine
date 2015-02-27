function Agendamento() {
	
	var classBody = {
		marcarRetorno : function(consulta) {
			var dataConsulta = consulta.getData();
			
			var vinteDiasMilissegundos = (1000 * 60 * 60 * 24 * 20);
			var umDiaMilissegundo = (1000 * 60 * 60 * 24);

			var retorno = dataConsulta.getTime() + vinteDiasMilissegundos;
			var novaData = new Date(retorno);

			while(novaData.getDay() == 0 || novaData.getDay() == 6){
				novaData = new Date(novaData.getTime() + umDiaMilissegundo);
			}

			return novaData;
		}
	};

	return classBody;
}