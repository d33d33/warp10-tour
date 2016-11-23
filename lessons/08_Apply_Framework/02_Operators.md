# Operators

## Apply Framework

The **APPLY framework** allows you to **produce Geo Time SeriesTM whose values are the results of the application of a function on values** of geo time series **grouped in equivalence classes based on label values.**

It's a bit like a MAPPER, but instead moving according to the time, you're **applying functions vertically on different GTS grouped by label values.**

## Format
```
[ [GTS] ... [GTS] [labels] op ] APPLY
```

## Parameters
>`[GTS]`  
> One or several lists of geo time series

>`[labels]`  
> A list of *labels* use for building partitions
> If an empty list is provided, use all *labels*.

>`op`  
> operation to apply. THe whole list of supported functions is available on the official [documentation](http://www.warp10.io/reference/reference#framewors-operations).

## Useful Operators

### op.add

The **op.add operation** will **sum at each tick all the values of all the GTS belonging to the same class** (if they do have a value for this current tick). **To produce a result, all GTS of a same class must have a value at a same tick.**

Example:
```
[
  [
    NEWGTS "toto" RENAME
    { 'label0' '42' } RELABEL
    10 NaN NaN NaN 46.5 ADDVALUE
    20 NaN NaN NaN  23  ADDVALUE
    30 NaN NaN NaN  42  ADDVALUE
    NEWGTS "tata" RENAME
    { 'label0' '53' } RELABEL
    10 NaN NaN NaN -42 ADDVALUE
    20 NaN NaN NaN 42 ADDVALUE
  ]
  [
    NEWGTS "titi" RENAME
    { 'label0' '42' } RELABEL
    10 NaN NaN NaN -4.5 ADDVALUE
    15 NaN NaN NaN  2  ADDVALUE
    20 NaN NaN NaN  19  ADDVALUE
    NEWGTS "zero" RENAME
    { 'label0' '53' } RELABEL
    10 NaN NaN NaN 0 ADDVALUE
    15 NaN NaN NaN  0  ADDVALUE
    20 NaN NaN NaN  0  ADDVALUE
    NEWGTS "solo" RENAME
    { 'label0' '4253' } RELABEL
    10 NaN NaN NaN 12 ADDVALUE
    15 NaN NaN NaN 42 ADDVALUE
    20 NaN NaN NaN 53 ADDVALUE
  ]
  [ 'label0' ]
  op.add
]
APPLY
```

~~~
[
  [
    NEWGTS "toto" RENAME
    { 'label0' '42' } RELABEL
    10 NaN NaN NaN 46.5 ADDVALUE
    20 NaN NaN NaN  23  ADDVALUE
    30 NaN NaN NaN  42  ADDVALUE
    NEWGTS "tata" RENAME
    { 'label0' '53' } RELABEL
    10 NaN NaN NaN -42 ADDVALUE
    20 NaN NaN NaN 42 ADDVALUE
  ]
  [
    NEWGTS "titi" RENAME
    { 'label0' '42' } RELABEL
    10 NaN NaN NaN -4.5 ADDVALUE
    15 NaN NaN NaN  2  ADDVALUE
    20 NaN NaN NaN  19  ADDVALUE
    NEWGTS "zero" RENAME
    { 'label0' '53' } RELABEL
    10 NaN NaN NaN 0 ADDVALUE
    15 NaN NaN NaN  0  ADDVALUE
    20 NaN NaN NaN  0  ADDVALUE
    NEWGTS "solo" RENAME
    { 'label0' '4253' } RELABEL
    10 NaN NaN NaN 12 ADDVALUE
    15 NaN NaN NaN 42 ADDVALUE
    20 NaN NaN NaN 53 ADDVALUE
  ]
  [ 'label0' ]
  op.add
]
APPLY
