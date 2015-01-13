module.exports = function (){
    var SantaClaus = {},
        found = false,
        subtree = {};
    SantaClaus.traverse = function(object, query){
        var type = typeof object;
        if(type == "object") {
            for (var key in object) {
                if (!found){
                    this.traverse(object[key], query);
                }      
                else {
                    if (object.type === query) {
                        subtree = object;
                    }
                    break;
                }
            }
        } 
        else {
            if(object === query) {
                found = true;
            }
        }
        return [found, subtree];
    }
    SantaClaus.nice = function(object, query){
        var found = this.traverse(object, query)[0];
        if(found){
            console.log("Good job!");
        }
        else {
            console.log("This program should include a " + query);
        }
    }
    SantaClaus.naughty = function(object, query){
        var found = this.traverse(object, query)[0];
        if (found) {
            console.log("This program should not have a " + query);
        }
        else {
            console.log("Good job!");
        }
    }
    SantaClaus.chimney = function(object, queryObject){
        var foundArray = [],
            subtree = object,
            i;
  
        for (i = 0; i < queryObject.length; i++) {
            foundArray[i] = false; 
            returnArray = this.traverse(subtree, queryObject[i]);
            foundArray[i] = returnArray[0];
            subtree = returnArray[1];
        }

        console.log(foundArray);
        console.log(subtree);
    }
    // SantaClaus.present = function() {

    // }
    return SantaClaus;
};

