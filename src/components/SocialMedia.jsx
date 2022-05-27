import React from 'react';
import { BsTwitter, BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
          <a href='https://github.com/hzk93'><BsGithub/></a>
        </div>
        <div>
            <a href="https://twitter.com/hzk_engr"><BsTwitter/></a>
        </div>
        <div>
            <a href='https://www.facebook.com'><FaFacebookF/></a>
        </div>
        <div>
            <a href='https://www.instagram.com/'><BsInstagram/></a>
        </div>
    </div>
  )
}

export default SocialMedia