import React from 'react';
import ReactDom from 'react-dom';
import App from './components/app';

const container = document.createElement('div');
document.body.appendChild(container);

ReactDom.render(<App />, container);
Inside of src create a components folder and inside of the component folder create a folder named app. Inside of the app folder create an index.js that has the following code:

components/app/index.js

import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
  }

 render() {
   return (
     <div>
        <h1>MERRRRRN</h1>
     </div>
   );
 }
}

export default App;