# WarpScript overview

**WarpScript** is an extensible [stack oriented programming language](https://en.wikipedia.org/wiki/Stack-oriented_programming_language) which offers more than 700 functions and several high level frameworks to ease and speed your data analysis. Simply create scripts containing your data analysis code and submit them to the platform, they will execute close to where the data resides and you will get the result of that analysis as a JSON object that you can integrate into your application.

The **WarpScript** approach is another differentiating factor of Warp 10. Traditional time series platforms offer few manipulation options, usually only providing a SQL like query language which cannot express complex analysis, or providing a reduced set of aggregation functions. These approaches force you to produce more code on the client side thus increasing your development time and leading to massive transfers of unprocessed data from the platform to your applications. The **Warp 10** approach lets you focus on your business use cases, simplifying IoT and sensor data applications by taking care of a larger chunk of the data analysis in a very efficient way.

## API Endpoint
The HTTP endpoint used to execute **WarpScript** is `http(s)://host:port/api/v0/exec`.

Usually, you would fetch your data, then you most certainly want to **process it**. 
WarpScript is offering more than **700 functions and several high level frameworks** to ease and speed your data analysis.
In this lesson, we will cover how to fetch from a WarpScript, then we will introduce the 5 frameworks available within WarpScript:

* Fetch


* Bucketize
* Map
* Reduce
* Filter
* Apply

Let's get started!


~~~~

'Manipulate your data'
