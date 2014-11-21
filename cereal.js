var suggest =  process.argv[2];
suggest = parseInt(suggest);
var old1 = ["Apple, ", "Cap'n, ", "Cinammon, ", "Cocoa, ", "Frosted, ", "Fruit, ", "Honey Bunches of, ", "Raisin, ", "Shredded, ", "Toasted, "];
var string1 = ""

for(var counter1 = ''; counter1 < suggest; counter1++) {
  var index1 = Math.floor(Math.random() * 10);
  var list1 = old1[index1];
  string1 += list1
}

var new1 = [];
new1.push(string1);
console.log(new1);


var old2 = ["Bran, ", "Crunch, ", "Crisp, ", "Flakes, ", "Jacks, ", "Krispies, ", "Loops, ", "Pebbles, ", "Pops, ", "Puffs, "];
var string2 = ""

for(var counter2 = ''; counter2 < suggest; counter2++) {
  var index2 = Math.floor(Math.random() * 10);
  var list2 = old2[index2];
  string2 += list2
}

var new2 = [];
new2.push(string2);
console.log(new2);


//var final = new1.concat(new2);
//console.log(final);
