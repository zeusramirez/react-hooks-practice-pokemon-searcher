import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard(props) {

  const [frontImage, setFrontImage] = useState (true)
  const handleClick = () => {
    setFrontImage(frontImage => !frontImage)
  }
  const {name, id, sprites, hp} = props
  return (
    <Card>
      <div onClick={handleClick}>
        <div className="image">
          <img src={frontImage ? sprites.front:sprites.back} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
