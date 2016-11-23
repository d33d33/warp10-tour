# Search for high values in TimeSerie

When your are looking for a monitoring solution, it's an interesting thing to find and grep high value points in a **TimeSerie**.
The function you are looking for is`THRESHOLDTEST`. 

Send to the stack a **TimeSerie**, a treshold value (a double) and the`THRESHOLDTEST`function will return a timestamp `LIST`.
This timestamps correspond to all higher value points than your treshold.

parameters :

>`GTS`
>One or a list of **TimeSeries**

>`TRESHOLD`
>Limit of the detection

~~~
// This is a random TimeSerie, with some value higher than 1.0
NEWGTS 1 50 <% 0 0 0 RAND ADDVALUE %> FOR
12 0 0 0 1.001 ADDVALUE
24 0 0 0 100.0 ADDVALUE
35 0 0 0 500.0 ADDVALUE 
DEDUP
'myGTS' STORE


// Call function with 1.0 treshold
$myGTS 1.0 THRESHOLDTEST 
// Return a list of TS
STOP // Remove to continue

// If you want to get the first corresponding point
0 GET 'oneTS' STORE
$myGTS $oneTS ATTICK