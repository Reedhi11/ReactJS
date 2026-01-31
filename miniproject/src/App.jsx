import React from 'react'
import Card from './components/card.jsx'

const App = () => {
  const cardData = [
    {
      img: 'https://www.citypng.com/public/uploads/preview/official-hq-amazon-a-letter-symbol-logo-icon-70175169479214184uavt0v1m.png',
      company: 'Amazon',
      timeAgo: '5 days ago',
      title: 'Senior UI/UX Designer',
      tags: ['part time', 'senior level'],
      rate: '120/hr',
      location: 'Mumbai, India'
    },
    {
      img: 'https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_1920,c_limit/google-logo.jpg',
      company: 'Google',
      timeAgo: '2 days ago',
      title: 'Frontend Developer',
      tags: ['full time', 'mid level'],
      rate: '150/hr',
      location: 'Bangalore, India'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
      company: 'Microsoft',
      timeAgo: '1 week ago',
      title: 'React Developer',
      tags: ['contract', 'junior level'],
      rate: '100/hr',
      location: 'Hyderabad, India'
    },
    {
      img: 'https://i.pinimg.com/736x/60/6b/c0/606bc0717982547e555a514b479365a0.jpg',
      company: 'Apple',
      timeAgo: '3 days ago',
      title: 'iOS Developer',
      tags: ['full time', 'senior level'],
      rate: '180/hr',
      location: 'Pune, India'
    },
    {
      img: 'https://static.vecteezy.com/system/resources/previews/055/210/890/large_2x/meta-logo-square-rounded-meta-logo-meta-logo-free-download-free-png.png',
      company: 'Meta',
      timeAgo: '4 days ago',
      title: 'Backend Engineer',
      tags: ['remote', 'mid level'],
      rate: '140/hr',
      location: 'Delhi, India'
    }
  ]

  return (
    <div className='parent'>
      <div className='card-row'>
        {cardData.slice(0, 3).map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
      <div className='card-row second-row'>
        {cardData.slice(3, 5).map((card, index) => (
          <Card key={index + 3} {...card} />
        ))}
      </div>
    </div>
  )
}

export default App