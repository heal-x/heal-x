/* main analytics */

function computeCodonContent( dnaString ){
    codonContent = {'A' : 0,
                    'T' : 0,
                    'G' : 0, 
                    'C'  :0 };
    for (i=0;i<dnaString.length;i++) {
        codonContent[dnaString.charAt(i)]++;
    }

    return codonContent;
}

function splitIntoWindowsByWindowSize(dnaString, windowSize, limit) {
    /*Splits a DNA string into equal windows*/
    var len = dnaString.length;
    var windowNumber = Math.floor(len / windowSize); //number of fullSized windows
    if (limit) {
        windowNumber = Math.min(windowNumber, 8);
    }
    var remainingWindowLen = len % windowSize; //size of lastWindow
    var totalWindows = remainingWindowLen > 0 ? windowNumber + 1 : windowNumber;
    var windowArray = new Array(totalWindows);
    var windowIndices = new Array(totalWindows);
    for (i = 0; i < totalWindows; i++) {
        start = i * windowSize;
        end = (i+1) * windowSize;
        windowIndices[i]={'start':start, 'end':end}
        windowArray[i] = dnaString.substring(start, end);
    }
    return [windowArray, windowIndices];
}



function computeDiNucleotideContent(dnaString) {
    /* Computes the dinucleotide content of a dnaString */
    var diNucleotide = {};
    for (i = 0; i < dnaString.length - 1; i++) {
        if (diNucleotide[dnaString.substring(i, i + 2)]) {
            diNucleotide[dnaString.substring(i, i + 2)]++;
        }
        else {
            diNucleotide[dnaString.substring(i, i + 2)] = 0;
            diNucleotide[dnaString.substring(i, i + 2)]++;
        }
    }
    return diNucleotide;
}

function _computeTotalNucleotides(diNucleotideContent) {
    var total = 0;
    for (element in diNucleotideContent) {
        total += diNucleotideContent[element];
    }
    return total;
}

    function computeGCContentOfSlidingWindows(dnaString, windowSize) {
        /* Computes GC content of sliding DNA string windows*/
        var gcContentArray = new Array(dnaString.length) //maps GC content to the first nucleotide in the windows
        for (i = 0; i < dnaString.length-windowSize; i++) {
            var window = dnaString.substring(i, i + windowSize) //get window
            var diNucleotideContent = computeDiNucleotideContent(window)
            var gcContent = diNucleotideContent['GC'] / _computeTotalNucleotides(diNucleotideContent)
            gcContentArray[i] = gcContent
        }
        return gcContentArray;
    }

    function generateCircosHeatmap(dnaString, windowSize) {
        var output = splitIntoWindowsByWindowSize(dnaString, windowSize, true);
        var windows = output[0];
        var windowIndices = output[1];
        console.log(windowIndices);
        //gcContentArray = computeGCContentOfSlidingWindows(dnaString, windowSize);
        data = [];
        labelPrefix = 'gene';
        for (j = 0; j < windowIndices.length; j++) {
            start = windowIndices[j].start;
            end = windowIndices[j].end;
            //subArray = gcContentArray.slice(start, end)
            for (i = 0; i < end-start; i++) {
                data.push([labelPrefix + j, i, i + 1, Math.random()]);
            }
        }
        return data;
    }

    function generateCircosLayout(dnaString, windowSize) {
        var output = splitIntoWindowsByWindowSize(dnaString, windowSize, true);
        var windows = output[0];
        var windowIndices = output[1];
        console.log(windows.length);
        var layout_data = [];
        colorPalette = colorbrewer['RdYlGn'][windows.length]
        for (i = 0; i < windows.length; i++) {
            dnaWindow = windows[i];
            len = dnaWindow.length;
            label = "Gene " + i;
            id = "gene" + i;
            color = colorPalette[i];
            layout_data[i] = { 'len': len, 'label': label, 'id': id, 'color': color };
        }
        return layout_data;
    }
