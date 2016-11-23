# Set attributes on your TimeSeries

This api route must be reach with a **HTTP POST** request.

##What is an attribute ?

We can define it like a mutable label. 
A label is a part of unique identifiant of a **TimeSerie**. 
An attributes is an information about a serie you can set and unset.   

## API Endpoint
The HTTP endpoint used to delete data is `http(s)://host:port/api/v0/meta`. 
In order to be accepted by the platform, 
requests to this end point need to be authenticated, 
by using a `X-Warp10-Token` HTTP header with your **write** token.


## Request content

Meta API wait for **TimeSerie** identifiants and attributes. Attributes is a key-value list.
A unique identifiant is like :

```
os.env.process{host=a,tick=5}
```

And your attributes list is like :

```
{attA=g,attB=2.0000,attc=1}
``` 

So, the content which must be send is a concatenation of your identifiant and attributes list.

***Example:***  

Use curl to set tags on **TimeSeries** using your **WRITE** token :
```
curl -v -H 'X-Warp10-Token: WRITE_TOKEN' 'http://127.0.0.1:8080/api/v0/meta' -d ' \ 
os.env.process{host=a,tick=5}{attA=g,attB=2.0000,attc=1}\n \
os.en.process{host=a,tick=5}{attA=1.00,attB=abc,attc=25}\n'
```
Replacing `WRITE_TOKEN` by the **WRITE** token generated in the setup.

API will respond a 200 OK if everything is fine. 
