// src/components/TodoForm.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../features/todo/todoSlice';
import "./TodoForm.css"

function TodoForm() {
  const dispatch = useDispatch();
  const [destination, setDestination] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      destination,
      fromDate,
      toDate,
    };
    dispatch(addTodo(newTodo));
    setDestination('');
    setFromDate('');
    setToDate('');
  };

  return (
    <div className='form-background'>
      <div className='container'>
        <div className='row'>
          <form onSubmit={handleSubmit} className='form-container'>
            <div className='col-12'>
              <input
                type="text"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                placeholder="TYPE YOUR DESTINATION HERE..."
                className='destination-field'
                size={30}
                required
              />
            </div>
            <div className='col-12'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <label htmlFor='from' className='date-size'>Trip Start Date : &nbsp; </label>
                <input
                  type="date"
                  value={fromDate}
                  id='from'
                  onChange={(e) => setFromDate(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className='col-12'>
              <div className='d-flex flex-row justify-content-between align-items-center'>
                <label htmlFor='to' className='date-size'>Trip End Date : &nbsp;</label>
                <input
                  type="date"
                  value={toDate}
                  id='to'
                  onChange={(e) => setToDate(e.target.value)}
                  required
                /> 
              </div>
            </div>
            <button type="submit" className='btn add-button'><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828l.645-1.937zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.734 1.734 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.734 1.734 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.734 1.734 0 0 0 3.407 2.31l.387-1.162zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L10.863.1z"></path></svg> Add Trip Plan</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodoForm;
