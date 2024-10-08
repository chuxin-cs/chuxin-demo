import { useState, useEffect } from "react";
import { useImmer } from "use-immer";

function UseStatePages() {
  return (
    <>
      <Demo1 />
      <Demo2 />
      <Demo3 />
      <Demo4 />
      <Demo5 />
    </>
  );
}

export default UseStatePages;

// 1.正常情况下
function Demo1() {
  let [count, setCount] = useState(0);
  return (
    <>
      <h2>useState: ==== demo1：正常情况下</h2>
      <div>let [count, setCount] = useState(0);</div>
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>普通增加</button>
      <button onClick={() => setCount((state) => state + 1)}>
        回调函数增加
      </button>
    </>
  );
}

// 2.对象嵌套很深的情况下
function Demo2() {
  let [info, setInfo] = useState({
    nickname: "初心",
    age: 27,
    userInfo: {
      userId: 1,
      avatar: "http://www.baidu.com",
    },
  });

  // 修改age
  function updateAge() {
    setInfo({ ...info, age: info.age + 1 });
  }

  function updateUserInfo() {
    setInfo((state) => {
      console.log(state);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          avatar: "http://www.baidu.com1",
        },
      };
    });
  }

  return (
    <>
      <h2>useState: ==== demo2：对象嵌套很深的情况下</h2>
      <div>{`
        let [info, setInfo] = useState({
    nickname: "初心",
    age: 27,
    userInfo: {
      userId: 1,
      avatar: "http://www.baidu.com",
    },
  });
        `}</div>
      <h3>{JSON.stringify(info)}</h3>
      <button onClick={() => updateAge()}>普通增加</button>
      <button onClick={() => updateUserInfo()}>回调函数增加</button>
    </>
  );
}

// 3.对象嵌套很深怎么办呢？
function Demo3() {
  let [data, setData] = useImmer({
    nickname: "初心",
    age: 27,
    userInfo: {
      userId: 1,
      avatar: "http://www.baidu.com",
    },
  });

  // 修改age
  function updateAge() {
    setData((state) => {
      state.age = state.age + 1;
    });
  }

  function updateUserInfo() {
    setData((state) => {
      state.userInfo.avatar = "https://www.yuque.com/chuxin-cs";
    });
  }

  return (
    <>
      <h2>useState: ==== demo3：对象嵌套很深的情况下使用 useImmer</h2>
      <div>{`
            let [data, setData] = useImmer({
        nickname: "初心",
        age: 27,
        userInfo: {
          userId: 1,
          avatar: "http://www.baidu.com",
        },
      });
            `}</div>
      <h3>{JSON.stringify(data)}</h3>
      <button onClick={() => updateAge()}>普通增加</button>
      <button onClick={() => updateUserInfo()}>回调函数增加</button>
    </>
  );
}

// 4.useState的值为异步
function Demo4() {
  let [data, setData] = useState<any>(null);

  useEffect(() => {
    function getUserInfo() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            nickname: "初心",
            age: 27,
            userInfo: {
              userId: 1,
              avatar: "http://www.baidu.com",
            },
          });
        }, 2000);
      });
    }
    getUserInfo().then((res) => {
      console.log(res, "res");
      setData(res);
    });
  }, []);

  // 修改age
  function updateAge() {
    setData({ ...data, age: data.age + 1 });
  }

  function updateUserInfo() {
    setData((state: any) => {
      console.log(state);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          avatar: "http://www.baidu.com2",
        },
      };
    });
  }

  return (
    <>
      <h2>useState: ==== demo4：useState的值为异步</h2>
      <div>let [count, setCount] = useState(0);</div>
      <h3>{JSON.stringify(data)}</h3>
      <button onClick={() => updateAge()}>普通增加</button>
      <button onClick={() => updateUserInfo()}>回调函数增加</button>
    </>
  );
}

// 3.对象嵌套很深怎么办呢？
function Demo5() {
  let [data, setData] = useImmer(null);

  useEffect(() => {
    function getUserInfo() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            nickname: "初心",
            age: 27,
            userInfo: {
              userId: 1,
              avatar: "http://www.baidu.com",
            },
          });
        }, 2000);
      });
    }
    getUserInfo().then((res) => {
      console.log(res, "res");
      setData((state: any) => res);
    });
  }, []);

  // 修改age
  function updateAge() {
    setData((state: any) => {
      state.age = state.age + 1;
    });
  }

  function updateUserInfo() {
    setData((state: any) => {
      state.userInfo.avatar = "https://www.yuque.com/chuxin-cs";
    });
  }

  return (
    <>
      <h2>useState: ==== demo3：对象嵌套很深的情况下使用 useImmer</h2>
      <div>{`
              let [data, setData] = useImmer({
          nickname: "初心",
          age: 27,
          userInfo: {
            userId: 1,
            avatar: "http://www.baidu.com",
          },
        });
              `}</div>
      <h3>{JSON.stringify(data)}</h3>
      <button onClick={() => updateAge()}>普通增加</button>
      <button onClick={() => updateUserInfo()}>回调函数增加</button>
    </>
  );
}
