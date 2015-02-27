describe("Agendamento", function() {
	
	var consulta;
	var paciente;

	beforeEach(function() {
		paciente = new PacienteBuilder().gerar();
		consulta = new ConsultaBuilder().comPaciente(paciente).gerar();
	});

	it("deve agendar para 20 dias à frente", function() {
		var agendamento = new Agendamento();
		consulta = new ConsultaBuilder().comPaciente(paciente).comData(new Date(2015, 0, 2)).gerar();
		var novaData = agendamento.marcarRetorno(consulta);

		expect(novaData.toString()).toEqual((new Date(2015, 0, 22)).toString());
	});

	it("deve agendar para 20 dias à frente, reajustando a data se for final de semana", function() {
		var agendamento = new Agendamento();
		consulta = new ConsultaBuilder().comPaciente(paciente).comData(new Date(2015, 0, 5)).gerar();
		var novaData = agendamento.marcarRetorno(consulta);

		expect(novaData.toString()).toEqual((new Date(2015, 0, 26)).toString());
	});

});