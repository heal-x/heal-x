var colors = require('colors');
var express = require('express');
var app = express();

app.use(express.static('static'));
app.set('json spaces', 2);

var result = [
    { "len": 31, "color": "#8dd3c7", "label": "Gene 1", "id": "gene1" },
    { "len": 28, "color": "#ffffb3", "label": "Gene 2", "id": "gene2" }];

var previousSequences = [
    {
        dnaSequence: 'TGGCCAGCCTCATCACCCCAACATCTCCCCACCTCCATTCTCCAACCACAGGGCCCTTGTCTCCTCTGTCCTTTCCCCTCCCCGAGCCAAGCCTCCTCCCTCCTCCACCTCCTCCACCTAATA',
        result: result
    }];

app.get('/previousSequences', function (req, res) {
    res.json(previousSequences);
});

app.get('/dnaAnalysis', function (req, res) {
    console.log('dna analysis requested for: ' + req.params.dnaSequence);
    dnaResult = { dnaSequence: req.params.dnaSequence, result: result };
    previousSequences.push(dnaResult)
    res.json(dnaResult);
});

app.listen(8080, function () {
    console.log('Running...');
});