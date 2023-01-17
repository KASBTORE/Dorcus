import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function LikeButton() {
  const [liked, setLiked] = useState(false);

  const handleClick = () => {
    setLiked(!liked);
  }

  return (
    <button onClick={handleClick}>
      {/* <FontAwesomeIcon icon={faHeart} className={liked ? 'text' : 'text'} /> */}
      <FaRegHeart className={liked ? 'text-black' : 'text-gray-400'}/>
    </button>
  );
}

export default LikeButton;