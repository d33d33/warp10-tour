# Keep my variable in memory

**WarpSCript** provide lots of functions to manipulate your stack, but use the stack to save constants or variables used at the end of the script is not an efficient way.
So, the`STORE`function let you name a variable.

For this, you need in order in your stack : 

>`value` 
> A string, a float or whatever

>`name`
> The name of the variable

To use a saved value use **$** character with his name. 

~~~

42 'universeResponse' STORE

// nothing in the stack

$universeResponse 1 + 1 -
