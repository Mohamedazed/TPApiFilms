import React from 'react'
import TaskItem from './TaskItem';

export default function TaskList(props) {
  return (
    <div>
      {
        <table border={1}>
          <thead>
            <tr>
            <th>id</th>
            <th>nom</th>
            <th>actions</th>
            </tr>
          </thead>
          <tbody>
          {
            props.tasks.map((row,key)=>(
              <TaskItem row={row} key={key} modify={props.modify} supp={props.supp}/>

            ))
          }
          </tbody>
          </table>
      }
    </div>
  )
}



