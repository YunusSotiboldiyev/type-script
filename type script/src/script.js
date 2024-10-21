//3-vazifa
var color;
(function (color) {
    color[color["red"] = 0] = "red";
    color[color["green"] = 1] = "green";
    color[color["blue"] = 2] = "blue";
    color[color["yellow"] = 3] = "yellow";
    color[color["purple"] = 4] = "purple";
})(color || (color = {}));
;
function getColor(col) {
    console.log(color[col]);
}
getColor(0);
//4-vazifa
var massive = [1, 2, 3, 4, 5];
function allNum(num) {
    for (var i = 0; i < num.length; i++) {
        var numb = 0;
        numb += num[i];
    }
    return numb;
}
console.log(allNum(massive));
