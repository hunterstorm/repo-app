import React from "react";

const RepositoryDetails = ({ repository }) => {
  return (
    <div>
      <p>{repository.description}</p>
      <a href={repository.html_url}>Link to Repository</a>
    </div>
  );
};

export default RepositoryDetails;