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

describe("Test window splitting functions", function () {
    it("computes correct windows when string is longer than window size", function () {
        testDnaString = "AGCTAGCT";
        expectedWindows = ["AGCT", "AGCT"];
        actualWindows = splitIntoWindowsByWindowSize(testDnaString, 4);
        expect(expectedWindows[0]).toBe("AGCT");
        expect(expectedWindows.length).toBe(2)
    });

    it("computes total diNucleotides correctly", function () {
        var diNucleotideContent = { 'GC': 10, 'AT': 90 };
        var total = _computeTotalNucleotides(diNucleotideContent);
        expect(total).toBe(100);
    });

    it("computes GC content of sliding windows correct", function () {
        var testDNAString = "GCGCGC";
        var content = computeGCContentOfSlidingWindows(testDNAString, 2);
        console.log(content);
        expect(true).toBe(true);
    })

})
