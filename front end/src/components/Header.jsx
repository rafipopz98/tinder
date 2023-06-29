import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import { IconButton } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
function Header() {
  return (
    <div className="header">
      <IconButton>
        <PersonIcon fontSize="Large" className="headerProfile" />
      </IconButton>
      <img
        src="https://static.vecteezy.com/system/resources/previews/021/460/424/original/tinder-logo-transparent-free-png.png"
        className="headerLogo"
      />
      <IconButton>
        <ForumIcon className="headerMsg"  fontSize="Large"/>
      </IconButton>
    </div>
  );
}

export default Header;
