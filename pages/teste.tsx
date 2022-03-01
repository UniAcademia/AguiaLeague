import type { NextPage } from 'next';
import { signIn, signOut, useSession } from 'next-auth/react';

const Teste: NextPage = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Token: {session?.accessToken} <br />
        Logado com o email: {session?.user?.email} <br />
        <button onClick={() => signOut()}>Deslogar</button>
      </>
    );
  }
  return (
    <>
      Não está logado <br />
      <button onClick={() => signIn('discord')}>Logar com o Discord</button>
    </>
  );
};

export default Teste;
