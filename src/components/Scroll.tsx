import * as React from 'react';

interface IScrollProps{
	children?: JSX.Element;
}

let Scroll: React.SFC<IScrollProps> = (props) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;