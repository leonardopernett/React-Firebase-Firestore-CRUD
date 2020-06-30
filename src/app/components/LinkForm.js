
import React,{useState, useEffect} from 'react'
import {firestore} from 'firebase'
export default function LinkForm({addOrEditLink, currentId,updateLink}) {

  const [data, setData] = useState({
    url:'', name:'', description:''
  })
  const handlerSubmit = (e)=>{
    e.preventDefault()
      if(currentId !== ""){
        updateLink(currentId, data)
      }else{
        addOrEditLink(data)
      }
      
    setData({url:"",name:"", description:""})
  }

  const onInputChange=(e)=>{
    const {name, value} = e.target
    setData({...data,[name]:value})
  
  }
  useEffect(() => {
     if(currentId !=="") {getLinkById(currentId)}
  }, [currentId])

  const getLinkById = async (id)=>{
    const doc = await firestore().collection('links').doc(id).get();
    setData({...doc.data()})
  }

  return (
    <div className="row mt-5">
      <div className="col-md-10 mx-auto">
        <form className="card card-body" onSubmit={handlerSubmit}>
          <div className="form-group input-group">
            <div className="input-group-text bg-light">
              <i className="material-icons">insert_link</i>
            </div>
            <input
              type="text"
              name="url"
              value={data.url}
              onChange={onInputChange}
              className="form-control"
              placeholder="https://url.com"
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-text bg-light">
              <i className="material-icons">create</i>
            </div>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={onInputChange}
              placeholder="text"
              className="form-control"
            />
          </div>

          <div className="form-group">
            <textarea
              name="description"
              className="form-control"
              value={data.description}
              placeholder="description"
              onChange={onInputChange}
              rows="3"
            ></textarea>
          </div>
          <button className="btn btn-primary">send</button>
        </form>
      </div>
    </div>
  );
}
