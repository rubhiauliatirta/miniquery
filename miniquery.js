// var miniquery = (function(){

//     return {
//         DOM: DOM,
//         EventDispatcher: EventDispatcher,
//         AjaxWrapper :AjaxWrapper
// //     }
// // })();
var miniquery = function(str){
    var elements = SweetSelector.select(str);
    hide = function(){
        //let elements = SweetSelector.select(str)
        _hideShow(elements, false)
    };
    show = function(elements){
        //let elements = SweetSelector.select(str)
        _hideShow(elements, true)
    };
    addClass = function(str, className){
        //let elements = SweetSelector.select(str)
        _addRemoveClass(className,elements, true)
    };
    removeClass = function(str, className){
        //let elements = SweetSelector.select(str)
        _addRemoveClass(className,elements, false)
    };
   
}

// var miniquery = (function(str) {
//     var f = function() {
//         return 'Beep';
//     };
//     for (i in args) {
//         f[i] = args[i];
//     }
//     return f;
// }({
//     'name': 'Tom',
//     'name2': 'John'
// }));