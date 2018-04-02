var Dim = 3

console.log("Creating a cube of products with: " + Dim + " dimensions");

for (z=1; z<=Dim;z++) {
    console.log("Slice #" + z + ":"); 
    for (var a = 1; a <= Dim; a++) {
        var tableRow = "";
        for (var b = 1; b <= Dim; b++){
            Product(a,b,z);
        }
        console.log(tableRow);

    }

}

function Product(a,b,z){
    var product = a*b*z;
    var productString = product.toString() + "\t"
    tableRow += productString;
}
