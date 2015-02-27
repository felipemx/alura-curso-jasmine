describe("MaiorEMenorSpec", function(){
	var teste = new MaiorEMenor();

	it("deve retornar o maior e menor em ordem não seqüencial", function(){
		teste.encontra([13,5,4,8,11]);

		expect(teste.pegaMenor()).toEqual(4);
		expect(teste.pegaMaior()).toEqual(13);
	});

	it("deve retornar o maior e menor em ordem decrescente", function(){
		teste.encontra([12, 7, 10, 3]);

		expect(teste.pegaMenor()).toEqual(3);
		expect(teste.pegaMaior()).toEqual(12);
	});

	it("deve retornar o maior e menor em ordem crescente", function(){
		teste.encontra([3, 7, 10, 12]);

		expect(teste.pegaMenor()).toEqual(3);
		expect(teste.pegaMaior()).toEqual(12);
	});

	it("deve retornar o único item existente na lista", function(){
		teste.encontra([8]);

		expect(teste.pegaMenor()).toEqual(8);
		expect(teste.pegaMaior()).toEqual(8);
	});
});