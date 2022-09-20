import React from "react";
import { IResult } from "../../interface/episodes.interface";
import ViewCharactersModal from "./ViewCharactersModal";

function EpisodeCard(props: any) {
  const episode: IResult = props.episode;
  return (
    <div className="box content">
      <article className="post">
        <h4>
          {episode.name} :{" "}
          <span className="subtitle is-6">{episode.air_date}</span>
        </h4>
        <div className="tag">{episode.episode}</div>
        <br />
        <br />
        <button
          onClick={() => {
            props.openModal();
            props.setCharacters(episode.characters);
          }}
          className="button is-small is-primary"
        >
          View Cast
        </button>   
      </article>
    </div>
  );
}

export default EpisodeCard;
