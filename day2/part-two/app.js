var fs = require('fs');

var fdata = "";

var testPath = 'testinput.txt';
var livePath = __dirname + '/../input.txt'

fs.readFile(livePath, 'utf8', function (error, data) {
    var rows = data.split('\r\n');
    var checksum = 0;
    for(var j = 0; j < rows.length; j++)
    {
        var row = rows[j];

        var elements = row.split(/\s+/);
        var found = false;
        for(var i = 0; i < elements.length && !found; i++)
        {
            for(var k = 0; k < elements.length && !found; k++)
            {
                if(k !== i)
                {
                    if(elements[k] % elements[i] == 0)
                    {
                        checksum += elements[k] / elements[i];
                        console.log(`elements[k]: ${elements[k]}, elements[i]: ${elements[i]}, i: ${i}, k: ${k}`);
                        found = true;
                    }
                }
            }
        }

        console.log(`row: ${row} checksum: ${checksum}`);
    }
});
