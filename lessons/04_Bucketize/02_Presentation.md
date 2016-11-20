#BUCKETIZE
Here enters the `BUCKETIZE` framework, that provides the tooling for putting the data of a geo time serie into regularly spaced *buckets*.

A *bucket* is a time interval which spans a certain number of microseconds called the *bucketspan*, ending at a tick called the *bucketend*. A *bucketized* geo time serie is characterized by its *bucketspan*, its *bucketcount* (the number of *buckets* in the *bucketized* GTS) and the *bucketend* of the most recent *bucket*, called *lastbucket*.

The BUCKETIZE framework is used to convert a non bucketized geo time serie into a bucketized one. The *bucketization* process collects the measurements of the original geo time serie which fall in each bucket and apply a *bucketizer* function on those data, thus leading to at most a single measurement for each bucket (there might be buckets with no measurements).

The BUCKETIZE framework comes with a number of *bucketizers* which implement very common aggregation functions such as `SUM`, `MIN`, `MAX`, `MEAN`, etc.
