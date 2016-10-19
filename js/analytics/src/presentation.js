/*JS code for building interactive genomic charts*/


/* Mock DNA data for testing */
dnaString = "TGGCCAGCCTCATCACCCCAACATCTCCCCACCTCCATTCTCCAACCACAGGGCCCTTGTCTCCTCTGTCCTTTCCCCTCCCCGAGCCAAGCCTCCTCCCTCCTCCACCTCCTCCACCTAATA";
createCircosVisualization(dnaString, 5, true);
createNucleotideBarGraphVisualization(dnaString);

function createNucleotideBarGraphVisualization(dnaString) {
    /*Create a visualization based on nucleotide distribution*/
    var nucleotideData = new Array(4);
    var nucleotideDataDict = computeCodonContent(dnaString);
    nucleotideData[0] = nucleotideDataDict['A'];
    nucleotideData[1] = nucleotideDataDict['C'];
    nucleotideData[2] = nucleotideDataDict['T'];
    nucleotideData[3] = nucleotideDataDict['G'];
    console.log(nucleotideData);
    var barWidth = 20;
    var chartHeight = 420;

    var y = d3.scale.linear()
    .range([chartHeight, 0]);

    var svgChart = d3.select('#barChart')
      .attr("height", chartHeight)
      .attr("width", barWidth * nucleotideData.length)

    var bars = svgChart.selectAll("g")
                       .data(nucleotideData)
                       .enter()
                       .append("g")
                       .attr("transform", function (d, i) { "translate(" + i * barWidth + ",0)"; });


    bars.append("rect")
    .attr("length", function(d) { return chartHeight - y(d.value); })
    .attr("width", barWidth - 1);      
}





function createCircosVisualization(dnaString, windowSize) {
    
    /*create the circos object */
    var circos = new circosJS({
        container: '#circosChart',
        width: 420,
        height: 420,
    });
    var circosLayoutData = generateCircosLayout(dnaString, windowSize);
    var circosHeatmapData = generateCircosHeatmap(dnaString, windowSize);
    circos
  .layout(
      {
          innerRadius: 160,
          outerRadius: 200,
          colorPalette: "Blues",
          ticks: { display: false },
          labels: {
              position: 'center',
              display: true,
              size: 14,
              color: '#000',
              radialOffset: 15,
          }
      },
      circosLayoutData)
    .heatmap('GC content', {
        innerRadius: 115,
        outerRadius: 155,
        logScale: false,
        colorPalette: 'YlOrRd',
    }, circosHeatmapData).render();


}

/* mock up layout data for testing*/
var layout_data = [
    { "len": 31, "color": "#8dd3c7", "label": "Gene 1", "id": "gene1" },
    { "len": 28, "color": "#ffffb3", "label": "Gene 2", "id": "gene2" }];

