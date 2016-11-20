# Data Structure

The **Warp 10 platform** handles a single type of data called **Geo Time Series®** or GTS for short. A **GTS** is obtained by merging a time series of measurements, a sequence of timestamp/value pairs, with the three time series of the sensor location (latitude, longitude, elevation), at time of the measurement. This handy data structure allows for efficient manipulation of moving sensor measurements. Don’t worry if you do not have location information for your sensors, **Warp 10** also support plain old time series.

In order to support the most diverse set of use cases, values of **GTS** can be of four types, `long`, `double`, `boolean` or `UTF-8 string`. You can mix value types in a single **GTS**, it will be handled at read time when you manipulate the data with the **WarpScript** language.

Each **Geo Time Series®** is uniquely identified by a *class* and a set of *labels* (key/values). The *class* can be interpreted as the type of sensor, and the *labels* as uniquely identifying a specific instance in the class. **GTS** can also have *attributes* which are another set of key/values, the only difference with *labels* is that *attributes* do not identify the GTS, they are simply there to provide additional information, and since they do not identify the **GTS** they can be modified during the lifetime of the **Geo Time Series®**.

For maximum flexibility, classes and label names and values can be any valid UTF-8 string. If your strings contain characters which are difficult to type, you only have to URL encode your strings.
