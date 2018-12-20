import { UPDATE_SCORE } from "./actions/actionType.js";

const callback = [];

export let globalState = { score: 123 };

//通知所有有訂閱的元件、並執行訂閱元件中"收到改變通知"後的callback function
const notifyAll = () => {
  for (let i = 0; i < callback.length; i++) {
    callback[i](globalState);
  }
};

//訂閱、接收狀態改變的元件
export const subscribe = cb => {
  callback.push(cb);
};

//主動改變狀態的元件中，負責改變狀態的函數，狀態改變後通知訂閱元件
export const dispatch = action => {
  // new state = reducer(currentState, action)
  globalState = reducer(globalState, action);
  notifyAll();
};

//負責接收舊狀態與行動、並判斷行動是否會改變狀態，最後回傳狀態
const reducer = (globalState, action) => {
  switch (action.type) {
    case UPDATE_SCORE:
      return { ...globalState, score: action.payload };
    default:
      return globalState;
  }
};
