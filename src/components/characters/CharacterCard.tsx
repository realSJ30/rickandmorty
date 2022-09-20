import { ICharacter } from "../../interface/character.interface";
import { MdWorkspacesFilled } from "react-icons/md";
import { StatusEnum } from "../../enums/_.enums";

function CharacterCard(props: any) {
  const character: ICharacter = props.character;
  return (
    <div className="column is-4" key={character.id}>
      <div className="card is-shady">
        <div className="card-image">
          <figure className="image is-4by3">
            <img src={character.image} alt={character.name}></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <h4>{character.name}</h4>
            <span className="icon-text level-left has-gap-1">
              <MdWorkspacesFilled
                className={
                  character.status === StatusEnum.ALIVE
                    ? "has-text-success"
                    : character.status === StatusEnum.DEAD
                    ? "has-text-danger"
                    : "has-text-warning"
                }
                size={20}
              />
              <span>
                {character.status} - {character.species}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CharacterCard;
