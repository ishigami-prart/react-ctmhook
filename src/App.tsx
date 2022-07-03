import axios from "axios";
import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "じゃけえ",
  email: "aaa",
  addredd: "bbbb"
};

export default function App() {
  const onClickFetchUser = () => {
    axios.get("https://jsonplaceholder.typicode.com/users");
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得</button>
    </div>
  );
}
