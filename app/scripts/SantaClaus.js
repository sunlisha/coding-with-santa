module.exports = function (){
    var SantaClaus = {
            found: false,
            subtree: {}
        };
    SantaClaus.resetFound = function() {
        this.found = false;
    }
    SantaClaus.traverse = function(object, query){
        var type = typeof object;
        if(type == "object") {
            for (var key in object) {
                if (!this.found){
                    this.traverse(object[key], query);
                }      
                else {
                    if (object.type === query) { //currently can only check for based on type key
                        this.subtree = object;
                    }
                    break;
                }
            }
        } 
        else {
            if(object === query) {
                this.found = true;
            }
        }
        return [this.found, this.subtree];
    }
    SantaClaus.nice = function(object, query){
        this.resetFound();
        var found = this.traverse(object, query)[0];
        if(found){
            return "Good job!";
        }
        else {
            return "This program should include a " + query;
        }
    }
    SantaClaus.naughty = function(object, query){
        this.resetFound();
        var found = this.traverse(object, query)[0];
        if (found) {
            return "This program should not have a " + query;
        }
        else {
            return "Good job!";
        }
    }
    SantaClaus.chimney = function(object, queryObject){
        this.resetFound();
        var foundArray = [],
            subtree = object,
            correctStructure = true,
            i;
  
        for (i = 0; i < queryObject.length; i++) {
            foundArray[i] = false; 
            returnArray = this.traverse(subtree, queryObject[i]);
            foundArray[i] = returnArray[0];
            subtree = returnArray[1];
            this.resetFound();
            correctStructure = foundArray[i] && correctStructure;
        }

        if (correctStructure) {
            return "Good job!";
        }
        else {
            return "You should have a " + queryObject[1] + " inside of a " + queryObject[0];//limited structural nesting
        }


    }
    // SantaClaus.present = function() {

    // }
    return SantaClaus;
};

