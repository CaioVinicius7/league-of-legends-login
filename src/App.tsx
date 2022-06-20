import { Sidebar } from "./components/Sidebar";
import { Banner } from "./components/Banner";

import "./global.css";
import styles from "./App.module.css";

function App() {
  return (
    <main className={styles.main}>
      <Sidebar />
      <Banner />
    </main>
  );
}

export default App;
