import * as React from "react";
import styles from "./app.module.css";
import * as Discord from "discord.js";
import { useEffect, useState } from "react";

export function App() {
  const [client, setClient] = useState<Discord.Client>();

  useEffect(() => {
    const client = new Discord.Client();
    setClient(client);
  }, []);

  return (
    <div className={styles.container}>
      {client?.user && <>Logged in as {client.user.tag}</>}
    </div>
  );
}
