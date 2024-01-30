import React from 'react'

export default function Details({data,selected,back}) {
    const f = data.find((i)=>(selected === i.imdbID))
  return (
    <div className='container border border-success p-4'>
      {
         f?
            <div >
            <h2>{f.Title}</h2>
            <img className="card-img-top" src={f.Poster} alt={f.Title} style={{width:'20%'}}  height='50%'/>
            <p>imdbID : {f.imdbID}</p>
            <p>Year : {f.Year}</p>
            <button type='button' onClick={back} className='btn btn-success'>Back</button>

          </div> 
        :
            null
        }
        
      
    </div>
  )
}
