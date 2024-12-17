import React, { useEffect, useState } from "react";

const StarIcon = ({ coinId }) => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    if (window.localStorage.coinList) {
      let favlist = window.localStorage.coinList.split(",");
      if (favlist.includes(coinId)) {
        setLike(true);
      }
    }
  }, []);

  const idChecker = (id) => {
    let favList = null;

    if (window.localStorage.coinList) {
      favList = window.localStorage.coinList.split(",");
    }

    if (favList) {
      if (favList.includes(id)) {
        window.localStorage.coinList = favList.filter(
          (coin) => !coin.includes(id)
        );
        setLike(false);
      } else {
        window.localStorage.coinList = [...favList, id];
        setLike(true);
      }
    } else {
      window.localStorage.coinList = coinId;
      setLike(true);
    }
  };

  return (
    <img
      src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg"}
      alt="star-icon"
      onClick={() => idChecker(coinId)}
    />
  );
};

export default StarIcon;
