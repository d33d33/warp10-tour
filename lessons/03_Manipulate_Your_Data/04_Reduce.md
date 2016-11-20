# Overview of Reduce

Reduce are also well-known transformation used in many libraries. Thanks to it, you are able to **reduce a set of BUCKETIZE GTS to a single GTS**.

## Example

In this example, we're creating two GTS called GTS1 and GTS2, with some values:

| Timestamp | Value of GTS1 | Value of GTS2 |
|-----------|---------------|---------------|
| 10        | -42           | -211          |
| 20        | -123          | -42           |

Thanks to reduce, we're able to reduce them into one single GTS and apply a mean function, according to the label0 information.

| Timestamp | Value of GTS1 |
|-----------|---------------|
| 10        | -27           |
| 20        | -173          |

For more information about Reduce, please go to [the according lesson](/#4-1).
~~~

[
  NEWGTS "GTS1" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN -42.0 ADDVALUE
  20 NaN NaN NaN -123.0 ADDVALUE
  NEWGTS "GTS2" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN -12.0 ADDVALUE
  20 NaN NaN NaN -223.0 ADDVALUE
]

[
  SWAP
  []
  reducer.mean
] REDUCE
