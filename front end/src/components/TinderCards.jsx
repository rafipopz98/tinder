import "./TinderCards.css";
import { useState } from "react";
import TinderCard from "react-tinder-card";
import '@react-spring/web';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Monkey D Luffy",
      img: "https://wallpapers.com/images/hd/anime-pictures-bj226rrdwe326upu.jpg",
    },
    {
      name: "Roronoa Zoro",
      img: "https://staticg.sportskeeda.com/editor/2022/10/fd2b9-16652598039107-1920.jpg",
    },
    {
      name: "Nami",
      img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2021/06/One-Piece-Nami-Climate-Baton-header.png",
    },
    {
      name: "Ussop",
      img: "https://wallpapercave.com/wp/wp1872449.png",
    },
    {
      name: "Chopper",
      img: "https://cdn5.vectorstock.com/i/1000x1000/28/14/doctor-chopper-cartoon-one-piece-anime-vector-44542814.jpg",
    },
    {
      name: "Franky",
      img: "https://staticc.sportskeeda.com/editor/2023/05/50b87-16836967920057-1920.jpg?w=840",
    },
    {
      name: "Brook",
      img: "https://cdn.dribbble.com/users/6626308/screenshots/17786375/untitled_artwork_11.png",
    },
    {
      name: "Jimbe",
      img: "https://i1.sndcdn.com/artworks-KhIj2uc0Db7Z2azn-zB8NHw-t500x500.jpg",
    },
  ]);
  const swipped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
    // setLastDirection(direction)
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swipped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.img})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
