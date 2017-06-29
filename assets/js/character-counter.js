/*!
 * jQuery Character Counter plugin
 * Author: Rafaek Mees
 * Licensed under the MIT license
 */
;(function ($, window, document, undefined) {
    var pluginName = "characterCounter";
    var pluginDataName = "plugin_" + pluginName;

    function Plugin(element, options) {
        // To avoid scope issues, use 'that' instead of 'this'
        // to reference this class from internal events and functions.
        var that = this;

        that.element = element;
        that.$element = $(element);
        that.target = options.target;
        that.$target = $(options.target);
        that.maxLength = options.maxLength;

        that.init = function() {
            that.$target.bind('keyup.textcounter click.textcounter blur.textcounter focus.textcounter change.textcounter paste.textcounter', that.checkCounter).trigger('click.textcounter');
        }

        that.checkCounter = function() {
            that.$element.html(that.$target.val().length + '/' + that.maxLength);
        }

        that.init();
    }

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
