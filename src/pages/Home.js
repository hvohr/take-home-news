import './pages.css'


function Home() {
  return (
    <header>
      <img className='site-logo' src={require('../components/images/handshake.png')} />
      <h1 className='title'>CorporateChronicle</h1>
      {/* <p className='tagline'>"Navigating the world of business, one headline at a time"</p> */}
    </header>
  )
}

export default Home