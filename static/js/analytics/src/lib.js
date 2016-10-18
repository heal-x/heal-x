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


