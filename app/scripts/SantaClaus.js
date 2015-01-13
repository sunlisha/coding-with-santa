module.exports = function (){
    var SantaClaus = {},
        found = false;
    SantaClaus.traverse = function(object, query){
        var type = typeof object;
        if(type == "object") {
            for (var key in object) {
                if (!found){
                    this.traverse(object[key], query);
                }      
                else {
                    if (object.type === query) {
                        console.log(object);
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
        return found;
    }
    SantaClaus.nice = function(object, query){
        var found = this.traverse(object, query);
        if(found){
            console.log("Good job!");
        }
        else {
            console.log("This program should include a " + query);
        }
    }
    SantaClaus.naughty = function(object, query){
        var found = this.traverse(object, query);
        if (found) {
            console.log("This program should not have a " + query);
        }
        else {
            console.log("Good job!");
        }
    }
    // SantaClaus.chimneyTraverse = function(object, query, found) {
    //     var type = typeof object;

    //     if(type == "object") {
    //         for (var key in object) {
    //                 subtree = object[key];
    //             if(!found) {
    //                 this.chimneyTraverse(subtree, query, found);
    //             }
    //         }
    //     } 
    //     else {
    //         if(object === query) {
    //             found = true;
    //         }
    //     }
        
    //     return subtree;
    // }
    SantaClaus.chimney = function(object, queryObject){
        var foundArray = [],
            subtree = object,
            i;

        //initialize found array     
        for (i = 0; i < 1; i++) {
            foundArray[i] = false; 
            // subtree = this.chimneyTraverse(subtree, queryObject[i], foundArray[i]);
            foundArray[i] = this.traverse(subtree, queryObject[i]);
        }

        console.log(foundArray);
        console.log(subtree);
    }
    // SantaClaus.present = function() {

    // }
    return SantaClaus;
};

