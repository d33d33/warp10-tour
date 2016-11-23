# How to share a stack

When you write a **WarpScript**, you use the Stack and sometimes you just need to take this Stack and do something with it.
It's like a Stack serialization.
It's useful to create macros, save it into web-services or just give it to a friend. 

~~~
1 2 3 4 'WarpSCript power!'
SNAPSHOT
//STOP
'myStack' STORE
// Save stack into variable

// Load variable
$myStack
