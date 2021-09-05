![Image](https://img.shields.io/npm/v/basic-ms?color=%2351F9C0&label=basic-ms)
![Image](https://img.shields.io/npm/dt/basic-ms.svg?color=%2351FC0&maxAge=3600)

#

![Image](https://nodei.co/npm/basic-ms.png?downloads=true&downloadRank=true&stars=true)

# Use

```js
const ms = require("basic-ms");

//Time To Ms
ms("1s"); //1000
ms("1m"); //60000
ms("1h"); //3600000
ms("1d"); //86400000
ms("1w"); //604800016
ms("1mo"); //2629800000
ms("1y"); //31557600000

//Ms To Time (Long = false)
ms(1, { long: false }); //1ms
ms(1000, { long: false }); //1s
ms(60000), { long: false }; //1m
ms(3600000, { long: false }); //1h
ms(86400000, { long: false }); //1d
ms(604800016, { long: false }); //1w
ms(2629800000, { long: false }); //1mo
ms(31557600000, { long: false }); //1y

//Ms To Time (Long = true)
ms(1, { long: true }); //milliseconds
ms(1000, { long: true }); //1seconds
ms(60000), { long: true }; //1minutes
ms(3600000, { long: true }); //1hours
ms(86400000, { long: true }); //1days
ms(604800016, { long: true }); //1weeks
ms(2629800000, { long: true }); //1months
ms(31557600000, { long: true }); //1years

```

### To Report a Bug: Emirhan77#0001 Via Discord
