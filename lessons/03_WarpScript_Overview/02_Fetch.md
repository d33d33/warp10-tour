# Fetch overview

The `FETCH` function retrieves data from the data store.

## Parameters
>`token`  
>Used to perform the request to the data store. Should be a **read** token.

>`class selector`  
>String used to select one or several **GTS**. Its  represents an exact match if it starts with an `=`, or a regular expression that the class name must match if it starts with `~`.  

>`label selector`  
>Map used to select one or several **GTS**. Its  represents an exact match if it starts with an `=`, or a regular expression that the class name must match if it starts with `~`.  

>`start` and `stop`  
>Timestamps defining the interval of the **GTS** to fetch. They are both in [ISO8601](https://fr.wikipedia.org/wiki/ISO_8601) format, i.e. `YYYY-MM-DDTHH:MM:SS.SSSSSSZ`. Only those readings whose timestamps lie between those two timestamps (most recent inclusive, oldest exclusive) will be retained.

>`now` and `timespan`  *Alternative*
>Instead of the basic interval search, with the start and end timestamps in [ISO8601](https://fr.wikipedia.org/wiki/ISO_8601) format, you can use two alternative formats for the interval parameters:
>> 1. If you want to fetch **GTS** who lie in a specific *timespan* before a *timestamp* (for example all the readings in the last minute) you can use the *end timestamp* (in microseconds since the Unix epoch) as `now` parameter and the *timespan* (in microseconds) as `timespan`.
>> 2. If you want to recover the last *n* **GTS** before a given *instant*, you can use the *instant* timestamp (in microseconds since the Unix epoch) as `now` parameter and *-n* as `timespan`.

***Example***  
Fetch **GTS** between two timestamps:
```
[
  'READ_TOKEN'            // token
  'sensors.temperature'   // class selector
  { 'label0' 'value0' }  // label selector
  '2016-01-01T00:00:00.000000Z' // start
  '2016-01-02T00:00:00.000000Z' // end
]
FETCH
```

Fetch **GTS** for the 10 minutes interval before midnight on January 5th 2014:
```
[
  'READ_TOKEN'            // token
  'sensors.temperature'   // class selector
  { 'label0' 'value0' }  // label selector
  1388880000000000        // timestamp in microseconds
  600000000               // timespan in microseconds from now
]
FETCH
```

Fetch the last five **GTS**:
```
[
  'READ_TOKEN' // token
  'sensors.temperature' // class selector
  { 'label0' 'value0' } // label selector
  NOW // now
  -5 // timespan
]
FETCH
```

You can also use an inlined form to write the FETCH function :

```
[ 'READ_TOKEN' 'sensors.temperature' { 'label0' 'value0' } NOW  24 h ] FETCH
```

~~~

[
  'READ_TOKEN' // token
  'sensors.temperature'     // class selector
  { 'label0' '=value0' }    // label selector
  '2016-01-01T00:00:00.000000Z' // start
  '2016-01-02T00:00:00.000000Z' // end
] FETCH
