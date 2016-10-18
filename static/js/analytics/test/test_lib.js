describe("Test DNA analytics", function() {
    it("computes correct codon distributions", function() {
        testDnaString="ACGT";
        expectedCodonContent = { "A":1, "T":1, "G":1, "C":1};
        actualCodonContent = computeCodonContent(testDnaString)
        expect(actualCodonContent["A"]).toBe(1);
        expect(actualCodonContent["T"]).toBe(1);
        expect(actualCodonContent["G"]).toBe(1);
        expect(actualCodonContent["C"]).toBe(1);
        
    });
});
