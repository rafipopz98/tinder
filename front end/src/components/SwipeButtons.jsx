import "./SwipeButtons.css";
// import ReplayIcon from '@mui/material'
import { IconButton } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import CloseIcon from "@mui/icons-material/Close";
import StarRateIcon from "@mui/icons-material/StarRate";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import FavoriteIcon from "@mui/icons-material/Favorite";
function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <div className="btnns">
        <IconButton className="sb-repeat">
          <ReplayIcon fontSize="Large" />
        </IconButton>
        <IconButton className="sb-left">
          <CloseIcon fontSize="Large" />
        </IconButton>
        <IconButton className="sb-star">
          <StarRateIcon fontSize="Large" />
        </IconButton>
        <IconButton className="sb-right">
          <FavoriteIcon fontSize="Large" />
        </IconButton>
        <IconButton className="sb-lightning">
          <FlashOnIcon fontSize="Large" />
        </IconButton>
      </div>
    </div>
  );
}

export default SwipeButtons;
