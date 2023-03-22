import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { getUsername } from './GetRepoSlice';

function UsernameInput() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    dispatch(getUsername({ username }));
  }

  function onInputChange(event) {
    setUsername(event.target.value);
  }

  return (
    <Form style={{ padding: 40, maxWidth: 300 }} onSubmit={onSubmit} className='usernameForm'>
      <Form.Text id="helpBlock" muted>
        Find repositories:
      </Form.Text>
      <Form.Label htmlFor="inputPassword5"></Form.Label>
      <Form.Control
        placeholder="Github username"
        type="input"
        id="input5"
        value={username}
        onChange={onInputChange}
      />
      <Button type="submit" style={{ margin: 25 }} className='submitBtn'>
        Submit
      </Button>
    </Form>
  );
}

export default UsernameInput;