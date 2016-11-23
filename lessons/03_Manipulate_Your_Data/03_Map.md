# Overview of Map

Map are well-known transformation used in many libraries. The MAP framework allows you to **apply a function on each values of a Geo Time SeriesTM that fall into a sliding window.**


## Example

In this example, we're creating a fake GTS called test.mapper which is holding only negative values, as you can see below:

| Timestamp | Value |
|-----------|-------|
| 100       | -10   |
| 200       | -9    |
| 300       | -8    |


By using mapper.abs, you're getting the absolute value of each single value in the sliding window. Since *occurences* is set to 0, the mapper will be applied on each tick.

| Timestamp | Value |
|-----------|-------|
| 100       | 10    |
| 200       | 9     |
| 300       | 8     |


For more information about Map, please go to [the according lesson](/#6-1).
~~~

NEWGTS 'test.mapper' RENAME

100  NaN NaN NaN -10 ADDVALUE
200  NaN NaN NaN -9 ADDVALUE
300  NaN NaN NaN -8 ADDVALUE


[
  SWAP
  mapper.abs
  0   				
  0   				
  0 				
] MAP
