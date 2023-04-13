import React from "react";

import { useSession, signIn, signOut } from "next-auth/react";
import Content from "../components/ui/Content";
import Button from "../components/ui/Button";

const Login = () => {
  const { data: session } = useSession();

  return (
    <Content>
      {session ? (
        <div>
          <p className="text-center">Welcome, {session.user.name}</p>
          <div className="flex justify-center">
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
        </div>
      ) : (
        <div>
          <p className="text-center">You are not signed in</p>
          <div className="flex justify-center">
            <Button>
              <button onClick={() => signIn()}>Sign in</button>
            </Button>
          </div>
        </div>
      )}
    </Content>
  );
};

export default Login;
