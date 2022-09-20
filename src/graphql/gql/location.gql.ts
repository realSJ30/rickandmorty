import { DocumentNode } from "graphql";
import gql from "graphql-tag";

export const listLocationQueryByPage = (
  page: number,
  search: string
): DocumentNode => {
  const LIST_LOCATIONS: DocumentNode = gql`
    query {
        locations(page: ${page}, filter:{ name: "${search}"}) {
        info {
          count
          pages
        }
        results {
            name
            dimension
            type
            residents {
              name
              image
            }
        }
      }
    }
  `;
  return LIST_LOCATIONS;
};
