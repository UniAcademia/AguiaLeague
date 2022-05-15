import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from 'styles/auth/autenticar.module.css';
import { api } from 'services/api';

const Autenticar: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    const code = router.query.code;
    api.get(`/auth/autenticar/${code}`).then((res) => {
      console.log(res);
    });
  }, [router.isReady, router.query.code]);

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Autenticando, por favor aguarde.</h1>
    </div>
  );
};
export default Autenticar;
