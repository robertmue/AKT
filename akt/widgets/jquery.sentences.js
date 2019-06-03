(function ($) {

  /***********************************************************
   *         sentences widget
   ***********************************************************
   */
    $.widget('akt.sentences', {
        meta:{
            short_description: 'This is the AKT sentences System Tool.',
            long_description: 'This is the AKT sentences System Tool.',
            author: 'Robert Muetzelfeldt',
            last_modified: 'June 2019',
            visible: true,
            options: {
                kb_name:null
            }
        },

        options: {
        },

        widgetEventPrefix: 'sentences:',

        _create: function () {
            var self = this;
            this.element.addClass('sentences-1');

            var div = $('<div>sentences</div>');
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

            $(div).append('<br/><b>Attribute sentences</b><br/>');
            //session.query("attribute_sentence(I,S).");
            //session.query("attribute_sentence(I,att_value(Obj,Att,Val)).");
            //session.answers(show_sentence('attribute'),1000);
            console.debug(8);

            $(div).append('<br/><b>Conditional attribute sentences</b><br/>');
            //session.query("conditional_attribute_sentence(I,S).");
            //session.answers(show_sentence('conditional_attribute'),1000);
            console.debug(9);

            $(div).append('<br/><b>English attribute sentences</b><br/>');
            //session.query("attribute_sentence(I,S).");
            session.query("get_sentence(I,attribute,S).");
            session.answers(show_sentence(),1000);
            console.debug(10);

            $(div).append('<br/><b>English conditional attribute sentences</b><br/>');
            //session.query("attribute_sentence(I,S).");
            session.query("get_sentence(I,conditional_attribute,S).");
            session.answers(show_sentence(),1000);
            console.debug(11);

            $(div).append('<br/><b>Causal sentences</b><br/>');
            //session.query("causal_sentence(I,S).");
            //session.answers(show_sentence(),1000);
            console.debug(12);

            function show(kb_name) {
	            return function(answer) {
		            if(pl.type.is_substitution(answer)) {
                        console.debug(answer);
			            var date = answer.lookup("X");
			            var kb = name != "Y" ? kb_name : answer.lookup("Y");
                        $(div).append('<p>'+kb + " last modified on " + date.args+'</p>');
		            }
	            };
            }

            function show_sentences() {
	            return function(answer) {
                    //console.debug(answer);
		            if(pl.type.is_substitution(answer)) {
                        console.debug(answer);
			            var list = answer.lookup("As");
                        $(div).append('<p>'+list+'</p>');
		            }
	            };
            }

            function show_sentence() {
	            return function(answer) {
                    console.debug(answer);
		            if(pl.type.is_substitution(answer)) {
                        console.debug(answer);
                        var i = answer.lookup("I");
                        var english_sentence = answer.lookup("S");
                        console.debug(english_sentence);
                        //$(div).append('<p>'+english_sentence.replace(/[.]/g,' ')+'.</p>');
                        $(div).append('<b>'+i+':</b> '+english_sentence+'.<br/>');
		            }
	            };
            }

            this._setOptions({
            });
        },

        _destroy: function () {
            this.element.removeClass('sentences-1');
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
