import styles from '../styles/components/Inicial.module.css'
import Image from 'next/image'
import img1 from "../public/faculdade.svg"
import img2 from "../public/controle.svg"
import img3 from "../public/cofre.svg"
import img4 from "../public/csgo.svg"
import img5 from "../public/luminosity.svg"
import img6 from "../public/luminosity2.svg"
import img7 from "../public/torneio.svg"


export function Inicial() {
  return <div className={styles.base}>
  <div className={styles.parte1}>
      <p className={styles.titulo}>Não fique de fora.<br/>Faça parte do <strong>Águia League</strong>.</p>
      <p className={styles.subtitulo}>Não fique de espectador. Participe agora do torneio entre atléticas da <strong>Águia
              League</strong>, dê
          o seu melhor no <strong>CSGO</strong>, <strong>LOL</strong> e <strong>VALORANT</strong> e ganhe prêmios
      </p>
      <div className={styles.cont}>
          <button className={styles.botao1}>Saiba Mais   </button>
          <button className={styles.botao2}>INSCREVA-SE</button>
      </div>

      <p className={styles.account}><strong>Já tenho uma conta</strong></p>
      <hr />
  </div>

  <div className={styles.parte2}>
      <p className={styles.titulo}>
          O que é o <strong>Águia League</strong>?
      </p>
      <Image src={img1} className={styles.img1} />
      <p className={styles.subtitulo}>O <strong>Águia League</strong> é um projeto de extensão de estudantes da <strong>Uniacademia</strong> que tem o objetivo
          de realizar
          competições de <strong>e-sports</strong> entre atléticas
      </p>
      <Image src={img2} className={styles.img2} />

      <p className={styles.subtitulo}>O projeto surgiu com a necessidade de organizar as competições de <strong>e-sports</strong> entre <strong>atléticas</strong>, o que foi aliado a uma ação beneficente à <strong>sociedade</strong>
      </p>
      <Image src={img3} className={styles.img3} />
      <p className={styles.subtitulo}>E é por isso que os <strong>fundos</strong> arrecadados pela taxa de inscrição são
          destinados à
          instituição <strong>Conexão do Bem</strong>, além de compor parte da <strong>premiação</strong> final
      </p>
  </div>

  <div className={styles.parte3}>
    <hr />

      <p className={styles.titulo}>Como funcionam os <strong>torneios</strong>?
      </p>
      <p className={styles.subtitulo}>Os torneios são no <strong>formato suíço</strong>, assim, mesmo que o seu time perca
          ainda é possível
          fazer parte da <strong>final</strong></p>
      <p className={styles.subtitulo}>O torneio é dividido em duas chaves (<strong>superior</strong> e <strong>inferior</strong>). Ao perder, o time é levado à
          chave inferior, em que tem uma <strong>segunda chance</strong>
      </p>
      <div className={styles.torneio}>
        <Image  src={img7}/>
      </div>
      <hr />
  </div>

  <div className={styles.parte4}>
    <p className={styles.titulo}>Quais são os <strong>jogos</strong> disponíveis nos torneios?</p>
      <p className={styles.subtitulo}> Os torneios do <strong>Águia League</strong> terão os mais renomados jogos da
          categoria <strong>FPS</strong> e <strong>MOBA</strong> do país.</p>
      <p className={styles.subtitulo}>Os torneios serão dos jogos:</p>
      <p className={styles.subtitulo}>1. Counter Strike <strong>(CS:GO)</strong> <br/>
          2. League of Legends <strong>(LOL)</strong><br/>
          3. Valorant</p>
          <div><Image src={img4} />
</div>
<hr />  </div>

  <div className={styles.parte5}>
      <p className={styles.titulo}>Quais são as <strong>premiações</strong> dos torneios?</p>
      <div><Image  src={img5}/>
</div>

<hr />  </div>

<div className={styles.parte6}>
    <div>
        <Image src={img6}/>
    </div>
</div>

</div>;
}
