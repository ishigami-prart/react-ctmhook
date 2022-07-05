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
  const [userProfiles, setUserProfiles] = useState<Array<userProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => ({
          id: user.id,
          name: `${user.name}(${user.username})`,
          email: user.email,
          adress: `${user.address.city}${user.address.suite}${user.address.street}`
        }));
        setUserProfiles(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データの取得に失敗しました</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
