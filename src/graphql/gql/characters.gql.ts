import { DocumentNode } from "graphql";
import gql from "graphql-tag";

export const listCharactersQueryByPage = (
  page: number,
  search: string
): DocumentNode => {
  const LIST_CHARACTERS: DocumentNode = gql`
    query {
      characters(page: ${page}, filter:{ name: "${search}"}) {
        info {
          count
          pages
        }
        results {
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
  `;
  return LIST_CHARACTERS;
};
