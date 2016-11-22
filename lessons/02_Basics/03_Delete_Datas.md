# Delete Datas

This api route must be reach with a **HTTP GET** request.

## API Endpoint
The HTTP endpoint used to delete data is `http(s)://host:port/api/v0/delete`. 
In order to be accepted by the platform, 
requests to this end point need to be authenticated, 
by using a `X-Warp10-Token` HTTP header with your **write** token.

For deleting datas, you need to provide selector in URL parameters.

## Options

You can choose to delete some points between two dates or entires **TimeSeries**.
Pushing datas on deleted TimeSeries will re-create it.

In case you want to say *delete this between two dates*
you can add two parameters in the URL: **start** and **end**.
You cannot set one of them without the other.

If you want to delete an entire TimeSeries, add the **deleteall** parameter to URL.

So you can: 

Delete with dates:
>`start`
> A Unix timestamp (µs) or a date with format : YYYY-MM-DDTHH:MM:SS.SSSSSSZ

And

>`end`
> A Unix timestamp (µs) or a date with format : YYYY-MM-DDTHH:MM:SS.SSSSSSZ

Or delete all points of **TimeSeries**
>`deleteall`
> This parameters just need to exists in your query URL.
> It's incompatible with **start** and **end** parameters. 



***Example:***  
Use curl to delete **ALL** GTS in the platform using your **write** token and two timestamp in µs :
```
curl -v -H 'X-Warp10-Token: WRITE_TOKEN' 'http://127.0.0.1:8080/api/v0/update?selector=~.*{}&start=1451602800000&end=1479806902000'
```
Replacing `WRITE_TOKEN` by the **write** token generated in the setup.

to delete all points of specific **TimeSerie** : 
```
curl -v -H 'X-Warp10-Token: WRITE_TOKEN' 'http://127.0.0.1:8080/api/v0/update?selector=~sensor.*{uid=1}&deleteall'
```
Replacing `WRITE_TOKEN` by the **write** token generated in the setup.
