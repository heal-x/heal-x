﻿/*JS code for building interactive genomic charts*/


/* Mock DNA data for testing */

dnaString = "TGGCCAGCCTCATCACCCCAACATCTCCCCACCTCCATTCTCCAACCACAGGGCCCTTGTCTCCTCTGTCCTTTCCCCTCCCCGAGCCAAGCCTCCTCCCTCCTCCACCTCCTCCACCTAATA";
circosLayoutData = generateCircosLayout(dnaString, 50);
console.log("CIRCOS layout", circosLayoutData);
circosHeatmapData = generateCircosHeatmap(dnaString, 50);
console.log(circosHeatmapData);

/*create the circos object */
var circos = new circosJS({
    container: '#circosChart',
    width: 420,
    height: 420,
});

/* mock up layout data for testing*/
var layout_data = [
    { "len": 31, "color": "#8dd3c7", "label": "Gene 1", "id": "gene1" },
    { "len": 28, "color": "#ffffb3", "label": "Gene 2", "id": "gene2" }];

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

