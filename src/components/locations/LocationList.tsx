import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useQuery } from "react-query";
import { ExecGraphQL } from "../../graphql/client/client";
import { listLocationQueryByPage } from "../../graphql/gql/location.gql";
import { ILocations, Info, IResult } from "../../interface/location.interface";
import Pagination from "../pagination/Pagination";
import LocationCard from "./LocationCard";

function LocationList() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const { data: locationsData, isLoading } = useQuery(
    ["LIST_LOCATIONS", page, search],
    async () => ExecGraphQL(listLocationQueryByPage(page, search))
  );
  console.log(locationsData);

  const renderLocations = () => {
    const locations: ILocations = locationsData?.locations;
    console.log(locations);

    if (isLoading) {
      return <>Loading...</>;
    }

    return locations.results?.map((location: IResult) => (
      <LocationCard location={location} />
    ));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearch(e.target.value);
  };

  const info: Info = locationsData?.locations?.info || {
    count: 1,
    pages: 1,
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
      <div className="">{renderLocations()}</div>
      <div className="block"></div>
      <Pagination currentPage={page} pageSize={info.pages} setPage={setPage} />
      <div className="block"></div>
      
    </section>
  );
}

export default LocationList;
