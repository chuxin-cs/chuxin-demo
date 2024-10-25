import {create} from "zustand"
import {UserInfo, UserToken} from "#/user"

type UserStore = {
    userInfo: Partial<UserInfo>,
    userToken: UserToken,
    // 使用 actions 命名空间来存在所有的 action
    actions: {
        setUserToken: (token: UserToken) => void,
        setUserInfo: (userInfo: UserInfo) => void,
        clearUserInfoAndToken: () => void,
    }
}

const useUserStore = create<UserStore>((set) => ({
    userInfo: {},
    userToken: {},
    actions: {
        setUserInfo: (userInfo) => {
            set({userInfo})
        },
        setUserToken(userToken) {
            set({userToken})
        },
        clearUserInfoAndToken() {
            set({userInfo: {}, userToken: {}})
        },
    }
}));


export default useUserStore;
