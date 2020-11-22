import Button from 'components/Button';
import React from 'react';
import { BiCartAlt } from 'react-icons/bi';

const Home = () => {
  return (
    <div>
      <Button className="m-2" size="sm">
        Button
      </Button>
      <Button className="m-2" size="md">
        Button
      </Button>
      <Button className="m-2" size="lg">
        Button
      </Button>
      <Button className="m-2 inline-flex items-center" size="sm">
        <BiCartAlt />
        Button
      </Button>
      <Button className="px-4 py-4">
        <BiCartAlt />
      </Button>
      <Button className="m-2" size="sm">
        Button
      </Button>
    </div>
  );
};

export default Home;
