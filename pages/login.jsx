import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Content from "../components/ui/Content";
import Button from "../components/ui/Button";

const Login = () => {
  const { data: session } = useSession();

  if (session) {
    return (
      <Content>
        <div>
          <p>Welcome, {session.user.name}</p>
          <Button>
            <button
              onClick={() => {
                return signOut();
              }}
            >
              Sign out
            </button>
          </Button>
        </div>
      </Content>
    );
  } else {
    return (
      <Content>
        <div>
          <p>You are not signed in</p>
          <Button>
            <button onClick={() => signIn()}>Sign in</button>
          </Button>
        </div>
      </Content>
    );
  }
};

export default Login;
