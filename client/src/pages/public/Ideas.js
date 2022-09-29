import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Ideas = () => {
  const navigate = useNavigate()

  const [ideas, setIdeas] = useState([])
  const [form, setForm] = useState({})

  const handleForm = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    // const formData = new FormData()

    // for (const key in form) formData.append(key, form[key])

    axios
      .post('/api/donations/new', form)
      .then(resp => navigate('/')) //pakeist į refresh
      .catch(error => {
        console.log(error.response.data)
        if (error.response.status === 401) navigate('/login')
      })
  }

  useEffect(() => {
    axios
      .get('/api/ideas')
      .then(resp => setIdeas(resp.data))
      .catch(error => console.log(error))
  }, [])

  return (
    <>
      <h1>Ideas</h1>
      {ideas ? (
        <div>
          {ideas.map(idea => (
            <div key={idea.id} className="ideabox">
              <div>
                <img src={idea.photo} alt={idea.idea} height="300" />
              </div>
              <h2>{idea.idea}</h2>
              <p>{idea.description}</p>
              <p>{idea.req_sum}</p>
              <form onSubmit={e => handleSubmit(e)}>
                <div>
                  <label>Name:</label>
                  <input type="text" name="name" onChange={e => handleForm(e)} />
                </div>
                <div>
                  <label>Donation:</label>
                  <input type="number" name="amount" onChange={e => handleForm(e)} />
                </div>
                <div>
                  <input type="submit" value="Donate" />
                </div>
              </form>
            </div>
          ))}
        </div>
      ) : (
        <h2>There are no ideas...</h2>
      )}
    </>
  )
}

export default Ideas
