# Overview of Reduce

Reduce are also well-known transformation used in many libraries. Thanks to it, you are able to **reduce a set of BUCKETIZED GTS to a single GTS**. You can think of it as a GroupBy framework with many aggregators.

## Example

In this example, we're creating two GTS called GTS1 and GTS2, with some values:

|  GTS | label0 | tick 10 | tick 20 
|------|--------|---------|--------|
| GTS1 | 42     |  50     |  100   | 
| GTS2 | 42     |  100    |  200   |
| GTS3 | 24     |  150    |  400    |

Thanks to reducer.mean, we're able to reduce them into one single GTS and apply a mean function.

|  GTS | label0 | tick 10 | tick 20 
|------|--------|---------|--------|
| NEW  |        |  100    |  350   | 

Providing a label key as an equivalence class parameter, we could also group by the given label values :

|  GTS | label0 | tick 10 | tick 20 
|------|--------|---------|--------|
| GTS1 | 42     |  50     |  100   | 
| GTS2 | 42     |  100    |  200   |
| GTS3 | 24     |  150    |  400    |

Performing the same reduction grouped by 'label0' now gives us : 

|  GTS | label0 | tick 10 | tick 20 
|------|--------|---------|--------|
| NEW  | 42     |  75     |  150   | 
| GTS3 | 24     |  150    |  400    |




For more information about Reduce, please go to [the according lesson](/#7-1).
~~~

[
  NEWGTS "GTS1" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN 50 ADDVALUE
  20 NaN NaN NaN 100 ADDVALUE
  NEWGTS "GTS2" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN 100 ADDVALUE
  20 NaN NaN NaN 200 ADDVALUE
  NEWGTS "GTS3" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN 150 ADDVALUE
  20 NaN NaN NaN 400 ADDVALUE
] 'GTS' STORE

[ $GTS [] reducer.mean ] REDUCE

[ $GTS [ 'label0' ] reducer.mean ] REDUCE
