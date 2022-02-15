<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest
  
# Create a multi-tenancy application in Nest.js
## Description

we use [Nest](https://github.com/nestjs/nest) framework to build what we can called started microservice application used by multiple tenants as SaaS system and add basic services auth-service, user-service , and notification-service 

## Installation

```bash
$ npm install
```

## Running Service

```bash
# development
$ npm run start ${serviceName}

# watch mode
$ npm run start:dev ${serviceName}
```

## test Auth and user service 
you can run both services using run script.
 
```bash
$ chmod +x run.sh

$./run.sh
```
