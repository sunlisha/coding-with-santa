module.exports = function (){
    var SantaClaus = {};
    var found = false;
    SantaClaus.nice = function(object, query){
        var type = typeof object;
        if(type == "object") {
            for (var key in object) {
                if(found === false) {
                    // process.stdout.write("{" + key + ": ");
                    this.nice(object[key], query);
                }
            }
        } else {
            // process.stdout.write(object + "} ");
            if(object === query) {
                found = true;
            }
        }
        return found;
    }
    // SantaClaus.naughty = function(){

    // }
    // SantaClaus.chimney = function(){

    // }
    return SantaClaus;
};

