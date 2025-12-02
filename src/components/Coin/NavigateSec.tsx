import { IconButton } from "@mui/material";
import React, {  useState } from "react";
import {
  toggleBookmarkCoin,
  toggleLikeCoin,
} from "../../services/coin/likeService";
import handleShare from "../../services/coin/share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useUser } from "../../utils/Context/UserProvider";
import type { OldMarket } from "../../utils/types/markets";

interface CoinStats {
  like: boolean;
  bookmark: boolean;
}
function NavigateSec({ coin }: { coin: OldMarket }) {
  const { user } = useUser();
  const [{ like, bookmark }, setCoinStatus] = useState<CoinStats>({
    like: false,
    bookmark: false,
  });

  return (
    <div className="flex items-cetner gap-2">
      <IconButton
        onClick={() =>
          toggleLikeCoin(
            coin?.symbol as string,
            user?.id as string,
            like,
            setCoinStatus
          )
        }
      >
        {like ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </IconButton>
      <IconButton
        onClick={() =>
          toggleBookmarkCoin(
            coin?.symbol as string,
            user?.id as string,
            bookmark,
            setCoinStatus
          )
        }
      >
        {bookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />}
      </IconButton>

      <IconButton onClick={handleShare}>
        <ShareIcon />
      </IconButton>
    </div>
  );
}

export default NavigateSec;
