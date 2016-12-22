(function() {
  var callWithJQuery, identityFunction;

  callWithJQuery = function(pivotModule) {
    if (typeof exports === "object" && typeof module === "object") {
      return pivotModule(require("jquery"), require("d3"));
    } else if (typeof define === "function" && define.amd) {
      return define(["jquery", "d3"], pivotModule);
    } else {
      return pivotModule(jQuery, d3);
    }
  };

  identityFunction = function(str) {
    return str;
  };

  callWithJQuery(function($, d3) {
    return $.pivotUtilities.hub1_renderers = {
      'Critical Number': function(pivotData, opts) {
        var defaults, labelFormatter, result, totalAggregator;
        defaults = {
          localeStrings: {}
        };
        opts = $.extend(defaults, opts);
        labelFormatter = opts.labelFormatter || identityFunction;
        totalAggregator = pivotData.getAggregator([], []);
        result = $("<span>").addClass('value').append(totalAggregator.value());
        return result;
      }
    };
  });

}).call(this);

//# sourceMappingURL=hub1_renderers.js.map
