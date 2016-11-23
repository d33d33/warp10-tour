# Loops

As a developer, you must be used to For and while statements in other languages. Let's write them in WarpScript!

## For statement

The **FOR function implements a for loop**.

### Format
```
start stop macro FOR
```

### Parameters
>`[start]`  
> Start of the loop

>`[stop]`  
> Stop of the loop

>`[macro]`  
> A macro to be executed at each iteration.

### Example

```
// Macro that squares the value on the top of the stack
<% 2 **  %>
'SQUARE' STORE


// FOR from i=1 to i=10 generate i^2
1 10 $SQUARE FOR
```

## While statement

The **WHILE function implements a while loop**.

### Format
```
conditionmacro macro WHILE
```

### Parameters
>`[conditionmacro]`  
> the condition to evaluate

>`[macro]`
> the code to execute while the condition is true


### Example

```
5
<% DUP 1 > %>               // Condition macro: top of the stack bigger than 1
<%                          // Exec macro: we say it's bigger than 1 and we decrement counter by 1
DUP
1 - 'index' STORE
'bigger than 1'
$index
%>
WHILE
```

~~~
// Macro that squares the value on the top of the stack
<% 2 **  %>
'SQUARE' STORE


// FOR from i=1 to i=10 generate i^2
1 10 $SQUARE FOR
