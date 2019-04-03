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
        hide: function(str){
            let elements = SweetSelector.select(str)
            _hideShow(elements, false)
        },
        show: function(str){
            let elements = SweetSelector.select(str)
            _hideShow(elements, true)
        },
        addClass: function(str, className){
            let elements = SweetSelector.select(str)
            _addRemoveClass(className,elements, true)
        },
        removeClass: function(str, className){
            let elements = SweetSelector.select(str)
            _addRemoveClass(className,elements, false)
        }
        
    };
})();
