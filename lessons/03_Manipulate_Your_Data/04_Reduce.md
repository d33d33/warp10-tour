# Overview of Reduce

Reduce are also well-known transformation used in many libraries. Thanks to it, you are able to **reduce a set of BUCKETIZE GTS to a single GTS**.

## Example

In this example, we're creating two GTS called GTS1 and GTS2, with some values:

| Timestamp | Value of GTS1 | Value of GTS2 |
|-----------|---------------|---------------|
| 10        | 50            | 100           |
| 20        | 0             | 50            |

Thanks to reduce, we're able to reduce them into one single GTS and apply a mean function, according to the label0 information.

| Timestamp | Value of GTS1 |
|-----------|---------------|
| 10        | 75            |
| 20        | 25            |

For more information about Reduce, please go to [the according lesson](/#4-1).
~~~

[
  NEWGTS "GTS1" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN 50 ADDVALUE
  20 NaN NaN NaN 0 ADDVALUE
  NEWGTS "GTS2" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN 100 ADDVALUE
  20 NaN NaN NaN 50 ADDVALUE
]

[
  SWAP
  []
  reducer.mean
] REDUCE
