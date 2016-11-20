# Setup the platform

The recommended and  easiest way to setup the **Warp 10 platform** is to use [Docker](https://www.docker.com/). Builds of Warp 10’s Docker image are available on [Dockerhub](https://hub.docker.com/r/warp10io/warp10/).

## Running your Warp 10 image
Start your image binding the external ports 8080 and 8081 in all interfaces to your container.

Docker containers are easy to delete. If you delete your container instance, you’ll lose the **Warp 10** store and configuration. So by default you should add a volume mapping to the containers `/data` folder.  
You must use the same --volume option in all your other docker commands on **Warp 10** image.

***Example:***  
```
$ docker run --volume=/var/warp10:/data -p 8080:8080 -p 8081:8081 -d -i warp10io/warp10:1.0.7
```

## Generating Tokens
The **Warp 10 platform** is built with a robust security model that allows you to have a tight control of who has the right to write and/or read data. The model is structured around the concepts of `producer`, `owner` and `application`, and `write` and `read` tokens.

Tokens and roles are managed through the [Worf](http://www.warp10.io/tools/worf/) component.

***Example:***  
For the purposes of this setup, you need to generate `write` and `read` tokens for a test `application` for a test `user` that is both the `producer` and the `owner` of the data. In order to interact with the `user/token/application` system, you need an interactive access to **Warp10**’s [Worf](http://www.warp10.io/tools/worf/) component. You get it by executing `worf.sh` on the running container.

First, get the container id for your running **Warp 10** image:
```
$ docker ps
  CONTAINER ID        IMAGE                   COMMAND                  CREATED             STATUS              PORTS                              NAMES
  821b868e20be        warp10io/warp10:1.0.7   "/bin/sh -c ${WARP10_"   3 minutes ago       Up 3 minutes        0.0.0.0:8080-8081->8080-8081/tcp   cranky_noyce
```

Then run `docker exec` to run [Worf](http://www.warp10.io/tools/worf/) console on that container id:
```
$ docker exec   -t -i 821b868e20be worf.sh
```

Inside [Worf](http://www.warp10.io/tools/worf/) console, you can use the `encodeToken` command to generate both a `read` and a `write` token for the default user and application.
```
$ encodeToken
warp10> encodeToken
  encodeToken/token type (read|write)>write
  encodeToken/application name, default (io.warp10.bootstrap)>
  encodeToken/data producer UUID, default (efBfc591-d3B2-4420-943f-799f7ca24cbf)>
  encodeToken/data owner UUID, default (efBfc591-d3B2-4420-943f-799f7ca24cbf)>
  encodeToken/token ttl (ms) >360000000
  encodeToken(generate | cancel)>generate
    token=5Aju_Qg1-ROPrWlnu1EJBBCE9WKBnugfQUPrIUONABEcuNRZaT29nve.gLQxsOlsgOjIExIo.c1291-0ux.NB7s0SffpxMBXeM1GlppOSb9isatfifbRM1uXzE09g
    tokenIdent=dfd39a9bI9RI9ffie
    application name=io.warp10.bootstrap
    producer & owner=(efBfc591-d3B2-4420-943f-799f7ca24cbf & (efBfc591-d3B2-4420-943f-799f7ca24cbf
    ttl=360000000
warp10>encodeToken
  encodeToken/token type (read|write)>read
  encodeToken/application name, default (io.warp10.bootstrap)>
  encodeToken/data producer UUID default (efBfc591-d3B2-4420-943f-799f7ca24cbf)>
  encodeToken/data owner UUID, default (efBfc591-d3B2-4420-943f-799f7ca24cbf)>
  encodeToken/token ttl >360000000
  encodeToken(generate | cancel)>generate
    token=5Aju_Qg1-ROPrWlnu1EJBBCE9WKBnugfQUPrIUONABEcuNRZaT29nve.gLQxsOlsgOjIExIo.c1291-0ux.NB7s0SffpxMBXeM1GlppOSb9isatfifbRM1uXzE09g
    tokenIdent=dfd39a9bI9RI9ffie
    application name=io.warp10.bootstrap
    producer & owner=(efBfc591-d3B2-4420-943f-799f7ca24cbf & (efBfc591-d3B2-4420-943f-799f7ca24cbf
    ttl=360000000
```
