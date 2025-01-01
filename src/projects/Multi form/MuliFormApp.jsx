import React, { useState } from 'react'

const MuliFormApp = () => {

  const data=[
    {
      id:'name',
      placeholder:"Name...",
      type:"text",
      button:"Next",
      label:"Name"

    },
    {
      id:'email',
      placeholder:"Email...",
      type:"email",
      button:"Next",
      label:"Email"

    },
    {
      id:'password',
      placeholder:"Password...",
      type:"password",
      button:"Next",
      label:"Password"

    },
    {
      id:'date',
      placeholder:"",
      type:"date",
      button:"Submit",
      label:"Date"

    }
  ]

  const [forms,setForms]=useState(data)
  const [index,setIndex]=useState(0)
  const [isSubmited,setIsSubmited]=useState(false)
  const [formData,setFormData]=useState({
    name:'',
    email:'',
    password:'',
    date:''
  })

  const handleSubmit=(e)=>{
    e.preventDefault()
    if(index===forms.length-1){
      console.log("form submited")
      setIsSubmited(true)
    }else{
      setIndex((index)=>index+1)
    }
  }

  const handleBack=(e)=>{
    e.preventDefault()
    setIndex((index)=>index-1)
  }

  const handleChange=(e)=>{
    const id=e.target.id
    const val=e.target.value

    const copyFormData={...formData}
    copyFormData[id]=val
    setFormData(copyFormData)

  }

  console.log(formData)
  return (
    <div className='app'>

      {!isSubmited?
      
      <form className='Multiformcontainer' onSubmit={handleSubmit}>
      {
        index>0 &&
        <a href='/' onClick={handleBack}>
            Back
        </a>
      }
      <label>{forms[index].label}</label>
      <input className='multifornInput' value={formData[forms[index].id]} onChange={handleChange}  type={forms[index].type} id={forms[index].id} placeholder={forms[index].palceholder} />
      <button className='multiformButton'>{forms[index].button}</button>
    </form>
    :

    <div>
          <h1>success</h1>
          <hr />
          <span>Name:{formData.name}</span>
          <br />

          <span>Email:{formData.email}</span>
          <br />

          <span>Date:{formData.date}</span>
          <br />

          <span>Password:{formData.password}</span>
          <br />

        </div>
    
  }
        


        
    </div>
  )
}

export default MuliFormApp