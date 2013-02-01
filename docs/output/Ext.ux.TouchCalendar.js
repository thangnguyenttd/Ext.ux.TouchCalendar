Ext.data.JsonP.Ext_ux_TouchCalendar({"subclasses":[],"mixins":[],"code_type":"ext_define","inheritable":false,"component":false,"meta":{"author":["Stuart Ashworth"]},"mixedInto":[],"uses":[],"aliases":{"widget":["calendar"]},"parentMixins":[],"superclasses":["Ext.carousel.Carousel"],"html_meta":{"author":null},"tagname":"class","files":[{"href":"Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar","filename":"Ext.ux.TouchCalendar-min-debug.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.carousel.Carousel<div class='subclass '><strong>Ext.ux.TouchCalendar</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar' target='_blank'>Ext.ux.TouchCalendar-min-debug.js</a></div></pre><div class='doc-contents'><p>For use with Sencha Touch 2</p>\n\n<p>This extension wraps the <a href=\"#!/api/Ext.ux.TouchCalendarView\" rel=\"Ext.ux.TouchCalendarView\" class=\"docClass\">Ext.ux.TouchCalendarView</a> in a Ext.Carousel component and allows the calendar to respond to swipe\ngestures to switch the displayed period. It works by creating 3 Ext.ux.TouchCalendarViews and dynamically creating/removing\nviews as the user moves back/forward through time.</p>\n\n<p><img src=\"http://www.swarmonline.com/Ext.ux.TouchCalendar/screenshots/Ext.ux.TouchCalendar-month-ss.png\" alt=\"Ext.ux.TouchCalendar Screenshot\" /></p>\n\n<p><a href=\"http://www.swarmonline.com/wp-content/uploads/Ext.ux.TouchCalendar/examples/Ext.ux.TouchCalendar.html\">Ext.ux.TouchCalendar Demo</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-enableEventBars' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-enableEventBars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-enableEventBars' class='name expandable'>enableEventBars</a><span> : Boolean/Object</span></div><div class='description'><div class='short'>True to enable the Ext.ux.TouchCalendarEvents plugin. ...</div><div class='long'><p>True to enable the <a href=\"#!/api/Ext.ux.TouchCalendarEvents\" rel=\"Ext.ux.TouchCalendarEvents\" class=\"docClass\">Ext.ux.TouchCalendarEvents</a> plugin. When true the <a href=\"#!/api/Ext.ux.TouchCalendarEvents\" rel=\"Ext.ux.TouchCalendarEvents\" class=\"docClass\">Ext.ux.TouchCalendarEvents</a> JS and CSS files\nmust be included and an eventStore option, containing an Ext.data.Store instance, be given to the viewConfig.  If an object is passed in this is used as the config for the plugin.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-enableSimpleEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-enableSimpleEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-enableSimpleEvents' class='name expandable'>enableSimpleEvents</a><span> : Boolean/Object</span></div><div class='description'><div class='short'>True to enable the Ext.ux.TouchCalendarSimpleEvents plugin. ...</div><div class='long'><p>True to enable the <a href=\"#!/api/Ext.ux.TouchCalendarSimpleEvents\" rel=\"Ext.ux.TouchCalendarSimpleEvents\" class=\"docClass\">Ext.ux.TouchCalendarSimpleEvents</a> plugin. When true the <a href=\"#!/api/Ext.ux.TouchCalendarSimpleEvents\" rel=\"Ext.ux.TouchCalendarSimpleEvents\" class=\"docClass\">Ext.ux.TouchCalendarSimpleEvents</a> JS and CSS files\nmust be included and an eventStore option, containing an Ext.data.Store instance, be given to the viewConfig. If an object is passed in this is used as the config for the plugin.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-enableSwipeNavigate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-enableSwipeNavigate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-enableSwipeNavigate' class='name expandable'>enableSwipeNavigate</a><span> : Boolean</span></div><div class='description'><div class='short'>True to allow the calendar's period to be change by swiping across it. ...</div><div class='long'><p>True to allow the calendar's period to be change by swiping across it.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-viewConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-viewConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-viewConfig' class='name expandable'>viewConfig</a><span> : Object</span></div><div class='description'><div class='short'>A set of configuration options that will be applied to the TouchCalendarView component ...</div><div class='long'><p>A set of configuration options that will be applied to the TouchCalendarView component</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='cfg-viewMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-viewMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-cfg-viewMode' class='name expandable'>viewMode</a><span> : String</span></div><div class='description'><div class='short'>This config should not be used directly, instead the 'viewMode' config should be added to the 'viewConfig' config obj...</div><div class='long'><p>This config should not be used directly, instead the 'viewMode' config should be added to the 'viewConfig' config object. Use the setViewMode method to change the viewMode of the calendar at runtime.</p>\n<p>Defaults to: <code>&quot;month&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-property-' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-property-' class='name expandable'></a><span> : Object</span></div><div class='description'><div class='short'>@copyright     (c) 2012, by SwarmOnline.com\n@date          29th May 2012\n@version       0.1\n@documentation\n@website  ...</div><div class='long'><p>@copyright     (c) 2012, by SwarmOnline.com\n@date          29th May 2012\n@version       0.1\n@documentation\n@website        http://www.swarmonline.com</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getValue' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-getValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-getValue' class='name expandable'>getValue</a>( <span class='pre'></span> ) : Date</div><div class='description'><div class='short'>Returns the Date that is selected. ...</div><div class='long'><p>Returns the Date that is selected.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Date</span><div class='sub-desc'><p>The selected date</p>\n</div></li></ul></div></div></div><div id='method-getViewConfig' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-getViewConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-getViewConfig' class='name expandable'>getViewConfig</a>( <span class='pre'>Date viewValue</span> ) : Object<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Builds the necessary configuration object for the creation of the TouchCalendarView. ...</div><div class='long'><p>Builds the necessary configuration object for the creation of the TouchCalendarView.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>viewValue</span> : Date<div class='sub-desc'><p>The date Value that the new TouchCalendarView will have</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The new config object for the view</p>\n</div></li></ul></div></div></div><div id='method-getViewMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-viewMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-getViewMode' class='name expandable'>getViewMode</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of viewMode. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.ux.TouchCalendar-cfg-viewMode\" rel=\"Ext.ux.TouchCalendar-cfg-viewMode\" class=\"docClass\">viewMode</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initViews' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-initViews' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-initViews' class='name expandable'>initViews</a>( <span class='pre'></span> ) : void<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Creates all the TouchCalendarView instances needed for the Calendar ...</div><div class='long'><p>Creates all the TouchCalendarView instances needed for the Calendar</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onActiveItemChange' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-onActiveItemChange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-onActiveItemChange' class='name expandable'>onActiveItemChange</a>( <span class='pre'>Object container, Object newCard, Object oldCard</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Override of the onCardSwitch method which adds a new card to the end/beginning of the carousel depending on the direc...</div><div class='long'><p>Override of the onCardSwitch method which adds a new card to the end/beginning of the carousel depending on the direction configured with the next period's\ndates.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>newCard</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldCard</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onTableHeaderTap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-onTableHeaderTap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-onTableHeaderTap' class='name expandable'>onTableHeaderTap</a>( <span class='pre'>Object e, Object el</span> )</div><div class='description'><div class='short'>Override for the TouchCalendarView's onTableHeaderTap method which is executed when the view's header (specificly the...</div><div class='long'><p>Override for the TouchCalendarView's onTableHeaderTap method which is executed when the view's header (specificly the arrows) is tapped.\nWhen using the TouchCalendar wrapper we must intercept it and use the carousel's prev/next methods to do the switching.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>el</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setValue' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-setValue' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-setValue' class='name expandable'>setValue</a>( <span class='pre'>Date v</span> ) : void</div><div class='description'><div class='short'>Set selected date. ...</div><div class='long'><p>Set selected date.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>v</span> : Date<div class='sub-desc'><p>Date to select.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setViewMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-cfg-viewMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-setViewMode' class='name expandable'>setViewMode</a>( <span class='pre'>String viewMode</span> )</div><div class='description'><div class='short'>Sets the value of viewMode. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.ux.TouchCalendar-cfg-viewMode\" rel=\"Ext.ux.TouchCalendar-cfg-viewMode\" class=\"docClass\">viewMode</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>viewMode</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateViewMode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendar'>Ext.ux.TouchCalendar</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendar-method-updateViewMode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendar-method-updateViewMode' class='name expandable'>updateViewMode</a>( <span class='pre'>Object mode</span> ) : void</div><div class='description'><div class='short'>Changes the mode of the calendar to the specified string's value. ...</div><div class='long'><p>Changes the mode of the calendar to the specified string's value. Possible values are 'month', 'week' and 'day'.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mode</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"inheritdoc":null,"members":{"event":[],"property":[{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"property","name":"","id":"property-"}],"css_var":[],"method":[{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"getValue","id":"method-getValue"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"getViewConfig","id":"method-getViewConfig"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"getViewMode","id":"method-getViewMode"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"initViews","id":"method-initViews"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"onActiveItemChange","id":"method-onActiveItemChange"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"onTableHeaderTap","id":"method-onTableHeaderTap"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"setValue","id":"method-setValue"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"setViewMode","id":"method-setViewMode"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"method","name":"updateViewMode","id":"method-updateViewMode"}],"css_mixin":[],"cfg":[{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"cfg","name":"enableEventBars","id":"cfg-enableEventBars"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"cfg","name":"enableSimpleEvents","id":"cfg-enableSimpleEvents"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"cfg","name":"enableSwipeNavigate","id":"cfg-enableSwipeNavigate"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"cfg","name":"viewConfig","id":"cfg-viewConfig"},{"meta":{},"owner":"Ext.ux.TouchCalendar","tagname":"cfg","name":"viewMode","id":"cfg-viewMode"}]},"extends":"Ext.carousel.Carousel","name":"Ext.ux.TouchCalendar","singleton":false,"id":"class-Ext.ux.TouchCalendar","statics":{"property":[],"event":[],"css_var":[],"method":[],"css_mixin":[],"cfg":[]},"requires":[]});