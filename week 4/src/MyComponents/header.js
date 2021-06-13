import React, { useEffect, useState} from 'react';

import '../MyComponents/style.css';

function Header () {
    // PIECE OF STATE TO TRACK TODO ENTERED
    const [todo, setTodo] = useState('');

    // PIECE OF STATE TO HOLD TODOES IN AN ARRAY
    const [todoArr, setTodoArr] = useState([]);

    // THIS PIECE OF STATE KEEPS TRACK OF SELECTED TODO ID
    const [todoId, setTodoId] = useState('');

    // PIECE OF STATE TO CHECK IF A TODO HAS BEEN ADDED
    const [todoAdded, setTodoAdded] = useState(false);


    // THIS FUNCTION GETS THE TODO FROM STATE AND APPENDS IT TO ui
    const getTodo = () => {
      if(todoId === '') {
        let todoObj = {
            title: todo,
            done: false,
        };
 
        todoArr.push(todoObj);

        setTodoAdded(true);
 
        setTodo('');
      } else if (todoId !== '') {

        todoArr.map((item, index) => {
           if(todoId === index) {
               item.title = todo;
           }
        })
 
        setTodo('');

        setTodoId('');
      }
    };

    // THIS FUNCTION MARKS A TODO AS DONE
    const markTodo = (e, todoId) => {
        e.preventDefault()
        
        todoArr.map((item, index) => {
            if(index === todoId) {
                item.done = true;
                console.log(item);
            }
        })
    };

    // THIS FUNCTION WILL SET SELECTED TODO FOR EDITING
    const editTodo = (e, todoId) => {
       e.preventDefault();

       setTodoId(todoId);

       todoArr.map((item, index) => {
           if(index === todoId) {
               setTodo(item.title)
           }
       })
    };

    return (
        <div className='head-container'>

           <header className='header'>

                 <input 
                    className='todo-input' 
                    type='text' 
                    placeholder='enter your todo'
                    onChange={(e) => setTodo(e.target.value)}
                    value={todo}
                />   

                <button 
                   className='todo-btn'
                   onClick={getTodo}
                > 
                  Save 
                </button>      

           </header>

           <div className='body-container'>
                <ul className='list-collection'>
                    {
                        todoArr.length == 0 ? (
                            <li className='list-item'>
                
                                <p className='todo-text'>
                                 enter a todo in the header above
                                </p>

                            </li>
                        ) : 
                        todoArr.length > 0 ? (
                            todoArr.map((item, index) => (
                                <li key={index} className='list-item'>
                
                                <p 
                                 className={item.done ? 'todo-text-done' : 'todo-text'}
                                 >
                                 {item.title}
                                </p>

                                <button 
                                    className='todo-status-btn'
                                    onClick={(e) => markTodo(e, index)}
                                >
                                    mark as done
                                </button>

                                <button 
                                   className='todo-edit-btn'
                                   onClick={(e) => editTodo(e, index)}
                                >
                                    edit
                                </button>

                            </li>
                            ))
                        ) : (
                            <li className='list-item'>
                
                                <p className='todo-text'>
                                 something went wrong
                                </p>

                            </li>
                        )
                    }
                </ul>  
            </div>

        </div>
    );
};

export default Header;


 // let li = document.createElement('li');
        // let p = document.createElement('p');
        // let btnOne = document.createElement('button');
        // let btnTwo = document.createElement('button');

        // li.className = 'list-item';
        // p.className = 'todo-text';
        // btnOne.className = 'todo-status-btn';
        // btnTwo.className = 'todo-edit-btn';

        // p.textContent = todo;
        // btnOne.textContent = 'mark as done';
        // btnTwo.textContent = 'edit';

        // li.append(p, btnOne, btnTwo);

        // document.querySelector('.list-collection').append(li);

        // let todoObj = {
        //     title: todo,
        //     status: false,
        // };

        // todoArr.push(todoObj);