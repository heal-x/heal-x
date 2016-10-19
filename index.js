var colors = require('colors');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

app.set('json spaces', 2);

var result = [
    { "len": 31, "color": "#8dd3c7", "label": "Gene 1", "id": "gene1" },
    { "len": 28, "color": "#ffffb3", "label": "Gene 2", "id": "gene2" }];

var previousSequences = [
    {
        id: 1,
        dnaSequence: 'TGGCCAGCCTCATCACCCCAACATCTCCCCACCTCCATTCTCCAACCACAGGGCCCTTGTCTCCTCTGTCCTTTCCCCTCCCCGAGCCAAGCCTCCTCCCTCCTCCACCTCCTCCACCTAATA',
        result: result
    }];
var nextResId = previousSequences.length + 1;


app.get('/previousSequences', function (req, res) {
    res.json(previousSequences);
});

app.get('/dnaSequence/:id', function (req, res) {
    var id = parseInt(req.params.id);

    var items = previousSequences.filter(function (item) {
        return item.id === id;
    });

    if (items.length === 0) {
        res.status(404)
            .json({ message: 'The Dna Sequence was not found for: ' + id})
            .end();
        return;
    }

    var item = items[0];

    res.json(item);
});

app.post('/uploadDna', function (req, res) {
    dnaSequence = req.body.dnaSequence;
    if (!dnaSequence) {
        return res.status(400)
        .json({ message: 'DNA Sequence must mot be empty' })
        .end();
    }
    console.log('dna analysis requested for: ' + dnaSequence);
    dnaResult = { id: nextResId++, dnaSequence: dnaSequence, result: result };
    previousSequences.push(dnaResult)
    res.status(201).json({ id: dnaResult.id });
});

app.listen(8080, function () {
    console.log('Running...');
});