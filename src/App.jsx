import React from 'react';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black border-t">
      <AddTodo />
      <Todos />
    </div>
  );
}

export default App;
