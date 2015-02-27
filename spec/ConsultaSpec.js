describe("Consulta", function(){

	var felipe;
	var dataConsulta; 

	beforeEach(function(){
		felipe = new PacienteBuilder().comPeso(74).gerar();
		dataConsulta = new Date(2015, 1, 2);
	});

	describe("Testando consultas comuns", function() {
		it("deve retornar 0 para consulta do tipo retorno", function(){
			var consulta = new Consulta(felipe, [], false, true, dataConsulta);
			expect(consulta.preco()).toEqual(0);
		});

		it("deve retornar a soma de 25 para cada consulta comum", function(){
			var consulta = new Consulta(felipe, ["cons1", "cons2"], false, false, dataConsulta);
			expect(consulta.preco()).toEqual(50);
		});
	});

	describe("Testando consultas particulares", function() {
		it("deve retornar o dobro a soma de 25 para cada consulta comum, por ser particular", function(){
			var consulta = new Consulta(felipe, ["cons1", "cons2"], true, false, dataConsulta);
			expect(consulta.preco()).toEqual(100);
		});

		it("deve retornar o dobro do valor do raio-x, por ser particular", function(){
			var consulta = new Consulta(felipe, ["raio-x"], true, false, dataConsulta);
			expect(consulta.preco()).toEqual(110);
		});
	});
});