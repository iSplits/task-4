import React from 'react';

import '../MyComponents/style.css';

function ListComp ({title}) {
    return (
        <>
            <li className='list-item'>
              
              <p className='todo-text'>
               {title}
              </p>

              <button 
                 className='todo-status-btn'
               >
                mark as done
              </button>

              <button className='todo-edit-btn'>
                edit
              </button>

            </li>
        </>
    );
};

export default ListComp;
