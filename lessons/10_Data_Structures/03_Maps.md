# Maps in WarpScript

## Creation

Maps are represented by the **{}** symbols. The {} function creates an empty MAP on the top of the stack. You can also create a map by **putting { } before and after values, or GTS**, like this:

```
{ 'foo' 42 }
```

Another way is to use the **->MAP function**. The ->MAP function creates a MAP from an even number N of elements on the stack. N is consumed off the top of the stack. The deepest element of each pair is the key and should be a string, the shallowest is the value.


```
'foo' 42
'bar' true
4 ->MAP
```

There's numerous functions to manipulate maps (they're all listed [here](http://www.warp10.io/reference/reference#functions-lists-maps)), but here's the coolest one:

## Extraction

The **MAP-> function** expands the MAP on top of the stack into pairs of elements followed by the number of elements extracted. If the MAP was created by a call to ->MAP, the order of the elements will be the same as prior to calling ->MAP.

```
{ 'foo' 42 'bar' true }
MAP->
```
In the above example, we'll have the 4 values pushed in the stack: each key and each value.

## Get

The **function GET retrieve a value** in a MAP.

It takes the top item in the stack and uses it as a key to look for the value on the MAP in the second position on the stack.

```
{ 'foo' 42 'bar' true }
'foo' GET
```

In this example, '42' will be pushed on the stack

## Put

The **PUT function consomes** the two top elements of the stack and then it inserts them as a key-value pair into the MAP on top of the stack.

```
{ 'foo' 42 'bar' true }
'newValue'
'newKey'
PUT
```

## Append

The **APPEND function** appends the MAP on top of the stack to the one just below.

```
{ 'a' 'b' }
{ 'c' 'd' }
APPEND
```

In the above example, we'll have a map containing {"a":"b","c":"d"} on the stack.

## ContainsKey

The **CONTAINSKEY function** checks if the key element on top of the stack is a key of the map on second position. The key is consumed, and a boolean is pushed on the stack.

```
{ 'foo' 42 'bar' true 'cool' 'always' }
'bar' CONTAINSKEY
```

## ContainsValue

The **CONTAINSVALUE function** checks if the value element on top of the stack is a value of the map on second position. The value is consumed, and a boolean is pushed on the stack.

```
{ 'foo' 42 'bar' true 'cool' 'always' }
'bar' CONTAINSKEY
```

## Remove

The **REMOVE function** removes an entry from a MAP. It consumes the element on top of the stack as key to remove the corresponding key-value pair of the MAP in the second position on the stack, then the removed value is pushed on the stack.

```
{ 'label0' '42' 'label1' 'foo' 'label2' true }
'label1' REMOVE
```

~~~
{ 'foo' 42 }
