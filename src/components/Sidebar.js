import {Link} from 'react-router-dom';
import OutsideAlerter from './OutsideAlerter'

const Sidebar = ({isOpened, flagHandle}) => {
    function handleClose()  {
        flagHandle(false); // Call the callback to update state in Home
    }
    const sidebarContent = (
        <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left"
             style={{ display: "block", width: "30%", minWidth: "300px" }}
             zindex={2}
             id="mySidebar"
        >
            <Link to="/" onClick={handleClose} className="w3-bar-item w3-button">Close Menu</Link>
            <Link to="/" onClick={handleClose} className="w3-bar-item w3-button">Food</Link>
            <Link to="/" onClick={handleClose} className="w3-bar-item w3-button">About</Link>
        </nav>
    );
    return isOpened && <OutsideAlerter flagHandle={flagHandle}>{sidebarContent}</OutsideAlerter>;
}

export default Sidebar;