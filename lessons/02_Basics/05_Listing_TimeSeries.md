# List your TimeSeries

This api route must be reach with a **HTTP GET** request.

## API Endpoint
The HTTP endpoint used to delete data is `http(s)://host:port/api/v0/find`. 
In order to be accepted by the platform, 
requests to this end point need to be authenticated, 
by using a `X-Warp10-Token` HTTP header with your **read** token.

For listing datas, you need to provide selector in URL parameters.

## Option

There are only one param, **selector**.

>`selector`
> for all your app use *~.*{}* for a specific one's, use something like **~os.cpu.1.*{host=dev}**

Keep in mind, find API will send you all your **TimeSeries** it will not fetch any point.
It's an interesting way to see which **TimeSerie** had the biggest number of tags for example.

## Results

The API will respond you a plain text body stream, it contains one **TimeSerie** per line.

***Example:***  
Use curl to list **ALL** GTS in the platform using your **READ** token :
```
curl -v -H 'X-Warp10-Token: READ_TOKEN' 'http://127.0.0.1:8080/api/v0/find?selector=~.*{}'
```
Replacing `READ_TOKEN` by the **read** token generated in the setup.

Response example :

```
os.sys{host=a}{}
os.sys{host=b}{sometag=true}
os.sys{host=c}{}
sensor.temp{}
...
```

