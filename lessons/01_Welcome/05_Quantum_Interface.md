# Writing scripts

The **Quantum** web application let your play with differents options and manipulate your datas. 
With this tool you can push, delete, execute scripts and get an index of your datas.

## Configure your endpoint

**Quantum** is just a web application you need to configure a valid backend endpoint.
The default backend is **Cityzendata** one's.
A valid URL for endpoint is like ***https://warp.cityzendata.net/api/v0***.


## Update section

This is the section to push new points onto pltform.
You need to provide a valid [write token](#1-4).
Once it's done, you can fill the text area with one point per line 
The format can be found on section [#2-2](#2-2).

## Delete section

This is a good way to delete some TimeSeries.
You need to provide a valid [write token](#1-4).
You also need a selector ? see [selectors](#2-3) section.
You can see a more granular actions on [/delete documentation][/delete] *without deleteall* attribute.

Keep in mind that if you want to delete a massive amount of datas, you should use a more efficient way like a Curl.

## Find section

This will help you to list your **TimeSeries**.
It's a very fast API route to list existing **TimeSeries** with attributes and tags.

**This tool do not fetch any points**

## WarpScript section

This is the most important section, this is where you can test your scripts.
The response can be ploted. *WarpScript do not take care of new lines because it's a stack language, so you can indent like you want in text area*

## Usefull tools

### Plot

A response to a WarpScript can be ploted, with **plot** button.

Example:
![Quantum plot example](img/quantum_plot.png)

### Share code & results

When you write a **WarpScript**, you may want to share your code or response data.

#### Using buttons

That's why **SHARE RESPONSE** and **SHARE CODE** buttons exists.

Be aware that share a script with someone will show him tokens if you put them in script.
To prevent someone to get tokens see [WRAP][wrap_function] documentation

Furthermore this two buttons will host data into **Cityzendata** storage, It's not a good thing for privates datas.

When you share something in this way you will receive 2 things, a link to send to someone and a revocation link to delete your shared datas. 

#### Using permalinks

You can send a permalink to someone, this will not host datas somewhere, your script will be just base64-encoded into an URL.

Remeber to use [WRAP][wrap_function] to share just the response.

### Save & load scripts

In some cases, you may want to save a script into your desktop, just on top of Warpscript section text area you can see two icons.

![Quantum save icon](img/quantum_save.png)
This will download a mc2 script file of the current script.

![Quantum load icon](img/quantum_load.png)
This will let you upload an mc2 script file.


With that you can organize your scripts.

[/delete]: <http://www.warp10.io/apis/delete/>
[wrap_function]: <http://www.warp10.io/reference/functions/function_WRAP/>