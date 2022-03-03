import ms from '../src/index';

console.log(ms.timeToMs('10h')); // 36000000
console.log(ms.msToTime(36000000)); // 10h
console.log(ms.parseMs(36000000)); // { hours: 10, minutes: 600, seconds: 36000 }
