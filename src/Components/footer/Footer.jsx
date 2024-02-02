import React from 'react'
import './footer.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

function Footer() {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="container-footer">
                    <div className="contact">
                        <p>Contact Me:</p>
                        <p>+99361593165</p>
                        <p>yagshy.script@gmail.com</p>
                    </div>
                    <div className="social-accounts">
                        <a href="#">
                        <TwitterIcon sx={{ color: 'white', fontSize:36, '&:hover': { color: '#1DA1F2' } }} />
                        </a>
                        <a href="#">
                        <TelegramIcon sx={{ color: 'white', fontSize:36, marginLeft:2, '&:hover': { color: '#0088cc' } }}  />
                        </a>
                        <a href="#">
                        <GitHubIcon sx={{ color: 'white', fontSize:36, marginLeft:2, '&:hover': { color: '#171515' } }}   />
                        </a>
                        <a href="#">
                        <InstagramIcon sx={{ color: 'white', fontSize:36, marginLeft:2, '&:hover': { color: '#d62976 ' }  }}  />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer