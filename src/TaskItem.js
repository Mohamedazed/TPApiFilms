import React from 'react'

export default function TaskItem(props) {
  return (
    <div>
      <tr key={props.key}>
                <td>{props.row.id}</td>
                <td>{props.row.nom}</td>
                <td><button type='button' id={props.row.id} onClick={props.modify}>modify</button></td>
                <td><button type='button' id={props.row.id} onClick={props.supp}>supp</button></td>
              </tr>
    </div>
  )
}


