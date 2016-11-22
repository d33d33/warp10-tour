# Custom reducer

`REDUCER` can use a user defined macro as `reducer`

## MACROREDUCER
`MACROREDUCER` converts a macro into a `reducer` which can be used with the `REDUCE` framework

## Syntax
For each tick in the GTS to reduce, the macro will be called with a list containing the following elements on the stack:

```
[tick_of_computation,[gts_classes],[label_maps],[ticks],[latitudes],[longitudes],[elevations],[values]]
```

After each call the macro is expected to leave on the stack a list with the following elements:

```
[tick, latitude, longitude, elevation, value]
```

***Example***  
In the example on the side we use a custom `reducer` to build a mean `reducer` that ignores null values.
```
<%
  	'input' STORE      // We keep the input in a variable
  	0 'total' STORE  
  	0 'elements' STORE // The number of nun null elements
  	$input 7 GET       // Get the values
	<%
		'val' STORE
		<% $val ISNULL ! %> // If condition : Value non null
		<%
		  $total $val +       'total' STORE  
		  // Increasing total
		  $elements 1 + 'elements' STORE  // Increasing element count
		%>
		IFT
	%>
	FOREACH
	$total $elements / 'mean' STORE   // Calculating the mean
	$input 0 GET NaN NaN NaN $mean
%>
```

~~~~

<%
  	'input' STORE      // We keep the input in a variable
  	0 'total' STORE  
  	0 'elements' STORE // The number of nun null elements
  	$input 7 GET       // Get the values
	<%
		'val' STORE
		<% $val ISNULL ! %> // If condition : Value non null
		<%
		  $total $val +       'total' STORE  
		  // Increasing total
		  $elements 1 + 'elements' STORE  // Increasing element count
		%>
		IFT
	%>
	FOREACH
	$total $elements / 'mean' STORE   // Calculating the mean
	$input 0 GET NaN NaN NaN $mean
%> 'reducer.mean.ignorenull' STORE

[
  '60V8S5KnS1toOLpk5k9701tWR6.7O5xYAaGWS537RqKiRqxmHLF1Nn3LXsXMjhYGz8Bt4emFa9LYuu1Pb.3Q.0V6PLtbRaKnRk0L.0Vn6sg7.........ECGJy4YODOZ033yGYNFkFkXLEVNqP4w1572Zwl.WWsn.AVWYzkp....4acG..'
  '60V8S5KnS1toOLpk5k9701tWR6.7O5xYAaGWS537RqKiRqxmHLF1Nn7LXsXMjhYGz8Bt4eMTaSviitX8eF3Q.0V6PLtbRaKnRk0L.0W.6sg7.........EElJyCYODSZt5CZsqCZ.YAt52_.E.WXsLCZ0O7V.QVRFdNOeVqcW.ZemV3J0F0QeVn4Jk...0Pa.G3.'
  '60V8S5KnS1toOLpk5k9701tWR6.7O5xYAaGWS537RqKiRqxmHLF1NnBLXsXMjhYGz8Bt4cjHwiTOcUrZBGg.5.SdQaSmOMCn.4N.52NUXkV.........wz4IsLCZtLCZ.HBVVl6BNDOYOD73Bhb..Z0W2Y.2X8WV22N.7dj8E2g....LSW3.'
]
UNWRAP
[]
$reducer.mean.ignorenull MACROREDUCER
3 ->LIST
REDUCE
