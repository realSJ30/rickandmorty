import { DocumentNode } from "graphql";
import gql from "graphql-tag";

export const listEpisodesQueryByPage = (
  page: number,
  search: string
): DocumentNode => {
  const LIST_EPISODES: DocumentNode = gql`
    query {
      episodes(page: ${page}, filter:{ name: "${search}"}) {
        info {
          count
          pages
        }
        results {
            name
            air_date
            episode
            characters {
              name
              status
              species
              type
              gender
              origin {
                dimension
                name
                type
              }
              location {
                name
              }
              image
            }
        }
      }
    }
  `;
  return LIST_EPISODES;
};
