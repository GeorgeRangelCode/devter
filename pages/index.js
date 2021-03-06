import { useEffect, useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { colors } from "../styles/theme";
import Button from "../components/Button";
import GitHub from "../components/Icons/GitHub";
import { loginWithGithub, onAuthStateChanged } from "../firebase/client";

export default function Home() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGithub()
      .then((user) => setUser(user))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Head>
        <title>Devter </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppLayout>
        <section>
          <img src="/devter-logo.png" alt="logo" />
          <h1>Devter</h1>
          <h2>
            Talk about development <br /> with developers 👩‍💻🧑‍💻
          </h2>
          <div>
            {user === null && (
              <Button onClick={handleClick}>
                <GitHub fill="#fff" width={24} height={24} /> Login with GitHub
              </Button>
            )}
            {user && user.avatar && (
              <div>
                <img src={user.avatar} />
                <strong>{user.username}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>

      <style jsx>{`
        section {
          display: grid;
          height: 100%;
          place-content: center;
          place-items: center;
        }

        div {
          margin-top: 16px;
        }

        img {
          width: 120px;
        }
        h1 {
          color: ${colors.primary};
          font-weight: 800;
          margin-bottom: 0;
        }

        h2 {
          color: ${colors.secondary};
          font-size: 21px;
          margin: 0;
        }
      `}</style>
    </>
  );
}
