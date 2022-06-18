import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import TodoPage from './TodoPage';
import UserPage from './UserPage';

function App() {
  
  return (
    <>
    <div className="bg-gray-200 p-2">
    <Link className='mr-2 rounded-md p-1' to="/todo">Todo</Link>
    <Link className='mr-2 rounded-md p-1' to="/user">User</Link>
    </div>
    <Routes>
      <Route path="/todo" element={<TodoPage />}/>
      <Route path="user" element={ <UserPage/>}/>
    </Routes>
      
      </>
  );
}

export default App;