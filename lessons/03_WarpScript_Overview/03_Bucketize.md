# Overview of Bucketize

Bucketize is one of the most useful framework in WarpScript. With it, **you'll be able to put the data of a GTS into regularly spaced buckets**. There's many advantages to that:

* **Synchronize your tick**
* **Downsampling your data**

Tick synchronization is needed to perform reductions (GroupBy) since you need ticks to be aligned. 
It's also needed to stack graphs with tools like Grafana. Grafana will perform the stacking by adding values from different series that share the same ticks, so you need them to be synchronized but the same bucketization.

## Example

In this example, we create a GTS called "test.bucketize", which is holding points every 100µs. So we have:

| Timestamp | Value |
|-----------|-------|
| 100       | 10    |
| 200       | 9     |
| 300       | 8     |
| 400       | 7     |
| 500       | 6     |


by calling bucketizer.max with the right parameters, we're creating 200µs-spaced buckets which are holding the max value found in each one of them. The result is:

// TOFIX

| Timestamp | Value |
|-----------|-------|
| 200       | 10    |
| 400       | 8     |
| 600       | 6     |


For more information about BUCKETIZE, please go to [the according lesson](/#4-1).

~~~

NEWGTS 'test.bucketize' RENAME

100  NaN NaN NaN 10 ADDVALUE
200  NaN NaN NaN  9 ADDVALUE
300  NaN NaN NaN  8 ADDVALUE
400  NaN NaN NaN  7 ADDVALUE
500  NaN NaN NaN  6 ADDVALUE

[
  SWAP
  bucketizer.max
  0   				
  0   				
  2   				
] BUCKETIZE
