import { useQuery } from "react-query";
import { ExecGraphQL } from "../../graphql/client/client";
import { listCharactersQueryByPage } from "../../graphql/gql/characters.gql";
import { ICharacter, IInfo } from "../../interface/character.interface";
import CharacterCard from "./CharacterCard";
import "./character.css";
import LoadingCard from "./LoadingCard";
import { FiSearch } from "react-icons/fi";

import React, { useState } from "react";
import Pagination from "../pagination/Pagination";

function CharacterList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data: charactersData, isLoading } = useQuery(
    ["LIST_CHARACTERS", page, search],
    async () => ExecGraphQL(listCharactersQueryByPage(page, search))
  );

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const info: IInfo = charactersData?.characters?.info || {
    count: 1,
    pages: 1,
  };

  const characters = () => {
    const characters: ICharacter[] = charactersData?.characters?.results;
    if (isLoading) {
      return (
        <>
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </>
      );
    }
    return characters?.map((character: ICharacter, indx: number) => (
      <CharacterCard key={indx} character={character} />
    ));
  };

  return (
    <section className="container">
      <div className="container">
        <div className="card">
          <div className="card-content">
            <div className="content">
              <div className="control has-icons-left has-icons-right">
                <input
                  onChange={handleSearch}
                  className="input is-large"
                  type="search"
                  placeholder="Search character"
                />
                <span className="icon is-medium is-black is-left">
                  <FiSearch />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="block"></div>
      <div className="columns is-multiline features">{characters()}</div>
      <div className="block"></div>
      <Pagination currentPage={page} pageSize={info.pages} setPage={setPage} />
      <div className="block"></div>
    </section>
  );
}

export default CharacterList;
