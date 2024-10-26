import { createContext, useContext, useEffect, useReducer } from 'react';

// 创建一个上下文，用于存储路由状态
const RouterContext = createContext();

// 路由状态的初始值
const initialRouterState = {
  location: window.location.hash.slice(1) || '/',
  navigate: () => {
  },
};

// 路由状态的 reducer
const routerReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_LOCATION':
      return { ...state, location: action.payload };
    default:
      return state;
  }
};

export function HashRouter({ children }) {

  const [state, dispatch] = useReducer(routerReducer, initialRouterState);

  // 更新路由状态
  const navigate = (to) => {
    window.location.hash = to;
  };

  // 监听哈希变化
  useEffect(() => {
    const handleHashChange = () => {
      dispatch({ type: 'UPDATE_LOCATION', payload: window.location.hash.slice(1) });
    };

    window.addEventListener('hashchange', handleHashChange);

    // 初始化时更新一次路由状态
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  // 提供 navigate 方法
  state.navigate = navigate;

  return <RouterContext.Provider value={state}>
    {children}
  </RouterContext.Provider>;
}

export function Route({ path, element }) {
  const { location } = useContext(RouterContext);

  // 如果当前路径匹配，则渲染元素
  if (location === path) {
    return element;
  }

  return null;
}

export function Link({ to, children }) {
  const { navigate } = useContext(RouterContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
}

export function useNavigate() {
}
