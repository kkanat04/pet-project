import styles from './Menu.module.scss';
import CustomButton from '~/components/CustomButton/CustomButton';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <CustomButton to={'/trafficSources'}>Traffic sources</CustomButton>
    </div>
  );
};

export default Menu;
