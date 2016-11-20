# Overview of Bucketize

Bucketize is one of the most useful framework in WarpScript. With it, **you'll be able to put the data of a GTS into regularly spaced buckets**. There's many advantages to that:

* **Synchronize your tick**
* **Downsampling your data**

## Example

In this example, we're creating a GTS called "test.bucketize", which is holding points every 100 ms. So we have:

| Timestamp | Value |
|-----------|-------|
| 100       | 10    |
| 200       | 9     |
| 300       | 8     |
| 400       | 7     |
| 500       | 6     |


by calling bucketizer.max, we're creating 2 buckets which are holding the max value found in each one of them. The result is:

| Timestamp | Value |
|-----------|-------|
| 299       | 10    |
| 500       | 8    |


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
