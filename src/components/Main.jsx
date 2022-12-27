import React, {Component} from "react";
import styles from './Main.module.css'
class Main extends Component {
    render(){
        return(
            <div>
                <div className={styles.main}>
                 {this.props.children}
                </div>
                
            </div>

        )
    }
}

export default Main;