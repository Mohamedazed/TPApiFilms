import React ,{ useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Details from './Details';

export default function App() {
  const [title,settitle] = useState('')
  const [year,setyear] = useState('')
  const [type,settype] = useState('')
  const [data,setdata] = useState([])
  const [c, setc] = useState(false)
  const [selected,setselected] = useState(null)

  const rech = () => {
    fetch(`https://www.omdbapi.com/?apikey=6e30c4b4&s=${title}&y=${year}&type=${type}`)
    .then(res => res.json())
    .then(res => setdata(res.Search))
    .catch(err=>console.log(err))
  }
  
  const details = (id) => {
    console.log(id)
    setselected(id)
    setc(true)
  }
  const back = () => {
    setc(false)
  }
  return(<>
  {c===true ? (<div className='container bg-light p-4 mt-4 '><Details data={data} selected={selected} back={back}/></div>) : (
    <div className='container bg-light p-4 mt-4 '>
      
      <form className=' border border-success p-4'>
          <div className="form-group">
            <label className='text-success m-2'><b>Title :</b></label>
            <input type="text" value={title} onChange={(e)=>settitle(e.target.value)} className="form-control" placeholder="Title here ..."/>
          </div>
          <div className="form-group">
            <label className='text-success m-2'><b>Year :</b></label>
            <input type="text" value={year} onChange={(e)=>setyear(e.target.value)} className="form-control" placeholder="Year here ..."/>
          </div>
          <div className="form-group">
            <label className='text-success m-2'><b>Type :</b></label>
            <select className="form-control" value={type} onChange={(e)=>settype(e.target.value)}>
              <option>...</option>
              <option>movie</option>
              <option>series</option>
            </select>
          </div>
          <button type='button' onClick={rech} className='btn btn-success m-2'>Search</button>
      </form>
      <div className='row p-4 m-4'>
      {
        data.map((i)=>(
            <div key={i.imdbID} className='col-md-4 mb-4'> 
              <div className="card col-6"  style={{width: '18rem'}}>
                <img className="card-img-top" src={i.Poster} alt={i.Title}/>
                <div className="card-body">
                  <h5 className="card-title">{i.Title}</h5>
                  <p className="card-text">{i.Year}</p>
                  <button type='button' onClick={(e)=>details(i.imdbID)} className="btn btn-primary">Details</button>
                </div>
              </div>
            </div>
        ))
      }
      </div>
      
    </div>)}</>
  )
}


