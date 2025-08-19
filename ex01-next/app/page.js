//import Image from "next/image";
//import styles from "./page.module.css";

import { Profile } from "../components/Profile";
import { TodoList } from "../components/TodoList";

export default function Home() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <br />
      <Profile />
      <Profile />
      <Profile />
      <TodoList />
    </section>
    
    
  );
}
