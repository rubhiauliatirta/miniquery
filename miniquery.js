// var miniquery = (function(){

//     return {
//         DOM: DOM,
//         EventDispatcher: EventDispatcher,
//         AjaxWrapper :AjaxWrapper
// //     }
// // })();

class MiniQuery{
    constructor(str){
        this._elements = SweetSelector.select(str)
        // this.hide = DOM.hide(this._elements)
        this.setting();
        this.hide = DOM.hide;
        this.show = DOM.show;
        this.addClass = DOM.addClass;
        this.removeClass = DOM.removeClass;
        this.on = EventDispatcher.on;
        this.trigger = EventDispatcher.trigger;
        this.request = AjaxWrapper.request;
    }
    setting(){
        DOM._elements = this._elements;
        EventDispatcher._elements = this._elements;
        AjaxWrapper._elements = this._elements;
    }
    

}
var miniquery = function(str){
    return new MiniQuery(str)


   
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