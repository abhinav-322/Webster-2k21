import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Dropdown } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

export default function Signup() {
    const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const usernameRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e){
      e.preventDefault()

      if(passwordRef.current.value !== passwordConfirmRef.current.value)
      {
           return setError("Password do not match")
      }

      try{
          setError("")
          setLoading(true)
        await signup(emailRef.current.value, passwordRef.current.value)
        navigate("/login")
    } catch{
        setError("Failed to create an account")
    }

    setLoading(false)
  }
    return (
        <>
        
            <Card>
                <Card.Body>
                <h2 className="text-center mb-4">Sign Up</h2>
                {error && <Alert variant='danger'>{error}</Alert>}
                <Form onSubmit={handleSubmit}>

                <Form.Group id="username">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" ref={usernameRef} required />
              </Form.Group>

                <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>

            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>

            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            
            <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic-button">
    Skill Level
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Beginner</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Intermediate</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Advanced</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Expert</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

            <Button disabled={loading} className="w-100" type="submit">
              Sign Up
            </Button>
            </Form>
                </Card.Body>
            </Card>
            <div className= "w-100 text center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
            </div>
        </>
    )
}
