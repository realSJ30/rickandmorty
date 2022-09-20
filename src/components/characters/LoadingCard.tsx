import { MdWorkspacesFilled } from "react-icons/md";

function LoadingCard() {
  return (
    <div className="column is-4">
      <div className="card is-shady">
        <div className="card-image">
          <figure className="image is-4by3">
            <img
              src={"https://rickandmortyapi.com/api/character/avatar/19.jpeg"}
              alt={"Loading"}
            ></img>
          </figure>
        </div>
        <div className="card-content">
          <div className="content">
            <span className="icon-text level-left has-gap-1">
              <MdWorkspacesFilled className={"has-text-light"} size={20} />
              <span></span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoadingCard;
