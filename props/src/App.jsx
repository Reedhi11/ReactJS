import React from 'react'
import Card1 from './components/card1'

const App = () => {
  return (
    <div className = 'parent'>
      <Card1
        user="Reedhi Gohel"
        age={21}
        img='https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=2048x2048&w=is&k=20&c=zeshqUp2X2mSAlURtrcyI-FZumcAiv-1corvRhT-qFo='
        role="Frontend Developer"
        experience="2 years"
        skills={["React", "JavaScript", "CSS", "HTML"]}
        bio="Passionate about creating beautiful and functional user interfaces. Always eager to learn new technologies and improve my skills."
        location="Mumbai, India"
      />
      <Card1
        user="Prakriti Panda"
        age={25}
        img='https://media.istockphoto.com/id/1305462732/photo/headshot-studio-portrait-of-a-woman-in-profile-looking-at-the-camera.jpg?s=1024x1024&w=is&k=20&c=o5eN6dD8mecuXe9KWp3A66_dZ0XZtJ_Sms99sSTgWSo='
        role="Full Stack Developer"
        experience="3 years"
        skills={["Node.js", "React", "MongoDB", "Express"]}
        bio="Love building end-to-end applications and solving complex problems. Enjoy working in collaborative environments."
        location="Bangalore, India"
      />
      <Card1
        user="Deo Jawalkar"
        age={23}
        img='https://plus.unsplash.com/premium_photo-1688350808212-4e6908a03925?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        role="UI/UX Designer"
        experience="2.5 years"
        skills={["Figma", "Adobe XD", "Sketch", "Prototyping"]}
        bio="Creative designer focused on user-centered design. Passionate about creating intuitive and beautiful user experiences."
        location="Pune, India"
      />
       <Card1
        user="Jass Nawab"
        age={22}
        img='https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        role="Backend Developer"
        experience="1.5 years"
        skills={["Python", "Django", "PostgreSQL", "API Development"]}
        bio="Enthusiastic about server-side development and database design. Always looking to optimize performance and security."
        location="Delhi, India"
      />
    </div>
  )
}

export default App