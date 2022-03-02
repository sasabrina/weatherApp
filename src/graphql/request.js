import { gql } from "@apollo/client";

export const GET_CITIES = gql`
  query getCities($id: [String!]) {
    getCityById(id: $id) {
      id
      name
      weather {
        summary {
          icon
        }
        temperature {
          actual
        }
        timestamp
      }
    }
  }
`;

export const GET_CITY = gql`
  query getCity($cityId: [String!]) {
    getCityById(id: $cityId) {
      id
      name
      country
      weather {
        summary {
          icon
          title
          description
        }
        temperature {
          actual
          min
          max
        }
        timestamp
      }
    }
  }
`;

export const SEARCH_CITY = gql`
  query searchCity($name: String!) {
    getCityByName(name: $name) {
      id
      name
      country
      weather {
        summary {
          icon
          title
          description
        }
        temperature {
          actual
          min
          max
        }
        timestamp
      }
    }
  }
`;
