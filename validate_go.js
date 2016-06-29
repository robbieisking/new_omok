( function () {
var validate = {}

validate.isThere = function (list_of_go,loc) {

    var isThere_index = 0

    if (list_of_go.length == 0)
        { 
         return 0;}

    list_of_go.some( function(val) {
                        if (val == (loc.x + 10000*loc.y))
                          { return true}
                        else
                         {
                            isThere_index +=1
                             return false}
    })
    if (isThere_index == list_of_go.length)
        {return 0}
    else
        {return 1}
}




this.validate = validate





})();
