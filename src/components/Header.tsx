import virtual from '../assets/virtual-glasses.png'

export function Header(){
  return(
    <div className='header-contain'>
      <div className="main-infos">
        <h4>Gigaland Market</h4>
        <h1>Create, sell or collect digital items.</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elitipsum dolor sit, amet consectetur adipisicing elit.</p>
        <button>Explore</button>
        <div className="follows">
          <div className="follow">
            <span>94215</span> <p>Collections</p>
          </div>
          <div className="follow">
            <span>27k</span><p>Auditions</p>
          </div>
          <div className="follow">
            <span>4k</span><p>NFT</p>
          </div>
        </div>
      </div>
      <div className="image">
        <img src={virtual} alt="" />
      </div>
    </div>
  )
}