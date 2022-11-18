import { NextPage } from 'next';
import styles from '../styles/pages/cadastro.module.css';
import copyIcon from "../public/copyIcon.svg"


const Cadastro: NextPage = () => {
  return (
    <>
    <div className={styles.container}>
      <div className={styles.TxtEdit}>
        <div className={styles.greeting}>
          <label>Muito bom ter você com a gente, <b>Jorginho</b>!</label>
        </div>
      </div>
      <div className={styles.center}>
        <div>
          <input className={styles.inputTeam} type='text' placeholder="NOME DA EQUIPE" required={true} id="equipe" /* value={values.login} onChange={change} */ />
        </div>
        <div >
          <button className={styles.SubmitButton} type="submit">
            INSCREVER
          </button>
        </div>
        <div className={styles.CopyTeamLink}>
          <input type='text' className={styles.CopyTeamText} placeholder='COPIAR LINK DE CONVITE'/>
          <img className={styles.inviteTeam}  src={copyIcon}/> 
        </div>
        // usar um onClick para clicar no input e copiar
      </div>
    </div>
    </>
  )
}

export default Cadastro;