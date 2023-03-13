
# foodie Backend

A simple express api backend service for digital restaurent dishes

## Getting Started

This repository contains the foodie backend application, an simple api backend prototype for food dishes. 

In order to install and run the app, follow the below steps assuming the PC has npm already installed and set-up

#### Option 1 

1. Clone this repository locally

```
$ git clone https://github.com/kacoster/foodie_backend.git
```

2. Go to the App directory
```
$ cd foodie_backend `directory`
```

3. Get all packages and dependancies
```
$ npm install
```

4. Run project  
```
$ npm start
```

6. Access the app on localhost:3000

#### Option 2 - Docker

1. Pull foodie_backend image from docker hub 
```
$ docker pull vtawira/foodie_backend:latest
```

2. Start app container 
```
$ docker run -it -p 3000:3000 vtawira/foodie_backend:latest
```



