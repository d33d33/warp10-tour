The FILTER framework aims to select some GTS from a larger set. it allows you to extract only those Geo Time SeriesTM which match some criteria.

While some filter are trivial, like selecting by name or labels, the FILTER framework allows for advanced filtering using N-ary functions (functions which accept N parameters).


# Syntax

```
[ [GTS] ... [GTS] [labels] filter ] FILTER
```
FILTER takes as input a single parameter which is a list of the following:

*[GTS]* one or several lists of geo time series. The result of the call to FILTER will be a single list containing only the selected geo time series from those lists. The returned geo time series are not copies of the original ones, which means that changing the name or labels of the original ones will be reflected in the ones returned by the call to FILTER.

All geo time series in lists containing more than one will be gathered and partitioned into equivalence classes using the labels in [labels]. Assuming there are N input lists, the filter function will then be called for each partition, each time with N parameters. Each parameter is the list of geo time series in the partition which were originally in the i-th list. For input lists which contained a single geo time serie, the singleton will always be passed as parameter, the single geo time serie was not taken into account for partitioning.

This mechanism allows to have advanced filter which can take decisions based on the values of specific geo time series (simply put them as singleton parameters), or on partition based criteria.

Understanding these advanced filter can be daunting, we encourage you to read the documentation for each filter below to better understand how they work.

*[labels]* list of label names to use for partitioning the input geo time series. If this list is empty, then all labels will be used.

*filter* filter function to apply.


