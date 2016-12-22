callWithJQuery = (pivotModule) ->
    if typeof exports is "object" and typeof module is "object" # CommonJS
        pivotModule require("jquery"), require("d3")
    else if typeof define is "function" and define.amd # AMD
        define ["jquery", "d3"], pivotModule
    # Plain browser env
    else
        pivotModule jQuery, d3


identityFunction = (str) -> str;

callWithJQuery ($, d3) ->

    $.pivotUtilities.hub1_renderers = 'Critical Number': (pivotData, opts) ->
        defaults =
            localeStrings: {}

        opts = $.extend defaults, opts

        labelFormatter = opts.labelFormatter || identityFunction

        totalAggregator = pivotData.getAggregator([], [])

        result = $("<span>").addClass('value').append(totalAggregator.value())
        
        return result
    


