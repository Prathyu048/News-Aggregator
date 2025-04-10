import React from 'react'

const Items = ({title,description,src,url}) => {
  return (
    <div className="main-content card bg-dark text-light md-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px",transition:" margin-top 0.3s ease-in-out"}}>
  <img src={src} style ={{height:"220px",width:"330px"}}className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,50)}</h5>
    <p className="card-text">{description?description.slice(0,90):""}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
  )
}

export default Items
