// Generated by CoffeeScript 1.3.3

/*
  QuoJS 2.1
  (c) 2011, 2012 Javi Jiménez Villar (@soyjavi)
  http://quojs.tapquo.com
*/


(function() {

  (function($) {
    var CSS_PROPERTIES, VENDORS, _vendor;
    VENDORS = ["webkit", "moz", "ms", "o", ""];
    CSS_PROPERTIES = {
      userSelect: "none",
      touchCallout: "none",
      userDrag: "none",
      tapHighlightColor: "rgba(0,0,0,0)"
    };
    _vendor = function() {
      var i, properties, property, _results;
      properties = "";
      i = 0;
      _results = [];
      while (i < VENDORS.length) {
        for (property in CSS_PROPERTIES) {
          properties = property;
          if (VENDORS[i]) {
            properties = VENDORS[i] + properties.substring(0, 1).toUpperCase() + properties.substring(1);
          }
        }
        _results.push(i++);
      }
      return _results;
    };
    $.fn.vendor = function() {
      return _vendor();
    };
  })(Quo);

}).call(this);
