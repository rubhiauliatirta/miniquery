var AjaxWrapper = (function(){

    _executeRequest =  function(input){
        let xhr = new XMLHttpRequest()
        xhr.addEventListener("load", input.success);
        xhr.addEventListener("error",input.fail);
        xhr.open(input.type, input.url);
        if(input.body){
            xhr.send(JSON.stringify(body))
        }else{
            xhr.send()
        }
          
    }

    return {
        request: function(input){
            _executeRequest(input)
        }
    }
})();