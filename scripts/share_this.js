/*global window, refinery, $ */
/*jslint sub: true */

(function (window, refinery) {

    'use strict';

    /**
     * @constructor
     * @class refinery.share_this.ShareThis
     * @expose
     * @extends {refinery.Object}
     */
    refinery.Object.create({

        name: 'ShareThis',

        module: 'share_this',

        options: {

            /**
             * Url from which load ShareThis
             *
             * @type {string}
             */
            url: 'https://ws.sharethis.com/button/button.js'
        },

        /**
         * @return {Object} self
         */
        destroy: function () {
            if (window.stLight) {
                this.unload();
            }

            this._destroy();

            return this;
        },

        load: function () {
            var options = /** share_this_config */(this.holder.data('share_this'));

            /**
             * I don't know for what is this but probably is needed
             *
             * @expose
             * @type {string|boolean}
             */
            window.switchTo5x = options.switchTo5x;

            $.getScript(this.options.url, function() {
                window.stLight.options(options);
            });
        },

        unload: function () {
            if (window.stlib) {
                window.stlib.cookie.deleteAllSTCookie();
            }

            delete window.stLight;
            $('.stwrapper, #stOverlay').remove();
            $('[src*="sharethis.com"], [href*="sharethis.com"]').remove();
        },

        /**
         * Initialisation
         *
         * @param {!jQuery} holder
         *
         * @return {Object} self
         */
        init: function (holder) {
            if (this.is('initialisable')) {
                this.is('initialising', true);
                this.attach_holder(holder);

                this.load();

                this.is({'initialised': true, 'initialising': false});
                this.trigger('init');
            }

            return this;
        }
    });

    /**
     * Discuss initialization
     *
     * @expose
     * @param  {jQuery} holder
     * @return {undefined}
     */
    refinery.ui.share_this = function (holder) {
        /**
         * ShareThis dom holder
         *
         * @type {jQuery}
         */
        var share_this_holder = holder.find('.share-this-buttons');

        if (share_this_holder.length > 0) {
            refinery('share_this.ShareThis').init(share_this_holder);
        }
    };
}(window, refinery));
