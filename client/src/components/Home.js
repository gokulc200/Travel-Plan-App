// src/App.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../features/todo/todoSlice';
import TodoForm from './TodoForm';
import './Home.css';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  const dispatch = useDispatch();

  const handleAddTodo = (title, description, fromDate, toDate) => {
    const newTodo = {
      id: uuidv4(),
      title,
      description,
      fromDate,
      toDate,
    };
    dispatch(addTodo(newTodo));
  };

  return (
    <>   <Navbar />
      <div className="home-container pt-4 pb-4">
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1 className='main-heading'>Trip Planner App 🛫</h1>
              <p className="main-description">Get detailed schedule for your chosen travel destination.</p>
            </div>
            <div className='col-12 col-lg-6'>
              <TodoForm onSubmit={handleAddTodo} />
            </div>
            <div className='col-12 col-lg-6'>
              <div className='details-background'>
                <ul>
                  <li>Ready to plan an amazing trip? 🌴</li>
                  <li>Just enter your destination, enter the start and end date of your trip accordingly.</li>
                  <li>You can edit the title and activity of your trip plan!</li>
                </ul>
                <p className='text-center'>Let's get started! 😎</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Home;
