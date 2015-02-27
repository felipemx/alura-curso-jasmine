describe("Paciente", function() {
	
	var felipe;

	beforeEach(function(){
		felipe = new PacienteBuilder().gerar();
	});

	it("deve retornar o imc correto do paciente", function(){
		expect(felipe.imc()).toEqual(81 / (1.76 * 1.76));
	});

	it("deve retornar a quantidade de batimentos correta do paciente", function(){
		expect(felipe.batimentos()).toEqual(29 * 365 * 24 * 60 * 80);
	});
});