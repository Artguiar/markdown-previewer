import React from 'react';
import TabsContainer from './tabs-container';

const App = () => {
  return (
    <React.Fragment>
      <header>
        <h1 className="app-heading">Markdown Previewer</h1>
      </header>
      <main>
        <TabsContainer />
      </main>
      <footer>Created by <a href="https://artguiar.github" target="_blank">Arthur Aguiar</a> &copy; {new Date().getFullYear()}</footer>
    </React.Fragment>
  );
}

export default App;
