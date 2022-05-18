import { httpRequest } from "./HTTPRequestAPI";

const userServices = {
  
    getUserInfo(params) {
        const url = "/userinfo";
        return httpRequest.get(url, params);
    },
  
    getUserInGroup(id) {
        const url = `/groups/${id}/users`;
        return httpRequest.get(url, id);
    },
  
    addUser(data) {
        const url = "/users";
        return httpRequest.post(url, data);
    },
  
    removeUser(data) {
        const url = "/users";
        return httpRequest.delete(url, data);
    },
  
    resetPassword(data) {
        // {
        //     "email": "test@xxxxx.com"
        // }
        const url = "/users/password/forgot";
        return httpRequest.post(url, data);
    },
  
    setNewPassword(data) {
        // {
        //     "new_password":"必須　新規作成パスワード　例：test",
        //     "confirm_password":"必須　確認用パスワード 例：test この値は新規作成の値と同じでなければならない",
        //     "id":"必須　パスワード初期化開始のapi送信後にemailのリンク内部に埋め込まれた情報をここに入れる"
        // }

        const url = "/users/password/forgot";
        return httpRequest.put(url, data);
    },
  
    setPassword(data) {
        // {
        //     "confirm_password":"必須　新しいパスワードの確認 //入力内容はnew_paswordと同じで有る必要が有る",
        //     "new_password":"必須　新しいパスワード",
        //     "old_password":"必須　今まで使用していたパスワード"
        // }

        const url = "/users/password";
        return httpRequest.put(url, data);
    }
}

export default userServices;