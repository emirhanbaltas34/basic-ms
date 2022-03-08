![Image](https://img.shields.io/npm/v/basic-ms?color=%2351F9C0&label=basic-ms)
![Image](https://img.shields.io/npm/dt/basic-ms.svg?color=%2351FC0&maxAge=3600)

#

![Image](https://nodei.co/npm/basic-ms.png?downloads=true&downloadRank=true&stars=true)

# News

```npm
- Added parse ms and ms to time.
```

# Use

```js
const { timeToMs, parseMs, msToTime } = require('basic-ms');

//Time To Ms
timeToMs('1h'); // 3600000

//Ms To Time
msToTime(3600000); // 1h

//parseMs
parseMs(3600000); // { years: 0, months: 0, weeks: 0, days: 0, hours: 1, minutes: 60, seconds: 3600, milliseconds: 0 }
```
