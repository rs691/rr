import styles from './pages.module.css';




function CardTest(){
    return(
        <div className={styles.card}>
            <img src="https://via.placeholder.com/150" alt="Avatar" />
            <div className="container">
                <h4><b>John Doe</b></h4>
                <p>Architect & Engineer</p>
            </div>
        </div>
    );
}
export default CardTest