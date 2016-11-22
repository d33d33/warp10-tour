# Fetching Data

Data is request from the platform via *HTTP GET* requests to the Warp 10 API.

## API Endpoint
The HTTP endpoint used to fetch data is `http(s)://host:port/api/v0/fetch`. In order to be accepted by the platform, requests to this end point need to be authenticated, by using a `X-Warp10-Token` HTTP header with a **read** token or, as a fallback authentication mode, the token can be passed in a request parameter `token`.

## Request parameters
>`selector`  
>String used to select one or several **GTS**. Its composed of the concatenation of a **class** selector and a **labels** selector.  
> -The **class** selector is a string which represents an exact match if it starts with an `=`, or a regular expression that the class name must match if it starts with `~`.  
> -The **labels** selector is a string delimited by curly brackets (`{}`) with a list of comma separated **label** selectors. Each of these label selectors is composed of the **label** name and the value of the associated selector. Those selectors can also be exact matches if they start with `=` or a regular expression if they start with `~`.

>`format`	*Optional*  
>Response format. Current available formats are:  
> -`text`  
> -`fulltext`

>`dedup`	*Optional*  
>If this parameter is true, sequences of successive data points with the same locations and value are compressed in the response, giving only the first and the last data points in the sequence.

>`start` and `stop`  
>Timestamps defining the interval of the **GTS** to fetch. They are both in [ISO8601](https://fr.wikipedia.org/wiki/ISO_8601) format, i.e. `YYYY-MM-DDTHH:MM:SS.SSSSSSZ`. Only those readings whose timestamps lie between those two timestamps (most recent inclusive, oldest exclusive) will be retained.

>`now` and `timespan`  *Alternative*
>Instead of the basic interval search, with the start and end timestamps in [ISO8601](https://fr.wikipedia.org/wiki/ISO_8601) format, you can use two alternative formats for the interval parameters:
>> 1. If you want to fetch **GTS** who lie in a specific *timespan* before a *timestamp* (for example all the readings in the last minute) you can use the *end timestamp* (in microseconds since the Unix epoch) as `now` parameter and the *timespan* (in microseconds) as `timespan`.
>> 2. If you want to recover the last *n* **GTS** before a given *instant*, you can use the *instant* timestamp (in microseconds since the Unix epoch) as `now` parameter and *-n* as `timespan`.

***Example***  
The request bellow recover data from the platform.  
The `selector` parameter defines the pattern that the GTS have to match to be fetched, those whose classname begins with `example.drone.captor`. `{}` correspond to the `labels`.  
This command load data points starting from the `now` parameter (in this example, 1449222473312000 micro-seconds after Epoch). As `timespan` equals -10, Warp10 will only fetch the last ten data points before now. A positive timespan corresponds to a duration, a negative one to a number of data points to get.
```
curl -H 'X-Warp10-Token: TOKEN_READ' --data-binary "now=1449222473312000&timespan=-10&selector=~example.drone.captor.*{}" 'http://127.0.0.1:8080/api/v0/fetch?'
```
