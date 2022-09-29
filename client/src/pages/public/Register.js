import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [form, setForm] = useState({})

  const navigate = useNavigate()

  const handleForm = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    axios
      .post('/api/users/register', form)
      .then(resp => {
        window.scrollTo(0, 0)
        setTimeout(() => navigate('/'), 1000)
      })
      .catch(error => console.log(error))
  }

  return (
    <>
      <h1>Register</h1>
      <form className="formbox" onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" name="first_name" onChange={handleForm} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" name="last_name" onChange={handleForm} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" onChange={handleForm} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" onChange={handleForm} />
        </div>
        <div>
          <input type="submit" value="Register" />
        </div>
      </form>
    </>
  )
}

export default Register
