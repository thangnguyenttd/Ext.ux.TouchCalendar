Ext.data.JsonP.Ext_ux_TouchCalendarMonthEvents({"subclasses":["Ext.ux.TouchCalendarWeekEvents"],"mixins":[],"code_type":"ext_define","inheritable":false,"component":false,"meta":{},"mixedInto":[],"uses":[],"aliases":{},"parentMixins":[],"superclasses":["Ext.Base","Ext.ux.TouchCalendarEventsBase"],"html_meta":{},"tagname":"class","files":[{"href":"Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarMonthEvents","filename":"Ext.ux.TouchCalendar-min-debug.js"}],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='docClass'>Ext.ux.TouchCalendarEventsBase</a><div class='subclass '><strong>Ext.ux.TouchCalendarMonthEvents</strong></div></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.ux.TouchCalendarWeekEvents' rel='Ext.ux.TouchCalendarWeekEvents' class='docClass'>Ext.ux.TouchCalendarWeekEvents</a></div><h4>Files</h4><div class='dependency'><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarMonthEvents' target='_blank'>Ext.ux.TouchCalendar-min-debug.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.ux.TouchCalendarMonthEvents\" rel=\"Ext.ux.TouchCalendarMonthEvents\" class=\"docClass\">Ext.ux.TouchCalendarMonthEvents</a></p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-eventBarStore' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-property-eventBarStore' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-property-eventBarStore' class='name expandable'>eventBarStore</a><span> : Ext.data.Store</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>Store to store the Event Bar definitions. ...</div><div class='long'><p>Store to store the Event Bar definitions. It is defined\nwith the <a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a> model.</p>\n</div></div></div><div id='property-eventSortDirection' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-property-eventSortDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-property-eventSortDirection' class='name expandable'>eventSortDirection</a><span> : String</span></div><div class='description'><div class='short'>{String} eventSortDirection Used to define the sort direction the Event Store is sorted in while generating the Event...</div><div class='long'><p>{String} eventSortDirection Used to define the sort direction the Event Store is sorted in while generating the Event models.\nThis is required to be configurable because Month/Week modes work from bottom to top, whereas Day view works from left to right so we want the ordering to be different.\nDefault to 'DESC' for the Month and Week views.</p>\n<p>Defaults to: <code>&quot;DESC&quot;</code></p></div></div></div><div id='property-eventsPerTimeSlot' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-property-eventsPerTimeSlot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-property-eventsPerTimeSlot' class='name expandable'>eventsPerTimeSlot</a><span> : Object</span><strong class='private signature'>private</strong></div><div class='description'><div class='short'>{Object} eventsPerTimeSlot Tracks the number of events that occur in specified time slots so it can be used to calcul...</div><div class='long'><p>{Object} eventsPerTimeSlot Tracks the number of events that occur in specified time slots so it can be used to calculate widths\nwhen rendering. The counts are only stored if 1 or more events exist. The numeric value of the time slot's date (i.e. date.getTime()) is used\nas the key with the count as the value.</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-eventBarDoesWrap' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-eventBarDoesWrap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-eventBarDoesWrap' class='name expandable'>eventBarDoesWrap</a>( <span class='pre'><a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a> r</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns true if the specified EventBar record will wrap and so will need square ends\nCompares the calculated date tha...</div><div class='long'><p>Returns true if the specified EventBar record will wrap and so will need square ends\nCompares the calculated date that the bar will end on and the actual end date of the event. If they aren't the same\nthe bar will wrap to the next row</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>r</span> : <a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a><div class='sub-desc'><p>The EventBar model instance to figure out if it wraps to the next row of dates</p>\n</div></li></ul></div></div></div><div id='method-eventBarHasWrapped' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-eventBarHasWrapped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-eventBarHasWrapped' class='name expandable'>eventBarHasWrapped</a>( <span class='pre'><a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a> r</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns true if the specified EventBar record has been wrapped from the row before. ...</div><div class='long'><p>Returns true if the specified EventBar record has been wrapped from the row before.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>r</span> : <a href=\"#!/api/Ext.ux.CalendarEventBarModel\" rel=\"Ext.ux.CalendarEventBarModel\" class=\"docClass\">Ext.ux.CalendarEventBarModel</a><div class='sub-desc'><p>The EventBar model instance to figure out if it has wrapped from the previous row of dates</p>\n</div></li></ul></div></div></div><div id='method-generateEventBars' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-generateEventBars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-generateEventBars' class='name expandable'>generateEventBars</a>( <span class='pre'></span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Processes the Events store and generates the EventBar records needed to create the markup ...</div><div class='long'><p>Processes the Events store and generates the EventBar records needed to create the markup</p>\n</div></div></div><div id='method-getNextFreePosition' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.ux.TouchCalendarEventsBase' rel='Ext.ux.TouchCalendarEventsBase' class='defined-in docClass'>Ext.ux.TouchCalendarEventsBase</a><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarEventsBase-method-getNextFreePosition' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarEventsBase-method-getNextFreePosition' class='name expandable'>getNextFreePosition</a>( <span class='pre'>Aarray[Numbers] datePositions</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Returns the first index number that isn't in the specified array ...</div><div class='long'><p>Returns the first index number that isn't in the specified array</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>datePositions</span> : Aarray[Numbers]<div class='sub-desc'><p>An array of numbers representing the current date cell's taken positions</p>\n</div></li></ul></div></div></div><div id='method-onStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarMonthEvents'>Ext.ux.TouchCalendarMonthEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarMonthEvents-method-onStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarMonthEvents-method-onStart' class='name expandable'>onStart</a>( <span class='pre'>Event e</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>Override for Ext.util.Draggable's onStart method to process the Event Bar's element before dragging\nand raise the 'ev...</div><div class='long'><p>Override for Ext.util.Draggable's onStart method to process the Event Bar's element before dragging\nand raise the 'eventdragstart' event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-renderEventBars' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ux.TouchCalendarMonthEvents'>Ext.ux.TouchCalendarMonthEvents</span><br/><a href='source/Ext.ux.TouchCalendar-min-debug.html#Ext-ux-TouchCalendarMonthEvents-method-renderEventBars' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ux.TouchCalendarMonthEvents-method-renderEventBars' class='name expandable'>renderEventBars</a>( <span class='pre'>Ext.data.Store store</span> )<strong class='private signature'>private</strong></div><div class='description'><div class='short'>After the Event store has been processed, this method recursively creates and positions the Event Bars ...</div><div class='long'><p>After the Event store has been processed, this method recursively creates and positions the Event Bars</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>store</span> : Ext.data.Store<div class='sub-desc'><p>The store to process - used to then recurse into</p>\n</div></li></ul></div></div></div></div></div></div></div>","alternateClassNames":[],"inheritdoc":null,"members":{"event":[],"property":[{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarEventsBase","tagname":"property","name":"eventBarStore","id":"property-eventBarStore"},{"meta":{},"owner":"Ext.ux.TouchCalendarEventsBase","tagname":"property","name":"eventSortDirection","id":"property-eventSortDirection"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarEventsBase","tagname":"property","name":"eventsPerTimeSlot","id":"property-eventsPerTimeSlot"}],"css_var":[],"method":[{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarEventsBase","tagname":"method","name":"eventBarDoesWrap","id":"method-eventBarDoesWrap"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarEventsBase","tagname":"method","name":"eventBarHasWrapped","id":"method-eventBarHasWrapped"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarEventsBase","tagname":"method","name":"generateEventBars","id":"method-generateEventBars"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarEventsBase","tagname":"method","name":"getNextFreePosition","id":"method-getNextFreePosition"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarMonthEvents","tagname":"method","name":"onStart","id":"method-onStart"},{"meta":{"private":true},"owner":"Ext.ux.TouchCalendarMonthEvents","tagname":"method","name":"renderEventBars","id":"method-renderEventBars"}],"css_mixin":[],"cfg":[]},"extends":"Ext.ux.TouchCalendarEventsBase","name":"Ext.ux.TouchCalendarMonthEvents","singleton":false,"id":"class-Ext.ux.TouchCalendarMonthEvents","statics":{"property":[],"event":[],"css_var":[],"method":[],"css_mixin":[],"cfg":[]},"requires":[]});