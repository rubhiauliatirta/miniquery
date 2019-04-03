var DOM = (function () {
 
    _hideShow = function(elements, isShow){
        if(elements){
            if(elements.length>1){
                for(let i = 0;i<elements.length;i++){
                    isShow ? elements[i].style.display = "block" : elements[i].style.display = "none"
                }
            }else{
                isShow ? elements.style.display = "block" : elements.style.display = "none"
            }
        }
    },
    _addRemoveClass = function(className,elements, isAdd){
        if(elements){      
            if(elements.length>1){
                for(let i = 0;i<elements.length;i++){
                    isAdd ? elements[i].classList.add(className) : elements[i].classList.remove(className)
                }
            }else{
                isAdd ? elements.classList.add(className) : elements.classList.remove(className)
            }
        }
    }
    return {
        hide: function(){      
            _hideShow(this._elements, false)
        },
        show: function(){
            _hideShow(this._elements, true)
        },
        addClass: function(className){
            _addRemoveClass(className,this._elements, true)
        },
        removeClass: function(className){
            _addRemoveClass(className,this._elements, false)
        }
        
    };
})();
