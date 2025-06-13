import { IconCoffee } from '@tabler/icons-react';
import styles from '@/app/styles/page.module.css';

const BuyMeCoffee = () => {
    return (
        <a
            className={styles.buyMeACoffee}
            href="https://www.donationalerts.com/r/andcool_systems"
            target="_blank"
        >
            <IconCoffee />
            <p>Buy me a coffee</p>
        </a>
    );
};

export default BuyMeCoffee;
