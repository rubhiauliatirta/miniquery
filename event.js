var EventDispatcher = (function () {
 
    _on = function(elements,event,func){
        if(elements){      
            if(elements.length>1){
                for(let i = 0;i<elements.length;i++){
                    elements[i].addEventListener(event, func)
                }
            }else{
                elements.addEventListener(event, func)
            }
        }
    }
    _trigger = function(elements,event){
        if(elements){      
            if(elements.length>1){
                for(let i = 0;i<elements.length;i++){
                    elements[i].addEventListener(event, func)
                }
            }else{
                let eventObj = new Event(event)
                elements.dispatchEvent(eventObj)
            }
        }
    }
    return {
        on: function(str, event, func){
            let elements = SweetSelector.select(str)
            _on(elements,event,func)
        },
        trigger: function(str,event){
            let elements = SweetSelector.select(str)
            _trigger(elements,event) 
        }
        
    };
})();