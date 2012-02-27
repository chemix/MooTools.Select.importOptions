/*
---
provides:
- Element.importOptions
- Element.refreshOptions
- Array.toHash

license: MIT-style

requires:
  core/1.3:
  - Hash

authors:
- Jan Cerny - chemiX
...
*/
/**
 * Import options elements to select element
 *
 * syntax:
 *
 *  data = {
 *       'value1':'text desc 1',
 *       'valeu2':'text desc 2',
 *       'value3': {
 *                   'selected':'selected',
 *                   'rel':'addRel3',
 *                   'value':'CustomValue3SkipIndex',
 *                   'text':'Text3',
 *                   'id':'optId3'
 *                   },
 *       'value4':'text desc 4'
 *
 *   }
 *
 *  // or  data = ['text0', 'text1', 'text2']
 *  $('MY_Select_ID').importOptions(data);
 *  // or
 *  $('MY_Select_ID').refreshOptions(data);
 *
 */
Element.implement({
    /* Import */
	'importOptions': function(data)
	{
        if ( this.get('tag') != 'select') return false;

		if (typeOf(data)=='array') data.toHash();
        else data = $H(data);

		data.each(function(item, index) {
            var opt = new Element("option");
            opt.set('value', index);
            if ( typeOf(item) === 'object' ) {
                item = $H(item);
                item.each(function(item, index) {
                    opt.set(index, item);
                });
            }else {
                opt.set('text', item);
            }
            this.grab(opt);
        }, this);

        return this;
	},
    /* Clear, Import and select previous selected option if is possible */
	'refreshOptions': function(data)
	{
        if ( this.get('tag') != 'select') return false;
		var tmpSelect = this.getSelected().get('value').toString();
        this.empty();
        this.importOptions(data);

        // set previous Option selected if possible
        var reSelect = this.getElement('option[value='+tmpSelect+']');
		if (reSelect){
			reSelect.set('selected','selected');
		}
		//this.fireEvent('change', {'stop':$lambda} );

        return this;
	}
});

/**
 * Convert Array to Hash
 *
 * thanks to : emehrkay
 *
 */
Array.implement({
    toHash: function(){
        var obj = {};

        for(var i = 0, l = this.length; i < l; i++){
                obj[i] = this[i];
        }

        return $H(obj);
    }
});
