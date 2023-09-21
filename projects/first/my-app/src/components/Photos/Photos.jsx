import styles from './Photos.module.css';
const Photos = (props) => {
    console.log(props, 'dw')
    let pagesCount = Math.ceil(props.totalPhotosCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
return <div className={styles.common}>
{props.photos.map(user => user.photos.small !== null?<img src={user.photos.small ? user.photos.small:user.photos.large} />:console.log('nal'))}
    <div>
    <button onClick={()=>props.onChangePage(props.currentPage)}>Back</button>
    <button  onClick={()=>props.onChangePage(props.currentPage)}>Forward</button>
    <div className={styles.boxForPages}>
    </div>
    </div>
</div>
}

export default Photos;