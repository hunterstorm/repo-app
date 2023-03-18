import React, { useState, useEffect } from "react";
import "../css/UserRepository.css";
import RepositoryDetails from "./RepositoryDetails";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const UserRepositories = ({ username }) => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos`)
      .then((response) => response.json())
      .then((data) => setRepositories(data));
  }, [username]);

  return (
    <div className="parentDiv">
      <h1>{username}'s Repositories</h1>
      <div className="repo-card">
        <Row xs={1} sm={2} md={3}>
          {repositories.map((repository) => (
            <Col className="container" key={repository.id}>
              <Card style={{ width: '18rem',height:'18rem' }} className="repo-card">
                <Card.Body className="repo-card-content">
                  <Card.Title >
                    <a className="repo-title"
                      href={repository.html_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {repository.name}
                    </a>
                  </Card.Title>
                  <Card.Text>{repository.description}</Card.Text>
                  <Card.Text>
                    <strong>Language:</strong> {repository.language}
                  </Card.Text>
                  <Card.Text>
                    <strong>Stars:</strong> {repository.stargazers_count}
                  </Card.Text>
                  <RepositoryDetails repository={repository} />
                  
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default UserRepositories;