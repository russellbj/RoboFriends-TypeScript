import * as React from 'react';
import Card from './Card';
import {IRobot} from '../containers/App.js';

interface ICardListProps {
  robots: Array<IRobot>
}

let CardList: React.SFC<ICardListProps> = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;