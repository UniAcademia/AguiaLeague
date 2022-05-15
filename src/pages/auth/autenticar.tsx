import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/auth/autenticar.module.css';
import { api } from 'services/api';

const Autenticar: NextPage = () => {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(undefined);
  const [userObject, setUserObject] = useState<object | undefined>(undefined);

  useEffect(() => {
    if (!router.isReady) return;
    const code = router.query.code;
    api.get(`/auth/autenticar/${code}`)
      .then((res) => {
        setIsAuthenticated(true);
        setUserObject(res.data);
      })
      .catch(() => {
        setIsAuthenticated(false);
      });
  }, [router.isReady, router.query.code]);

  const texto = () => {
    switch (isAuthenticated) {
      case true:
        return 'Autenticado';
      case false:
        return 'Erro ao autenticar';
      default:
        return 'Autenticando, por favor aguarde.'
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>
        {texto()}
      </h1>
      {
        userObject &&
          <pre className={styles.userObject}>
            {JSON.stringify(userObject, null, 2)}
          </pre>
      }
    </div>
  );
};
export default Autenticar;
