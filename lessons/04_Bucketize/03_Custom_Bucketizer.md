# Custom bucketizer

`BUCKETIZE` can use a user defined macro as `bucketizer`

## MACROBUCKETIZER
`MACROBUCKETIZER` converts a macro into a `bucketizer` which can be used with the `BUCKETIZE` framework

## Syntax
For each tick in the mapped GTS, the macro will be called with a list containing the following elements on the stack:

```
[tick_of_computation,[gts_classes],[label_bucketize],[ticks],[latitudes],[longitudes],[elevations],[values]]
```

After each call the macro is expected to leave on the stack a list with the following elements:

```
[tick, latitude, longitude, elevation, value]
```

***Example***  
In the example on the side we use a custom `bucketizer` to drop information of all the ticks except for the even ones for which we return the first value.
```
<%
  'mapping_window' STORE    //  Storing macro input information
  $mapping_window 0 GET     // Extract the current tick
  <% 2 % 0 == %>            // Condition: the current tick % 3 == 0
  <%
    $mapping_window 0 GET         // Tick
    $mapping_window 4 GET 0 GET   // Latitude
    $mapping_window 5 GET 0 GET   // Longitude
    $mapping_window 6 GET 0 GET   // Elevation
    $mapping_window 7 GET 0 GET   // Value
  %>                                            // Then
  <% $mapping_window 0 GET NaN NaN NaN 0 %>  // Else
  IFTE
%>
```

~~~~
[
   NEWGTS
    'example_gts' RENAME
    1434600618629894 3600000000 15 * - 1200000000 + 'now' STORE
    $now NaN NaN NaN 0 ADDVALUE
    $now 1 + NaN NaN NaN 1 ADDVALUE
    $now 2 + NaN NaN NaN 2 ADDVALUE
    $now 3 + NaN NaN NaN 3 ADDVALUE
    $now 4 + NaN NaN NaN 4 ADDVALUE
    $now 5 + NaN NaN NaN 5 ADDVALUE
    $now 6 + NaN NaN NaN 6 ADDVALUE
    $now 7 + NaN NaN NaN 7 ADDVALUE
    $now 8 + NaN NaN NaN 8 ADDVALUE
    $now 9 + NaN NaN NaN 9 ADDVALUE
    $now 10 + NaN NaN NaN 10 ADDVALUE
] 'GTS' STORE

<%
      'mapping_window' STORE    //  Storing macro input information
      $mapping_window 0 GET     // Extract the current tick
      <% 3 % 0 == %>            // Condition: the current tick % 3 == 0
      <%
        $mapping_window 0 GET         // Tick
        $mapping_window 4 GET 0 GET   // Latitude
        $mapping_window 5 GET 0 GET   // Longitude
        $mapping_window 6 GET 0 GET   // Elevation
        $mapping_window 7 GET 0 GET   // Value
      %>                                            // Then
      <% $mapping_window 0 GET NaN NaN NaN 0 %>  // Else
      IFTE
%> MACROBUCKETIZER 'MyMacro' STORE


[ $GTS $MyMacro 0 2 0 ] BUCKETIZE
