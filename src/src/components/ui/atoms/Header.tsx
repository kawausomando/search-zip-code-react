import React from 'react';

function Header(props: { text: string }) {
  return (
    <h1>{props.text}</h1>
  );
}

export default Header;
