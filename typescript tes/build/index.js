"use strict";
var arahAngin;
(function (arahAngin) {
    arahAngin[arahAngin["utara"] = 3] = "utara";
    arahAngin[arahAngin["timur"] = 4] = "timur";
    arahAngin[arahAngin["selatan"] = 5] = "selatan";
    arahAngin[arahAngin["barat"] = 6] = "barat";
})(arahAngin || (arahAngin = {}));
console.log(arahAngin.timur);
