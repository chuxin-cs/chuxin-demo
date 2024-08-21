import { useUserStore } from "@/store";
import { useStore } from "./store/name";
function App() {
  // 调用这个函数直接可以获取
  let name = useUserStore((state: any) => state.name);
  let handleName = useUserStore((state: any) => state.updateName);
  // 故意在这里进行修改
  const updateName = (val: any) => {
    name = val;
    alert(name);
  };

  let user = useUserStore((state: any) => state.user);
  const updateUser = useUserStore((state: any) => state.updateUser);
  const updateUser1 = useUserStore((state: any) => state.updateUser1);

  const userStore = useUserStore;
  console.log(userStore);

  const _name = useStore((state) => state.name);
  const _setName = useStore((state) => state.setName);
  const _removeName = useStore((state) => state.removeName);
  const _updateName = useStore((state) => state.updateName);

  return (
    <>
      <h1>zustand</h1>
      <div>{_name}</div>
      <button onClick={_setName}>_setName</button>
      <button onClick={_removeName}>_removeName</button>
      <button onClick={() => _updateName("luanshu")}>_updateName</button>

      <div>{name}</div>
      <button onClick={() => updateName(1)}>直接修改</button>
      <button onClick={() => handleName(111)}>修改name</button>

      <div>{user.name}</div>
      <button onClick={() => updateUser({ name: "chuxin-cs" })}>
        修改user.name
      </button>

      <div>{user?.user?.name || ""} </div>
      <button onClick={() => updateUser({ user: { name: "zz" } })}>
        修改user.user.name
      </button>
      <button onClick={() => updateUser1({ user: { user: { name: "zz" } } })}>
        修改user.user.name
      </button>
    </>
  );
}

export default App;
