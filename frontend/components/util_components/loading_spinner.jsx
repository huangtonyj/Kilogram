import React from 'react';
import { css } from 'react-emotion';
import { ClipLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

class LoadingSpinner extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className='sweet-loading'>
        <ClipLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'#3897f0'}
        />
      </div>
    );
  }
}

export default LoadingSpinner;