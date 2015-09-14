(function() {
  'use strict';

  describe("DOM.get(<selector>).click()", function() {
    var result;

    it("should fire callback function", function() {
      DOM.get('Apply').click(function() {
        DOM.query('.group').empty();
      });
      setTimeout(function(){
        fireEvent(document.getElementById('Apply'),'click');
        result = DOM.query('.group').html();
        expect(result.length).toEqual(0);
      }, 1000);
    });
  });

  describe("DOM.get(<selector>).dblclick()", function() {
    var result;

    it("should fire callback function", function() {
      DOM.get('Apply').dblclick(function() {
        DOM.query('.group').empty();
      });
      setTimeout(function(){
        fireEvent(document.getElementById('Apply'),'dblclick');
        result = DOM.query('.group').html();
        expect(result.length).toEqual(0);
      }, 1000);
    });
  });

  function fireEvent(target, event) {
     var evObj;

     if( document.createEvent ) {
       evObj = document.createEvent('MouseEvents');
       evObj.initEvent( event, true, false );
       target.dispatchEvent( evObj );
     }
      else if( document.createEventObject ) { //IE
       evObj = document.createEventObject();
       target.fireEvent( 'on' + event, evObj );
     }
   }

})();
