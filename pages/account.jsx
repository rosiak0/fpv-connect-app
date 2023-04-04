import { useSession, signOut } from "next-auth/react";
import Content from "../components/ui/Content";

const account = () => {
  const { data: session, status } = useSession({ required: true });

  if (status === "authenticated") {
    return (
      <Content>
        <div>
          <p>Welcome, {session.user.name}</p>
        </div>
      </Content>
    );
  } else {
    return (
      <Content>
        <div>
          <p>You are not signed in.</p>
        </div>
      </Content>
    );
  }
};

export default account;
