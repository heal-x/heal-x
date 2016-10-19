/*JS code for building interactive genomic charts*/


/* Mock DNA data for testing */
dnaString = "TGGCCAGCCTCATCACCCCAACATCTCCCCACCTCCATTCTCCAACCACAGGGCCCTTGTCTCCTCTGTCCTTTCCCCTCCCCGAGCCAAGCCTCCTCCCTCCTCCACCTCCTCCACCTAATA";
//createCircosVisualization(dnaString, 5, true);
//createNucleotideBarGraphVisualization(dnaString);

function createNucleotideBarGraphVisualization(dnaString) {
    /*Create a visualization based on nucleotide distribution*/
    var nucleotideData = new Array(4);
    var nucleotideDataDict = computeCodonContent(dnaString);

    nucleotideData[0] = nucleotideDataDict['A'];
    nucleotideData[1] = nucleotideDataDict['C'];
    nucleotideData[2] = nucleotideDataDict['T'];
    nucleotideData[3] = nucleotideDataDict['G'];

    var nucleotideDataLabels = ['A', 'C', 'T', 'G'];
    var barHeight = 20;
    var chartWidth = 420;



    var x = d3.scale.linear()
    .domain([0, d3.max(nucleotideData)])
    .range([0, chartWidth]);
    console.log(x(20));

    var svgChart = d3.select('#barChart')
      .attr("height", barHeight * nucleotideData.length)
      .attr("width", chartWidth);

    var bars = svgChart.selectAll("g")
                       .data(nucleotideData)
                       .enter()
                       .append("g")
                       .attr("transform", function (d, i) { return "translate(0," + i * barHeight + ")"; });


    bars.append("rect")
    .attr("width", x)
    .attr("height", barHeight - 1);


    bars.append("text")
    .attr("x", function (d) { return x(d) - 50; })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d,i) { return nucleotideDataLabels[i]; });
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

