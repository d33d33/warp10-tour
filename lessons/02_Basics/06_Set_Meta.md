# Set attributes on your TimeSeries

This api route must be reach with a **HTTP POST** request.

##What is an attribute ?

Internally the datamodel for a serie is : *class{labels}{attributes}*. The *class{labels}* part is the unique identifier of a **TimeSerie**.
Attributes can be defined as a mutable label list applied to a serie composed of a *class* and immutable *labels*.
You can set and unset them without expanding your serie cardinality.  

So internally we can define the warp10 datamodel as : *class{labels}{attributes}* 

While fetching a dataset, *attributes* will be processed exactly like *labels*.

## API Endpoint
The HTTP endpoint used to update metadata is `http(s)://host:port/api/v0/meta`. 
In order to be accepted by the platform, 
requests to this end point need to be authenticated, 
by using a `X-Warp10-Token` HTTP header with your **write** token.


## Request content

Meta API wait for explicit **TimeSerie** identifiants and attributes. Attributes is a key-value list.
A unique identifiant is like :

```
os.env.process{host=a,tick=5}
```

And your attributes list is like :

```
{attA=g,attB=2.0000,attc=1}
``` 

So, the content which must be send is a concatenation of your identifiant and attributes list.

Note that you can't apply metadata on a selector (e.g. : ~os.*{host~.*}). 
You would have to use the *find* API, to retrieve the whole set from a selector, then explicitely send *GTS* with the desired attributes.

***Example:***  

Use curl to set tags on **TimeSeries** using your **WRITE** token :
```
curl -v -H 'X-Warp10-Token: WRITE_TOKEN' 'http://127.0.0.1:8080/api/v0/meta' -d ' \ 
os.env.process{host=a,tick=5}{attA=g,attB=2.0000,attc=1}\n \
os.env.process{host=b,tick=5}{status=inactive}\n'
```
Replacing `WRITE_TOKEN` by the **WRITE** token generated in the setup.

API will respond a 200 OK if everything is fine. 
