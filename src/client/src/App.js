import React from 'react';
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Johndrew Out of Milk</h1>
      <Query
        query={gql`
          {
            items {
              name
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error || !data.items) {
            console.error(error, data);
            return <p>Error :(</p>;
          }
          return <p>There are {data.items.length} items in the database</p>
        }}
      </Query>
    </div>
  );
}

export default App;
