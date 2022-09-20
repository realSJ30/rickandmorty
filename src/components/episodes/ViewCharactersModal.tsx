import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
// import { ICharacter } from "../../interface/episodes.interface";
import "./episodes.css";
import { ICharacter } from "../../interface/character.interface";

function ViewCharactersModal(props: any) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      height: "500px",
      width: "50%",
    },
  };
  const { isOpen, closeModal, characters } = props;

  const renderCharacters = () => {
    const chars: ICharacter[] = characters;

    return chars.map((character: ICharacter) => (
      <div className="character-card">
        <p className="image is-64x64">
          <img src={character.image} />
        </p>
        <div className="character-details">
          <p>
            {character.name} | {character.status}
          </p>
          <p>{character.gender}</p>
          <p>{character.species}</p>
        </div>
      </div>
    ));
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} style={customStyles}>
      <h1 className="title is-3">Episode Cast</h1>
      <p><span className="has-text-weight-semibold">{characters.length}</span> total casts</p>
      {renderCharacters()}
    </Modal>
  );
}

export default ViewCharactersModal;
