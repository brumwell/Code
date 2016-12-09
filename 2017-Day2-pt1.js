var input = "ULL,RRDDD,LURDL,UUUUD";

var lines = input.split(",");

var pad = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

var x = 1;
var y = 1;

for (var z = 0; z < lines.length; z++) {

    var char = lines[z].split("");

    for (var i = 0; i < char.length; i++) {

        var dir = char[i];

        switch(dir) {
        case "D":
            x++;
            x = Math.min(x, 2);
            break;
        case "U":
            x--;
            x = Math.max(x, 0);
            break;
        case "L":
            y--;
            y = Math.max(y, 0);
            break;
        case "R":
            y++;
            y = Math.min(y, 2);
            break;
        default:
            $('#shit').append(".");
            break;
        }
        
        
	}

	$('#shit').append(pad[x][y] + "");

}

