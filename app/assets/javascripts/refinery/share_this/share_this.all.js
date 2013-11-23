
(function (window, $) {

// Source: refinerycms-share_this/scripts/share_this.js
(function (window, refinery) {

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
                this.holder = holder;

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
    refinery.ui.share_this = function (holder, ui) {
        holder.find('.share-this-buttons').each(function () {
            ui.addObject(
                refinery('share_this.ShareThis').init($(this))
            );
        });
    };
}(window, refinery));
}(window, jQuery));