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
        on: function(event, func){
            _on(this._elements,event,func)
        },
        trigger: function(event){
    
            _trigger(this._elements,event) 
        }
        
    };
})();