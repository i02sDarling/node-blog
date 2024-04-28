## Head
> [FuctionisExceedSevenDays](#FuctionisExceedSevenDays) > [超过七天吗](#超过七天吗) > [T3](#T3) > [T4](#T4) > [T5](#T5) > [T6](#T6) > [T7](#T7) >[T8](#T8)> [T9](#T9)> [T-10](#T-10)> [T-11](#T-11) > [T-12](#T-12)> [T-13](#T-13)
---
### FuctionisExceedSevenDays[^](#Head)
```js
/*
*/
// const timestamp1 = Date.now(); // 第一个时间戳
// const timestamp2 = Date.now() - 7 * 24 * 60 * 60 * 1000 - 1000; // 第二个时间戳（超过7天） true

// console.log('超过七天吗？', isExceedSevenDays(timestamp1, timestamp2));
```
---
### 超过七天吗[^](#Head)
```cpp
/*
*/

const sessionIdList = require('./sessionId');

console.log(Date.now() - 24 * 60 * 60 * 1000 * 7-1000);

console.log(vertifySessionId(1, "b5717e0770365bbf3c15f5bdffae7b542c577c6a7d0dc73bafdf8f7208c0e6ab"));
function isExceedSevenDays(timestamp1, timestamp2) {
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const diffDays = Math.abs(timestamp1 - timestamp2) / millisecondsInOneDay;
    return diffDays > 7;
}

1713676922485
true false false
PS D:\node-blog\node-blog> node ./request/vertifySessionId
1713676953131
true false false
true
PS D:\node-blog\node-blog> node ./request/vertifySessionId
1713676976531
true false false
true
PS D:\node-blog\node-blog> node ./request/vertifySessionId
1713677020921
true false false
true
PS D:\node-blog\node-blog> node ./request/vertifySessionId
1713677038395
true false false
true
PS D:\node-blog\node-blog> node ./request/vertifySessionId
1713590772321
true false false
true
PS D:\node-blog\node-blog> node ./request/vertifySessionId
1713590784029
true false false
true
```

---
### T3[^](#Head)
---
### T4[^](#Head)
---
### T5[^](#Head)
---
### T6[^](#Head)
---
### T7[^](#Head)
---
### T8[^](#Head)
---
### T9[^](#Head)
---
### T-10[^](#Head)
---
### T-11[^](#Head)
---
### T-12[^](#Head)
---
### T-13[^](#Head)
# This title
<p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);">Edit by</span><em style="color: rgba(91, 255, 247, 0.65);">@02sDarling</em></p><p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);"><em>2024-04-27-16：29：49（星期六）</em></span></p>