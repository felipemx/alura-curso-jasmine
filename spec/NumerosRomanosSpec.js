describe("NumerosRomanos", function() {
	
	it("deve transformar um romano em numeral", function() {
		var romano = "MCMXLIV";
		var conversor = new NumerosRomanos();

		expect(conversor.paraDecimal(romano)).toEqual(1944);
	});

});