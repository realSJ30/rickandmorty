import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "react-query";
import { ExecGraphQL } from "../../graphql/client/client";
import { listEpisodesQueryByPage } from "../../graphql/gql/episodes.gql";
import {
  ICharacter,
  IEpisodes,
  IResult,
} from "../../interface/episodes.interface";
import { Info } from "../../interface/location.interface";
import Pagination from "../pagination/Pagination";
import EpisodeCard from "./EpisodeCard";
import ViewCharactersModal from "./ViewCharactersModal";

function EpisodeList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const closeModal = () => {
    setToggleModal(false);
  };
  const openModal = () => {
    setToggleModal(true);
  };

  const { data: episodeData, isLoading } = useQuery(
    ["LIST_EPISODES", page, search],
    async () => ExecGraphQL(listEpisodesQueryByPage(page, search))
  );
  console.log(episodeData);

  const renderEpisodes = () => {
    const episodes: IEpisodes = episodeData?.episodes;
    console.log(episodes);

    if (isLoading) {
      return <>Loading...</>;
    }

    return episodes.results?.map((episode: IResult) => (
      <EpisodeCard
        episode={episode}
        openModal={openModal}
        setCharacters={setCharacters}
      />
    ));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const info: Info = episodeData?.episodes?.info || {
    count: 1,
    pages: 1,
  };

  return (
    <section className="container">
      <ViewCharactersModal closeModal={closeModal} isOpen={toggleModal} characters={characters}/>
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
      <div className="">{renderEpisodes()}</div>
      <div className="block"></div>
      <Pagination currentPage={page} pageSize={info.pages} setPage={setPage} />
      <div className="block"></div>
    </section>
  );
}

export default EpisodeList;
