# Duplicate an element of the stack

Most of actions in **WarpScript** use previous elements in Stack.
So it consume last n elements on top of the stack, do something, and push the result.

What about a double process on the same element ?

Use`DUP`function, it will read the last element on top of the stack, and push it again.
with this you can consume the first instance, and keep the second. 

~~~
'There is a string in my stack!'

DUP

// There are 2 strings in my stack

