import { bnw } from '../data'
// import LazyLoad from 'react-lazy-load'
const BlackWhite = () => {
  return (
    <div>
      {bnw.map((data) => (
        <img src={data} alt="..." loading="lazy" width="100%" height="100%" />
      ))}
    </div>
  )
}

export default BlackWhite