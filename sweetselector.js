var SweetSelector = (function () {
 
    _selectElement = function(string){
        if(string[0]=== "#"){
            let id = string.substr(1);
            return document.getElementById(id)
        }
        else if(string[0]=== "."){
            let className = string.substr(1);
            return document.getElementsByClassName(className)
        }else{
            return document.getElementsByTagName(string)
        }
    }
    
    return {
        select: function(str){
            return _selectElement(str)
        }
    };
})();
