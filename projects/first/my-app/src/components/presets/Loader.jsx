import load from './Spinner-1s-200px.svg'
const Loader = (props) => {
  return <div style={{ position: 'absolute', left: '50%', top: '41%' }}>
    <img src={load} />
  </div>

}

export default Loader;