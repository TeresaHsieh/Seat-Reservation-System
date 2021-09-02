# Seat Reservation System

提供不同排列的座位表，讓 users 可以選擇喜歡的座位並訂位

## 安裝與執行

Step1. Install Dependencies

```
yarn
```

Step2. run 專案於 localhost:8080

```
yarn start
```

Step3. run json-server 於 port 8000，提供座位表資料的 GET 與 POST

```
yarn start:jsonserver
```

## 專案架構

專案 src 架構主要分為三個部分：

- components：依照自己設計的 UI，將畫面切割分為選廳的 Auditoriums 與選座位的 SeatingPlan。也 apply 了 Loader 與 Modal，來呈現 loading 與 success、error 狀態
- constants：因為座位有三種狀態「不存在的位置」、「不可販售座位」、「可選擇的座位」，所以用了 constant 定義狀態，也方便未來做新增、刪除
- utils：由於位置的 UI 座標與記錄在 DB 裡資料是使用不同格式，因此 apply 一個 humanizeCoordinate 的 util 來轉換格式
- data：放置座位表的假資料，模擬 GET 資料時，會得到的座位 JSON data

## 使用的 Dependencies、DevDependencies

- react：使用 Create React App 來快速建立專案
- prop-types：爲 props 進行型別檢查，確保傳入的 value 型別一致
- styled-components：使用 CSS in JS 的設計方法，將 style 元件化
- json-server：快速建立虛擬的 db，模擬開發中真實發 GET、POST request 的情境
- uuid：使用 uuid 產生不易重複的亂碼，讓在 map 元件時，可以不使用 index 來作為 key
- react-spinners：快速產生 spinner 動畫，提供 loading 狀態時，能反應載入的狀態給 users
- react-modal：快速產生 modal，提供非預期錯誤、成功訂位訊息給 users
- eslint：用於檢查 coding style，在此專案中使用了 Airbnb 的規範，也依照文件彈性自訂喜歡的規則
- prettier：用於格式化 code，方便在開發時，有習慣的排版，提高 code 的閱讀性

## 執行畫面

### 初始畫面

![](https://i.imgur.com/tUZZEGY.png)

### 選擇座位表

![](https://i.imgur.com/9j8J15s.png)

### 切換座位表

![](https://i.imgur.com/7iwzVfs.png)

### 選擇座位

![](https://i.imgur.com/fWWhZ0v.png)

### 訂位成功

![](https://i.imgur.com/4zCLfXw.png)

### 已成功訂位的座位不開放選取

![](https://i.imgur.com/xoEAvee.png)

### 非預期錯誤提醒

![](https://i.imgur.com/b6K9K1y.png)
