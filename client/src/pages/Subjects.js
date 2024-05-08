import { useEffect, useState } from 'react';

export default function Subjects() {

  const [ subjects, setSubjects ] = useState([])
  const [ greeting, setGreeting ] = useState('')
  useEffect(() => {
    fetch('http://localhost:3001/get-subjects')
      .then(response => response.json())
      .then(body => {
        setSubjects(body)
      })

      fetch('http://localhost:3001/greet-by-post',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: 'Monina'})
      })
      .then(response => response.text())
      .then(body => {
        setGreeting(body)
      })
  }, [])
  return (
    <>
      <ol>
        { subjects.map((subject, i) => <li key={i}>{subject.code}</li>) }
        <div>{ greeting }</div>      
      </ol>
    </>
  )
}