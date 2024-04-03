# Web Programming HW#4

## Run the app 

Follow the instructions in this section to run the app locally.


### 特別注意事項

此作業有參考youtube上messenger clone 教學，所以有參考許多的內容，但有一些基本功能並未達成，包含收回以及公告功能，並且網頁跑得非常慢，打開聊天室時有可能因為延遲所以需要多點幾下，請耐心測試，另外，我有附上我的.env，資料庫都沒關，強烈建議直接用我的，但當然，如果你願意去花時間自己把那些東西搞齊(.env需要全部內容都有才能跑)，也沒問題，我很努力實現這些功能，甚至進階功能也有完成一兩個，賞臉的話看能不能給我perfect，大感謝!! 祝各位測試者考試都滿分，期中期末準備順利!

### 1. setup  `.env` (Note that it's .env not .env.local)

`.env`包含，特別注意，這次我是使用mongoDB以及Prisma ORM，他有一個特殊的地方是，在MONGODB那裏拿URL時是選擇VSCODE那個連結，並且!!!! 特別注意!!! 在.net/後面要加project的名稱，不然會push不了，由於注意事項很多，所以建議直接用我的，若你要用自己的資料庫和pusher，那還需要做一些修改。




```bash


```

若你堅持要用自己的pusher，麻煩再去app/libs/pusher.ts將cluster都修改成你們自己pusher的cluster tpye，可以參考我的程式碼，再次強調，強烈建議直接用我提供的.env，我有請別人測試過，但為了你們的測試體驗，建議就用我的。


```bash
export const pusherServer = new PusherServer({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: 'ap3', #這裡
  useTLS: true,
});

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    channelAuthorization: {
      endpoint: '/api/pusher/auth',
      transport: 'ajax',
    },
    cluster: 'ap3', #這裡
  }
);


```

### 2. setup node_modules

Doing this should install all the neccesary dependencies I think.

```bash
npm i
```

### 3. Migrate the schema to DB

Doing this should bring the schema to the DB.

```bash
npx prisma db push

```

### 4. Run the website(Note that it may take ten or more seconds to load the page, pls switch back to the ide from time to time if that happens, the website will load in I swear.)

Run it and go check out the website, note that it takes time for it to load and actions may take time to proccess, so be patient, and pls don't 扣分 me, I tested it quite a few times.

```bash
npm run dev
```



## 網站使用說明，若網站有使用疑慮請看這裡

打開網站時，要先註冊帳號才能登入，隨便用兩個信箱輸入，密碼隨便設就好，若用我的資料庫，有兩套現成的帳密可以測試，切記，沒有開放直接用google和github登入，請在下面創造帳號後再使用來登入。

帳號1 : b09209010@ntu.edu.tw
密碼1 : 1

帳號2 : andychiu609@gmail.com
密碼2 : 2

進去後，應該會看到對話，若是使用自己的資料庫，開兩個瀏覽器，用兩個帳號登入後，即可以在左上角選擇朋友然後開啟對話，切記，網頁跑得很慢，所以可能要多點幾下，發出對話後會即時更新，只是可能要等個幾秒(自己測有10秒上下過)


## Lint檢查說明

 
```bash
npm run lint
```



