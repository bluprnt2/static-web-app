import React from 'react';

function App() {
  const value = 'Take me to your leader';
  return <div><div>MenuBar</div><div>Hello World. {value}</div></div>;
}

class MenuBar extends React.Component {
  render() {
    const menuItems = ["home", "menu", "location", "contact"];
    const listItems = menuItems.map((item) => {
      return <li>{item}</li>
    });
    return <ul>{listItems}</ul>
  }
}

export default App;
