import React from 'react';
// import { Link } from 'react-router';
import Button from './button';

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        How Do you Feel Today?
        <Button text="Angry" />
        <Button text="Happy" />
        <Button text="Sad" />
        <Button text="Scared" />
      </div>
    );
  }
}

export default Home;
