# List in WarpScript

## Creation

List are represented by the **[]** symbols. The [] function creates an empty LIST on the top of the stack. You can also create a list by **putting brackets before and after values, or GTS**, like this:

```
[ 1 2 3 ]
```

Another way is to use the **->LIST function**. The ->LIST function creates a LIST with the **top N elements of the stack**, N being consumed off the top of the stack when ->LIST is called. The element at the top of the stack will be last in the resulting LIST. For example, we can achieve the same result as above by writing this:


```
1 2 3
3 ->LIST
```

There's numerous functions to manipulate lists (they're all listed [here](http://www.warp10.io/reference/reference#functions-lists-maps)), but here's the coolest one:

## Extraction

The **LIST-> function** **extracts the elements of the LIST** at the top of the stack and **pushes them onto the stack** one by one. The function then pushes onto the stack the number of elements that were in the LIST.

```
[ 'a' 'b' 'c' ]
LIST->
```
In the above example, we'll have the 3 values pushed in the stack

## Get

The **function GET retrieve a value** in a LIST.

It takes the top item in the stack and uses it as index to look for the value on the MAP (or on the LIST) in the second position on the stack.

```
[ 'a' 'b' 'c' ]
0 GET
```

In this example, 'a' will be pushed on the stack

## Append

The **APPEND function** appends the LIST on top of the stack to the one just below.

```
[ 'a' 'b' 'c' ]
[ 'd' 'e' ]
APPEND
```

In the above example, we'll have a list containing ["a","b","c","d","e"] on the stack.

## Contains

The **CONTAINS function** checks if the element on top of the stack is contained by the list on second position. A **boolean is pushed on the stack.**

```
[ 'foo' 'bar' 'cool' ]
'bar' CONTAINS
```

## Remove

The **REMOVE function** removes an entry from a LIST. it consumes the element on top of the stack as index n to remove the nth element of the LIST in the second position on the stack, then the removed element is pushed on the stack.

```
[ 'foo' 'bar' 'cool' ]
1 REMOVE
```

## Unique

The **UNIQUE functions** eliminates duplicate elements on the LIST on the top of the stack. The order of the resulting LIST is not the same than the original one.

```
[ 'foo' 42 'bar' true 'foo' 57 42 'code' true false ]
UNIQUE
```

## Flatten

The **function FLATTEN** inspects the top of the stack. If it is a LIST of values, it inspects each value and replaces each value which was a LIST with its content. FLATTEN proceed recursively until all LISTs have been flattened.

```
[ 'a' 'b' 'c' ]
[ 'd' 'e' [ 'f' 'g' ] ]
2 ->LIST
FLATTEN
```

~~~
[ 'a' 'b' 'c' ]
