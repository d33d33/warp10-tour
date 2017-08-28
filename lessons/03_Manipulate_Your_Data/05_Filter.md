# Overview of Filter

Filter are also well-known transformation used in many libraries. This framework is useful to **select some specific GTS from a set of GTS.**

## Example

In this example, we're creating two GTS called GTS1 and GTS2.

| Timestamp | Value of GTS1 | Value of GTS2 |
|-----------|---------------|---------------|
| 10        | 42            | 211           |
| 20        | 123           | 42            |

Using filter.last.gt, we're retrieving only selects the Geo Time SeriesTM whose last value is greater than 100 (here it's GTS1).

| Timestamp | Value of GTS1 |
|-----------|-------|
| 10        | 42    |
| 20        | 123    |

For more information about Filter, please go to [the according lesson](/#5-1).
~~~

[
  NEWGTS "GTS1" RENAME
  { 'label0' '42' } RELABEL
  10 NaN NaN NaN  42  ADDVALUE
  20 NaN NaN NaN 123  ADDVALUE
  NEWGTS "GTS2" RENAME
  { 'label0' '43' } RELABEL
  10 NaN NaN NaN 211 ADDVALUE
  20 NaN NaN NaN  42 ADDVALUE
]
[
  SWAP
  []
  100
  filter.last.gt
] FILTER
