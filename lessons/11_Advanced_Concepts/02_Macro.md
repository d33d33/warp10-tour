# Macro

As a developer, you are used to write functions. WarpScript is offering the possibility to write macros.

### Syntax

Macros are declared with the **<% YOUR_MACRO_HERE %> syntax**. For example, this macro calculate the max absolute value of two parameters on the stack:

```
<%
  // Do some stuff in heres
%> 'MY_AWESOME_MACRO' STORE
```

You can use the macro using the **@NAME** syntax.

## Exercice

In WarpScript you have an **ABS** function to calculate the absolute value of a number, and **MAX** to compute the maximum of two numbers. But what about **a function MAX_ABS to get the maximum of the absolute value of two numbers?**

### Answer

```
// Function to calculate the max absolute value of two parameters on the stack
<%
  ABS     // Absolute value of first parameter
  SWAP    // Swapping to get 2nd parameter on top
  ABS     // Absolute value of 2nd parameter
  MAX     // Max of those two absolute values
%> 'MAX_ABS' STORE // Then we store the macro on a MAX_ABS variable

// Let's calculate the MAX_ABS of -1 and -5
-1
-5
@MAX_ABS      // To evaluate a function you can alse use @name
```

~~~
// Function to calculate the max absolute value of two parameters on the stack
<%
  // Write your macro here
%> 'MAX_ABS' STORE

// Let's calculate the MAX_ABS of -1 and -5
-1
-5
@MAX_ABS      // To evaluate a function you can alse use @name
