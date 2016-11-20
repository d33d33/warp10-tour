# Pushing Data

Data is sent into the platform via *HTTP POST* requests to the Warp 10 API.

## API Endpoint
The HTTP endpoint used to send data is `http(s)://host:port/api/v0/update`. In order to be accepted by the platform, requests to this end point need to be authenticated, by using a `X-Warp10-Token` HTTP header with your **write** token.

## Data format
Data is sent in the body of the *POST* request, one data point per line. Each line follows the **GTS** input format:
```
TS/LAT:LON/ELEV NAME{LABELS} VALUE
```
Where:  
>`TS`	*Optional*  
>Timestamp of the reading, in **microseconds** since the Unix Epoch. If omitted, the timestamp associated to the data point will be the one of the platform when the point is pushed.

>`LAT:LON`	*Optional*  
>Geographic coordinates of the reading, using [WGS84](http://en.wikipedia.org/wiki/WGS84)

>`ELEV`	*Optional*  
>Elevation of the reading, in millimeters

>`NAME`  
>Class name of the reading as a [URL encoded](http://en.wikipedia.org/wiki/Percent-encoding) UTF-8 character string. The encoding of character `{` (Unicode *LEFT CURLY BRACKET*, *0x007B*) is MANDATORY.

>`LABELS`  
>Comma separated list of labels, using the syntax `key=value` where both `key` and `value` are URL encoded UTF-8 character strings. If a key or value contains `,` (Unicode *COMMA*, *0x002C*),`}` (Unicode *RIGHT CURLY BRACKET*, *0x007D*) or `=` (Unicode *EQUALS SIGN*, *0x003D*), those characters MUST be encoded.

>`VALUE`  
>The value of the reading. It can be of one of four types: `LONG`, `DOUBLE`, `BOOLEAN`, `STRING`

***Example:***  
Use curl to push a single GTS containing one data in the platform using your **write** token.
```
curl -v -H 'X-Warp10-Token: WRITE_TOKEN' --data-binary "1// test{} 42" 'http://127.0.0.1:8080/api/v0/update'
```
Replacing `WRITE_TOKEN` by the **write** token generated in the setup.

To push a GTS data set file (like [this one](http://www.warp10.io/assets/data/drones))
```
curl -v -H 'Transfer-Encoding:chunked' -H 'X-Warp10-Token: WRITE_TOKEN' --data-binary @PATH_TO_THE_DATA_FILE 'http://127.0.0.1:8080/api/v0/update'
```
Replacing `WRITE_TOKEN` by the **write** token generated in the setup and `PATH_TO_THE_DATA_FILE` by the file path.
