# Access Control

The **Warp 10 platform** does provides bases bricks for integrate it into your authentication system. Access control for updating and reading data is achieved through the use of cryptographic *tokens*. *Tokens* are delivered with the command line tool *Worf*. Roles (*owner*, *producer* and *application*) are used to define the right level of data access.

## Roles

### Data Producer
The data *producer* is identified by an UUID. He have the responsibility of pushing data onto the **Warp 10 platform** with a *write token*

### Data Owner
Data stored onto **Warp 10 platform** belongs to an UUID. It can be the same as the producer UUID or not.

### Application
*Application* is a logical container for a **Geo Time Series®**, commonly applications belongs to one *producer*. Eventually, several producer can push data for one application name. Application is identified by any valid UTF-8 string *name*.

Keep in mind, An *application* name is unique on one **Warp10** cluster (standalone or dist).

## Tokens
All interactions with the platform which involve data rely on the use of tokens for authorization.

There are two basic types of *tokens*, *Write Tokens* for pushing data and *Read Tokens* for reading data.

Tokens are protected by a cryptographic envelope which ensures their integrity and authenticity.

Every token has an expiration date after which it can no longer be used. This allows to create short-lived tokens for performing specific manipulations.

### Read token
Any access to stored data mandates the use of a *Read Token*.

All *Read Tokens* contain the following information:
- The name of the application accessing the data
- A list of applications whose data can be accessed (usually limited to a single application)
- A list of data owners whose data can be accessed (also usually limited to a single owner)
- A list of the data producers who pushed the data to be accessed (also usually limited to a single value)

### Write token
*Write Tokens* are needed to push data onto the **Warp 10 Platform**. A *Write Token* bears the *name* of the app pushing the data (and hence the app the data will be part of), the id of the *producer* of the data and finally the id of the *owner* of the data.

Data are always write by one *producer* for one *owner* within one *application*
