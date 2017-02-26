import React from 'react';
import styles from'./footer.scss';

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p className={styles.paragraph}>Footer content</p>
            </footer>
        )
    }
}

export default Footer;