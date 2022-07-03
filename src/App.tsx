import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";
import { useState } from "react";

const user = {
  id: 1,
  name: "じゃけえ",
  email: "aaa",
  addredd: "bbbb"
};

export default function App() {
  const [userProfile, setuserProfiles] = useState<Array<userProfile>>([]);
  const onClickFetchUser = () => {
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        //
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <UserCard user={user} />
    </div>
  );
}
