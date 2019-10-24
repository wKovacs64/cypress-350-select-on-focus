import * as React from 'react';

const IndexPage = () => {
  return <input defaultValue="42" onFocus={e => e.target.select()} />;
};

export default IndexPage;
