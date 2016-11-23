# Some statistics on your GTS

**WarpScript** let you play with your data but sometimes it's interesting to look somes **TimeSeries** statistics.
`FINDSTAT`will get some informations about your **TimeSeries**.

This the same function pattern than`FETCH` without date parameters.

/!\ Warning : to use this function you must be in **distributed** warp10 environement.

In order in your stack you must have :

>`{foo=bar}`
>A list of labels, it can be empty : `{}`

>`~.*`
>A class name selector

>`READ_TOKEN`
>A valide read token

~~~
[
  'READ_TOKEN'
  '~.*'
  {}
] FINDSTATS
