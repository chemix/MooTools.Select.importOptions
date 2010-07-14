MooTools-Select.importData
===================

Simple way to add new options to select element

![Screenshot](http://github.com/chemix/MooTools.Select.importOptions/raw/master/logo.png)


How to Use
-----------------
importOptions() & refreshOptions()


### Syntax
    data_01 = {
        'value1':'text desc 1',
        'valeu2':'text desc 2',
        'value3': {
                    'selected':'selected',
                    'rel':'addRel3',
                    'value':'CustomValue3SkipIndex',
                    'text':'Text3',
                    'id':'optId3'
                    },
        'value4':'text desc 4'

    }
    data_02 = ['text0', 'text1', 'text2']
    $('MY_Select_ID').importOptions(data_01);
    $('MY_Select_ID').importOptions(data_02);

    // or Refresh - keep selected previous choice
    $('MY_Select_ID').refreshOptions(data_01);
    $('MY_Select_ID').refreshOptions(data_02);


### Arguments

1. data: (*object*,*array*) Source data


### Demo

[http://mootools.net/shell/4DmYx/1/](http://mootools.net/shell/4DmYx/1/)
