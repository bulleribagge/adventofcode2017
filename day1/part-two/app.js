var fs = require('fs');

var fdata = "";

var testPath = 'testinput.txt';
var livePath = __dirname + '/../input.txt'

fs.readFile(livePath, 'utf8', function (error, data) {
    var lines = data.split('\r\n');
    for(var j = 0; j < lines.length; j++)
    {
        var line = lines[j];
        var sum = 0;
        var halfLength = line.length / 2;
        for(var i = 0; i < line.length; i++)
        {
            var nextIndex;
            if((i + halfLength) >= line.length)
            {
                nextIndex = (i + halfLength) % line.length
            }else{
                nextIndex = i + halfLength;
            }

            //console.log("nextIndex: " + nextIndex + " nextIndex value: " + line[nextIndex]);
            if(line[i] == line[nextIndex])
            {
                sum += parseInt(line[i]);
            }
        }

        console.log("line: " + line + " sum: " + sum);
    }
});
