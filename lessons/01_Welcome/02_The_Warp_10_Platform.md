# The Warp 10 Platform

The **Warp 10 Platform** is designed to collect, store and manipulate sensor data. Sensor data are ingested as sequences of measurements (also called time series). The **Warp 10 Platform** offers the possibility for each measurement to also have spatial metadata specifying the geographic coordinates and/or the elevation of the sensor at the time of the reading. Those augmented measurements form what we call **Geo Time Series®** (GTS).

## Geo Time Series®
The first differentiating factor of **Warp 10** is that both space (location) and time are considered first class citizens. Working with **Geo Time Series®** (GTS) allows you to have geo-located readings without having to use four separate series and having to keep track of the reading context.

Complex searches like “find all the sensors active during last Monday in the perimeter delimited by this geo-fencing polygon” can be done without involving expensive joins between separate time series for the same source.

## Platform components
Readings are pushed into the **Warp 10 Platform** via a HTTP call to a component called **Ingress**. In the distributed version of the platform, the **Ingress** component can be instantiated multiple times to support very high ingestion rates.

Once data is dealt with by **Ingress** it is considered persisted by the Warp 10 storage layer called **Continuum** (for the spacetime continuum).

**Warp 10** also offers streaming endpoints to push data using a **WebSocket** or to consume data as it enters the platform to build dynamic dashboards and integrate **Warp 10** into a more elaborate stream processing workflow.

Security and privacy have also been addressed by **Warp** 10 since its very inception, this includes fine grain access control mechanisms, encryption capabilities and throttling management to enable full multi-tenancy of the platform.

## Warp 10 data manipulation environment
We created **WarpScript**, an extensible stack oriented programming language which offers more than 700 functions and several high level frameworks to ease and speed your data analysis. Simply create scripts containing your data analysis code and submit them to the platform, they will execute close to where the data resides and you will get the result of that analysis as a JSON object that you can integrate into your application.

The **WarpScript** approach is another differentiating factor of **Warp 10**. Traditional time series platforms offer few manipulation options, usually only providing a SQL like query language which cannot express complex analysis, or providing a reduced set of aggregation functions. These approaches force you to produce more code on the client side thus increasing your development time and leading to massive transfers of unprocessed data from the platform to your applications. Our approach lets you focus on your business use cases, simplifying IoT and sensor data applications by taking care of a larger chunk of the data analysis in a very efficient way. 
