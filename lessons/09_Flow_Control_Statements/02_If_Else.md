# If and Switch

As a developer, you must be used to conditionnal statements in other languages. Let's write them in WarpScript!


## If

The **IFT function implements an if-then conditional.**

### Format
```
conditionmacro macro IFT
```

### Parameters
>`[conditionmacro]`  
> the condition to evaluate

>`[macro]`
> the code to execute if the condition is true


### Example

```
// The condition, is 7 >= 4 ?
<% 7 4 >= %>
// If the condition is true, add some values to the stack
<% 'a' 'b' 'c' %>
// Now the IFT evaluates the condition and as it's true, it will put 'a', 'b' and 'c' onto the stack
IFT
```

## IFTE

The **IFTE function implements an if-then-else conditional.**

### Format
```
conditionmacro macroif macroelse IFTE
```

### Parameters
>`[conditionmacro]`  
> the condition to evaluate

>`[macroif]`
> the code to execute if the condition is true

>`[macroelse]`
> the code to execute for the else


### Example

```
// The condition, is 7 <= 4 ?
<% 7 4 <= %>
// If the condition is true, add some values to the stack
<% 'a' 'b' 'c' %>
// Else we put a 'false' value
<% 'd' 'e' 'f' %>
// Now the IFT evaluates the condition and as it's true, it will put 'a', 'b' and 'c' onto the stack
IFTE
```

~~~
// The condition, is 7 <= 4 ?
<% 7 4 <= %>
// If the condition is true, add some values to the stack
<% 'a' 'b' 'c' %>

IFT
