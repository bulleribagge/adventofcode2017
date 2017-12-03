var fs = require('fs');

var fdata = "";

fs.readFile('input.txt', 'utf8', function (error, data) {
    var lines = data.split('\r\n');
    for(var j = 0; j < lines.length; j++)
    {
        var line = lines[j];
        var sum = 0;
        for(var i = 0; i < line.length; i++)
        {
            var nextIndex = i == line.length - 1 ? 0 : i + 1;
            if(line[i] == line[nextIndex])
            {
                sum += parseInt(line[i]);
            }
        }

        console.log("line: " + line + " sum: " + sum);
    }

    
});
