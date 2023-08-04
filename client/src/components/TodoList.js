// src/components/TodoList.js
import React, { useState } from 'react';
import Navbar from './Navbar';
import "./TodoList.css"

function TodoList({ todos, onEdit, onDelete, showAllTodos }) {
  const [editedTodoId, setEditedTodoId] = useState(null);
  const [editedTitle, setEditedTitle] = useState('');
  const [editedDescription, setEditedDescription] = useState('');

  const handleEditButtonClick = (todo) => {
    if (editedTodoId === todo.id) {
      // If clicking "Edit" again for the same todo, save the changes and reset state
      onEdit(editedTodoId, editedTitle, editedDescription);
      setEditedTodoId(null);
      setEditedTitle('');
      setEditedDescription('');
    } else {
      // If clicking "Edit" for a new todo, set the state to show editing fields
      setEditedTodoId(todo.id);
      setEditedTitle(todo.title);
      setEditedDescription(todo.description);
    }
  };

  const handleSaveButtonClick = () => {
    onEdit(editedTodoId, editedTitle, editedDescription);
    setEditedTodoId(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  const handleDeleteButtonClick = (id) => {
    onDelete(id);
    setEditedTodoId(null);
    setEditedTitle('');
    setEditedDescription('');
  };

  if (todos.length === 0) {
    return (
      <div className='alert-description'>
        <div className='container' >
          <div className='row'>
            <div className='col-12'>
              <p className='text-center'>*No plans are available, kindly add a trip plan!</p></div>
          </div>
        </div>
      </div>
    )
  }

  const latestAddedTodos = [...todos].reverse(); // Reversing the array to show the latest added todo at the top

  return (
    <>   <Navbar />
   
    <ul className='plan-container'>
    <h1 className='text-center text-white'>TRIP PLANS</h1>
      {latestAddedTodos.map((todo) => (
        <li key={todo.id} style={{ listStyleType: "none", textAlign: "left" }}>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <div className='plan-card'>
                  <h3 className='text-center'>{todo.destination} 🎉 </h3>
                  <p><b>🟢 From :  &nbsp;</b> {todo.fromDate}</p>
                  <p><b>🟡 To &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:   &nbsp;&nbsp;</b>{todo.toDate}</p>

                  {editedTodoId === todo.id ? (
                    <div>
                      <div className='d-flex flex-column'>
                        <input
                          type="text"
                          value={editedTitle}
                          onChange={(e) => setEditedTitle(e.target.value)}
                          placeholder='Type title here....'
                          className='title-description'
                          required
                        />
                        <textarea
                          value={editedDescription}
                          onChange={(e) => setEditedDescription(e.target.value)}
                          placeholder='Type activities here....'
                          className='title-description'
                          required
                        />
                      </div>
                      <div className='d-flex'>
                        <button className='btn btn-success plan-button' onClick={handleSaveButtonClick}>Save</button>
                        <button className='btn btn-danger plan-button' onClick={() => setEditedTodoId(null)}>Cancel</button>
                      </div>
                    </div>
                  ) : (
                    <>
                      {showAllTodos && <p><b>📜 Title &nbsp;:  &nbsp;</b> {todo.title}</p>}
                      {showAllTodos && <p><b>🖊️ Description : </b>{todo.description}</p>}
                      {showAllTodos && (
                        <>
                          <div className='d-flex justify-content-center'>
                            <button className='btn btn-success plan-button' onClick={() => handleEditButtonClick(todo)}>Edit Plan</button>
                            <button className='btn btn-danger plan-button' onClick={() => handleDeleteButtonClick(todo.id)}>Delete Plan</button>
                          </div>
                        </>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>

          </div>
        </li>
      ))}
    </ul>
    </>
  );
}

export default TodoList;
