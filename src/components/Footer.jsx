import './../style/footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="primary-footer">
        <div className="footer-contacts">
          <div className="contact">
            <a href="mailto:lampteyanastasia@gmail.com">lampteyanastasia@gmail.com</a>
            <a href="tel:+233205171333">+233 20 517 1333</a>
          </div>
          <div className="socials">
            <a href="#">INSTAGRAM</a>
            <a href="#">GITHUB</a>
            <a href="#">LINKEDIN</a>
          </div>
        </div>

        <div className="footer-nav">
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            <li><NavLink to='/users'>Users</NavLink></li>
            <li><NavLink to='/contact'>Contact</NavLink></li>
          </ul>
          <div className="copyright">Curious about our Privacy or Cookies? © 2022 Mighty</div>
        </div>
      </div>
      <div className="secondary-footer">
        Mighty has been proudly headquartered in the heart of Accra, Ghana since 2020. We have teammates in Kenya, Pennsylvania, Rwanda and Nigeria. We plan, design, and develop content-centered websites and digital products for clients in East Africa , West Africa, and everywhere accross the globe. Looking for our office? We’re located at 22 Boi Street, North Kaneshie, Accra Ghana.
      </div>
    </div>
  )
}

export default Footer
