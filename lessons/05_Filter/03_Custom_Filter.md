# MACROFILTER

MACROFILTER converts a macro into a filter which can be used with the FILTER framework

For each equivalence classes in the filter set of GTS, the macro will be called with the following elements on the stack:
```
[gts], {labels_equivalence_class}
```
After each call the macro is expected to leave a list on the stack.

~~~

// Parameter list for FILTER
[
    // Create a new GTS list
    [
    
        // Create a GTS with label 'foo'
        NEWGTS
        'gts1' RENAME
        { 'label' 'foo' } RELABEL
        NOW NaN NaN NaN 42 ADDVALUE
        
        // Create an other GTS with label 'bar'
        NEWGTS
        'gts2' RENAME
        { 'label' 'bar' } RELABEL
        NOW NaN NaN NaN 42 ADDVALUE
        
        // Create an other GTS with label 'foo'
        NEWGTS
        'gts3' RENAME
        { 'label' 'foo' } RELABEL
        NOW NaN NaN NaN 42 ADDVALUE
    ]
    
    // List of labels to compute the equivalence class
    [ 'label' ] 
    
    // Definition of the macro to apply
    <%
        // Store the Set of GTS on a variable
        'gtsList' STORE
        // Store the Set of Labels that forms the equivalence class on a variable
        'labels' STORE
        // Just push back the list on the stack
        $gtsList
    %>
    MACROFILTER
]
// The appliance of this filter generate a list that contains 2 lists
// First one contains the series that match 'label' == bar, second one 'label' == foo
FILTER
