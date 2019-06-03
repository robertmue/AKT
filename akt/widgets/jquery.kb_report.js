(function ($) {

  /***********************************************************
   *         kb_report widget
   ***********************************************************
   */
    $.widget('akt.kb_report', {
        meta:{
            short_description: 'This is the AKT kb_report System Tool.',
            long_description: 'This is the AKT kb_report System Tool.',
            author: 'Robert Muetzelfeldt',
            last_modified: 'June 2019',
            visible: true,
            options: {
                kb_name:null
            }
        },

        options: {
        },

        widgetEventPrefix: 'kb_report:',

        _create: function () {
            var self = this;
            this.element.addClass('kb_report-1');

            var div = $('<div>kb_report</div>');
            this._container = $(this.element).append(div);

            var kb_name = self.options.kb_name;
	        var session = pl.create(5000);
            console.debug(1);
            session.consult(AKT.operators);
            console.debug(2);
	        session.consult(AKT.kbs[kb_name]);
            console.debug(3);
            session.consult(AKT.operations);
            console.debug(AKT.operations);

	        session.query("last_modified(" + kb_name + ", X).");
            console.debug(5);
	        session.answers(show(kb_name), 1000);
            console.debug(6);

            session.query("count_attribute_sentences(N).");
            session.answers(show_count("attribute sentences"),1000);
            console.debug(7);

            function show(kb) {
	            return function(answer) {
		            if(pl.type.is_substitution(answer)) {
                        console.debug(answer);
			            var date = answer.lookup("X");
			            var kb = name != "Y" ? kb_name : answer.lookup("Y");
                        $(div).append('<p>'+kb + " last modified on " + date.args+'</p>');
		            }
	            };
            }

            function show_count(text) {
	            return function(answer) {
		            if(pl.type.is_substitution(answer)) {
                        var n = answer.lookup("N");
                        $(div).append('<p>'+text+' = '+n+'</p>');
		            }
	            };
            }

            this._setOptions({
            });
        },

        _destroy: function () {
            this.element.removeClass('kb_report-1');
            this.element.empty();
            this._super();
        },
        _setOption: function (key, value) {
            var self = this;
            var prev = this.options[key];
            var fnMap = {
            };

            // base
            this._super(key, value);

            if (key in fnMap) {
                fnMap[key]();

                // Fire event
                this._triggerOptionChanged(key, prev, value);
            }
        },

        _triggerOptionChanged: function (optionKey, previousValue, currentValue) {
            this._trigger('setOption', {type: 'setOption'}, {
                option: optionKey,
                previous: previousValue,
                current: currentValue
            });
        }
    });

})(jQuery);
