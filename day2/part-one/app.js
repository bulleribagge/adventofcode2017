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
        var max = 0;
        var min = 999999999999;

        var elements = row.split(/\s+/);
        for(var i = 0; i < elements.length; i++)
        {
            if(parseInt(elements[i]) > max)
            {
                max = elements[i];
            }
            
            if(parseInt(elements[i]) < min)
            {
                min = elements[i];
            }
        }

        checksum += max - min;

        console.log(`row: ${row} min: ${min} max: ${max} delta: ${max - min} checksum: ${checksum}`);
    }
});
