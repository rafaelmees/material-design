/*!
 * jQuery Character Counter plugin
 * Author: Rafaek Mees
 * Licensed under the MIT license
 */
;(function ($, window, document, undefined) {
    var pluginName = "characterCounter";
    var pluginDataName = "plugin_" + pluginName;

    function Plugin(element, options) {
        this.element = element;
        this.$element = $(element);
        this.target = options.target;
        this.$target = $(options.target);
        this.maxLength = options.maxLength;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            this.$target.on('input keyup', function(event) {
                this.$element.html(this.$target.val().length + '/' + this.maxLength);
                
            });
        }
    };

    $.fn[pluginName] = function (options) {
        this.each(function() {
            console.log(options);
            if (!$.data(this, pluginDataName)) {
                $.data(this, pluginDataName, new Plugin(this, options));
            }
        });
        return this;
    };
})(jQuery, window, document);

// character counter default
    $(function () {
        'use strict';

        $('.character-counter').each(function() {
            $(this).characterCounter({
                maxLength: $(this).data('maxLength'),
                target: $(this).data('target')
            })
        });
    });
