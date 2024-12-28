import CTA from './CTA'
import logo from '../images/logo.jpg'
function Profile(){
    return(
        <div className="profile">
            <div className="profile-img">
                <img src={logo} alt="profile-img" />
            </div>
            <div className="profile-info">
                <p className="profile-name">NG CustomWare</p>
                <p className="profile-occupation"></p>
                <p className="profile-website">nextgencustomware.ca</p>
            </div>

            <CTA />
        </div>
    );
}
export default Profile;