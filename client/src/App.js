// src/App.js
import { Routes, Route } from 'react-router-dom';
import TodoList from './components/TodoList';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editTodo, deleteTodo } from './features/todo/todoSlice';
import { auth } from './firebase';
import Home from './components/Home';
import Contact from './components/Contact';
import Discover from './components/Discover';
import NotFound from './components/NotFound';
import Login from './components/Login';

function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);
  const [showAllTodos] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []);
  const handleEditTodo = (id, title, description, fromDate, toDate) => {
    dispatch(editTodo({ id, title, description, fromDate, toDate }));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div>
      <Routes>
        <Route exact path='/login' element={<Login/>} />
        <Route exact path="/" element={
            user !== null ? (
              <Home />
            ) : (
              // Redirect to the /login route if the user is not authenticated
              <Login />
            )
          } />
        <Route exact path="/tripplans" element={<TodoList todos={todos}
          onEdit={handleEditTodo}
          onDelete={handleDeleteTodo}
          showAllTodos={showAllTodos} />} />
          <Route exact path="/discover" element={<Discover />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="/bad-path" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
