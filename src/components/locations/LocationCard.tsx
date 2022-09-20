import React from "react";
import { IResult } from "../../interface/location.interface";

function LocationCard(props: any) {
  const location: IResult = props.location;
  return (
    <div className="box content">
      <article className="post">
        <h4>
          {location.name}: {location.dimension}
        </h4>
        <div className="tag">{location.type}</div>
        <br />
        
        {/* <div className="media">
          <div className="media-left is-mutliline">
            <p className="image is-32x32">
              <img src="https://rickandmortyapi.com/api/character/avatar/38.jpeg" />
            </p>
            <p className="image is-32x32">
              <img src="https://rickandmortyapi.com/api/character/avatar/38.jpeg" />
            </p>
          </div>
        </div> */}
      </article>
    </div>
  );
}

export default LocationCard;
