import React, { useState, useEffect } from "react";
import "../css/UserRepository.css";
import RepositoryDetails from "./RepositoryDetails";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";




const UserRepositories = ({ username }) => {
  const [repositories, setRepositories] = useState([])
console.log(username)
useEffect(() => {
  if (username.length!=0){
      fetch(`https://api.github.com/users/${username}/repos`)
        .then((response) => response.json())
        .then((data) => {
          setRepositories(data);
          console.log("api ran")
        }) 
      }
      }, [username]);
    
    if (username.length===0){
      return
    }else{
    return (
      <div className="parentDiv">
        <h1>{username}'s Repositories</h1>
        <div className="repo-card">
          <Row xs={1} sm={2} md={3}>
            {Array.isArray(repositories) && repositories.map((repository) => (
              <Col className="container" key={repository.id}>
                <Card style={{ width: '17rem',height:'17rem' }} className="repo-card">
                  <Card.Body className="repo-card-content">
                    <Card.Title >
                      <a  className="repo-title" 
                          id="repoTitle"
                          style={{padding:2}}
                          href={repository.html_url}
                          target="_blank"
                          rel="noreferrer"
                      >
                        {repository.name}
                      </a>
                    </Card.Title>
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
  }
};

export default UserRepositories;