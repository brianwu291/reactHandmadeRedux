This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).<br>
This project follow the Redux patten(Presentational Component and Container Component). But use no Redux<br>
library, just try to write something to imitate Redux library.<br>
Try this app [here](https://brianwu291.github.io/reactHandmadeRedux/).

## Available Scripts
First, run npm install, then in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `Project Structure`

This is a simple App. You can click the button, and the bar will show random number.

```
├── README.md                 # 只是個 README.md
├── package.json              # 各種 package 的相依套件....
├── actions                   # 負責觸發變動、dispatch回Global.js
│   ├── actions.js            # import到Button，action物件送出type判斷、dispatch給reducer函數
│   └── actionType.js         # 負責儲存action物件的字串判斷變數(防止typo)
├── components                # Stateless component(如同Redux中的笨元件，本身不帶有state)
│   ├── connect function      # HOC、把'接收props'的TextBar與'提供state'GlobalState連結在一起
├── App.js                    # 最上層元件，負責包裹頁面
│
├── GlobalState.js            # 存放state、以及下列函數
│   ├── subscribe function    # import到TextBar，訂閱props，接收一個callback function，狀態更新後重新render
│   ├── notifyAll function    # 接收state，並以state為參數傳入subscribe回傳的callback並執行callback
│   ├── dispatch function     # import到Button，接收action物件、並執行reducer函數，執行notifyAll函數
│   └── reducer function      # 接收state與action物件、判斷後回傳新state
└── index.js                  # 負責render App component
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn Reduc, check out the [Redux documentation](https://redux.js.org/basics/basic-tutorial).
