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

function splitIntoWindowsByWindowSize(dnaString, windowSize) {
    /*Splits a DNA string into equal windows*/
    len = dnaString.length;
    windowNumber = Math.floor(len / windowSize); //number of fullSized windows
    remainingWindowLen = len % windowSize; //size of lastWindow
    totalWindows = remainingWindowLen > 0 ? windowNumber + 1 : windowNumber;
    windowArray = new Array(totalWindows);
    for (i = 0; i < totalWindows; i++) {
        windowArray[i] = dnaString.substring(i * windowSize, (i+1) * windowSize);
    }
    return windowArray;
}

function computeGCContent(dnaString) {
    /* Computes the GC nucleotide content of a dnaString */
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

function generateCircosLayout(dnaString, windowSize) {
    windows = splitIntoWindowsByWindowSize(dnaString, windowSize);
    var layout_data = []
    for (i = 0; i < windows.length; i++) {
        dnaWindow = windows[i];
        len = dnaWindow.length;
        label = "Gene " + i;
        id = "gene" + i;
        color = "#8dd3c7";
        layout_data[i] = {'len': len, 'label' : label, 'id':id, 'color':color}
    }
    return layout_data;
}
