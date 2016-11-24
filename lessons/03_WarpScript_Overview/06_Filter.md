# Overview of Filter

Filter are also well-known transformations used in many libraries. This framework is useful to **select some specific GTS from a set of GTS**.
When you would use a MAP to filter over single values, FILTER gives you the ability the filter an entire GTS from its values.

## Example

In this example, we're creating two GTS called GTS1 and GTS2.

|  GTS | tick 10 | tick 20 
|------|---------|--------|
| GTS1 |  50     |  100   | 
| GTS2 |  100    |  200   |

Using filter.last.gt, we're retrieving only selects the Geo Time SeriesTM whose last value is greater than 100.

|  GTS | tick 10 | tick 20 
|------|---------|--------|
| GTS2 |  100    |  200   |

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

[ SWAP [] 100 filter.last.gt ] FILTER
