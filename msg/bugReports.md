

## Head
> [T1](#T1) > [T2](#T2) > [T3](#T3) > [T4](#T4) > [T5](#T5) > [T6](#T6) > [T7](#T7) >[T8](#T8)> [T9](#T9)> [T-10](#T-10)> [T-11](#T-11) > [ctx返回值](#ctx返回值)> [onlineEditor](#onlineEditor)
---
### T1[^](#Head)
---
### T2[^](#Head)
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
### ctx返回值[^](#Head)
```cpp
app.use(
    mount('/vertifyed', async (ctx, next) => {
        console.log(ctx.method);
        if (ctx.method === 'POST') {
            if(ctx.request.body){
                const { sessionId } = ctx.request.body;
                let msg=sessionId;
                ctx.body = {msg}; //必须被包裹主成为对象
            }
            
        } else {
            ctx.body=fs.readFileSync(path.join(__dirname, staticPath, 'dashboard.html'), 'utf-8');
        }
        // admin Post


    })
)
```

---
### onlineEditor[^](#Head)
 **_Stackblitz_** 

`https://nodeblog-d2hk--3000--7dbe22a9.local-corp.webcontainer.io/resume`

<p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);">Edit by</span><em style="color: rgba(91, 255, 247, 0.65);">@02sDarling</em></p><p style="text-align:right"> <span style="font-size: small; color: rgba(128, 128, 128, 0.5);"><em>2024-04-27-23：19：42（星期六）</em></span></p>
