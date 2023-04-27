import Google from '../../assets/google.png'
import Dropbox from '../../assets/dropbox.png'
import Shopify from '../../assets/shopify.png'
import Slack from '../../assets/slack.png'


import './brand.css';

const Brand = () => {
  return (
    <div className='gtp3__brand section__padding'>
      <div>
        <img src={Google} alt="google" />
      </div>
      <div>
        <img src={Dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={Shopify} alt="shopify" />
      </div>
      <div>
        <img src={Slack} alt="slack" />
      </div>
        
    </div>
  )
}

export default Brand
