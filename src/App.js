import logo from './logo.svg';
import styles from './App.module.css'
import Header from './components/Header';
import Navigator from './components/Navigator';
import Main from './components/Main';
import SubContent from './components/SubContent';
import Advertisement from './components/Advertisement';
function App() {
  return (
    <div className={styles.App}>
      <Header/>
      <div className={styles.contenedor}>
      <Navigator />
      <Main>
      <div className={styles.contenedor}>
        <SubContent/>
        <SubContent/>
        <SubContent/>
      </div>
        <Advertisement/>
      </Main>
      </div>

    </div>
  );
}

export default App;
