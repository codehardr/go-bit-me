import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const NewIdea = () => {
  const [form, setForm] = useState({})
  const navigate = useNavigate()

  const handleForm = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.name === 'photo' ? e.target.files[0] : e.target.value,
    })
  }

  const handleSubmit = e => {
    e.preventDefault()

    const formData = new FormData()

    for (const key in form) formData.append(key, form[key])

    axios
      .post('/api/ideas/new', formData)
      .then(resp => navigate('/'))
      .catch(error => {
        console.log(error)
        if (error.response.status === 401) navigate('/login')
      })
  }

  return (
    <>
      <h1>New Idea</h1>
      <div className="formbox">
        <form onSubmit={e => handleSubmit(e)}>
          <div>
            <label htmlFor="idea">Idea Name: </label>
            <input id="idea" type="text" name="idea" onChange={e => handleForm(e)} />
          </div>
          <div>
            <label htmlFor="description">Description: </label>
            <input id="description" type="text" name="description" onChange={e => handleForm(e)} />
          </div>
          <div>
            <label htmlFor="req_sum">Requested Sum: </label>
            <input id="req_sum" type="number" name="req_sum" onChange={e => handleForm(e)} />
          </div>
          <div>
            <label htmlFor="photo">Photo: </label>
            <input id="photo" type="file" name="photo" onChange={e => handleForm(e)} />
          </div>
          <div>
            <input type="submit" value="Create" />
          </div>
        </form>
      </div>
    </>
  )
}

export default NewIdea
