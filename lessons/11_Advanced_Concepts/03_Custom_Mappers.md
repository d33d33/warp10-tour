# Custom Mappers

In the previous lessons, you learned about single value mappers, and sliding window mappers. But maybe you have a specific need. Let's write a custom mapper !

## MacroMapper

**MACROMAPPER** converts a macro (or a function) into a mapper which can be used with the MAP framework. The macro will be called for each datapoints and will received a list containing all the informations necessary:

* the **tick** or timestamp
* the **classname** or name of the metric
* the **map of labels**

The rest of the arguments corresponds to the **datapoints falling into the sliding window**(if there's one):

* one of multiples **ticks**
* one of multiples **latitudes**
* one of multiples **longitudes**
* one of multiples **elevations**
* one of multiples **values**

After each call the macro is expected to leave on the stack **a list** with the following elements:

* a **tick
* a **latitude
* a **longitude
* a **elevation
* a **value

## Exercice

You are going to write a dummy macromapper which will **apply the SQRT function on every tick**. The SQRT function consumes a **numeric parameter from the top of the stack and pushes back its square root**.

### Step 1: Write a macro

Macros are declared with the **<% YOUR_MACRO_HERE %> syntax**. For example, this macro calculate the max absolute value of two parameters on the stack:

```
<%
  ABS     // Absolute value of first parameter
  SWAP    // Swapping to get 2nd parameter on top
  ABS     // Absolute value of 2nd parameter
  MAX     // Max of those two absolute values
%> 'MAX_ABS' STORE
```

You can use the macro using the **@NAME** syntax.

As a first step for the MACROMAPPER, you need to write a macro that will consume a list, and push another one at the end of the stack. Don't forget about


### Step 2: integrate it using the MACROMAPPER

## Solution
