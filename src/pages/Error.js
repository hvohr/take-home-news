import { Link } from 'react-router-dom'

function Error() {
  return (
    <section className='error-container'>
      <Link className='return-home-error' to='/'>Return Home</Link>
      <img className='fetch-error' src={require('../components/images/3747371.jpg')} />
    </section>
  )
}

export default Error