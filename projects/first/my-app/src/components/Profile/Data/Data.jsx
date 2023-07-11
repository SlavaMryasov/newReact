import styles from './Data.module.css'
import Posts from './Posts/Posts';
import User from './User/User';

const Data = () => {
  return (
    <div>
      <div className={styles.img}>
        <img className={styles.background} src="https://fullhdoboi.ru/wp-content/uploads/_ph/6/283114741.jpg" />
      </div>
      <div className={styles.data}>
        <User />
        <Posts />
      </div>
    </div>
  )
}

export default Data;