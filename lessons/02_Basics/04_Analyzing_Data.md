# Analyzing Data
**WarpScript** is an extensible [stack oriented programming language](https://en.wikipedia.org/wiki/Stack-oriented_programming_language) which offers more than 600 functions and several high level frameworks to ease and speed your data analysis. Simply create scripts containing your data analysis code and submit them to the platform, they will execute close to where the data resides and you will get the result of that analysis as a JSON object that you can integrate into your application.

The **WarpScript** approach is another differentiating factor of Warp 10. Traditional time series platforms offer few manipulation options, usually only providing a SQL like query language which cannot express complex analysis, or providing a reduced set of aggregation functions. These approaches force you to produce more code on the client side thus increasing your development time and leading to massive transfers of unprocessed data from the platform to your applications. The **Warp 10** approach lets you focus on your business use cases, simplifying IoT and sensor data applications by taking care of a larger chunk of the data analysis in a very efficient way.

## API Endpoint
The HTTP endpoint used to execute **WarpScript** is `http(s)://host:port/api/v0/exec`.

## Fetch
The `FETCH` function retrieves data from the Continuum data store.

## Parameters
>`token`  
>Used to perform the request to the Continuum data store. Should be a **read** token.

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
  'READ_TOKEN' // token
  'com.cityzendata.tutorial.sensors.temperature' // class selector
  { 'label0' '=value0' } // label selector
  '2016-01-01T00:00:00.000000Z' // start
  '2016-01-02T00:00:00.000000Z' // end
]
FETCH
```

Fetch **GTS** for the 10 minutes interval before midnight on January 5th 2014:
```
[
  'READ_TOKEN' // token
  'com.cityzendata.tutorial.sensors.temperature' // class selector
  { 'label0' '=value0' } // label selector
  1388880000000000 // now
  600000000 // timespan
]
FETCH
```

Fetch the last five **GTS**:
```
[
  'READ_TOKEN' // token
  'com.cityzendata.tutorial.sensors.temperature' // class selector
  { 'label0' '=value0' } // label selector
  NOW // now
  -5 // timespan
]
FETCH
```

~~~

[
  'READ_TOKEN' // token
  'com.cityzendata.tutorial.sensors.temperature' // class selector
  { 'label0' '=value0' } // label selector
  '2016-01-01T00:00:00.000000Z' // start
  '2016-01-02T00:00:00.000000Z' // end
]
FETCH
