import React from 'react'
import Image from 'next/image'

import data from '../data/data.json'

export default function Members() {
  const [activeMember, setActiveMember] = React.useState(0)

  const memberHandler = (memberName) => {
    switch (memberName) {
      case 'Mark Shuttle':
        setActiveMember(1)
        break
      case 'Victor Glover':
        setActiveMember(2)
        break
      case 'Anousheh Ansari':
        setActiveMember(3)
        break
      default:
        setActiveMember(0)
    }
  }

  const { name, images, role, bio } = data.crew[activeMember]

  React.useEffect(() => {
    const selectedDestination = document.querySelectorAll(
      '.members__wrapper__selector__item'
    )

    for (let i = 0; i < selectedDestination.length; i++) {
      selectedDestination[i].classList.remove('active')
    }
    selectedDestination[activeMember].classList.add('active')
  }, [activeMember])

  return (
    <div className="members">
      <div className="members__wrapper">
        <div>
          <p className="members__wrapper__role">{role}</p>
          <h1 className="members__wrapper__title">{name}</h1>
          <p className="members__wrapper__description">{bio}</p>
        </div>

        <div className="members__wrapper__selector">
          {data.crew.map((el, index) => (
            <svg
              className="members__wrapper__selector__item"
              key={index}
              onClick={() => memberHandler(el.name)}
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
          ))}
        </div>
      </div>
      {/* <div className="members__image">
        <Image src={images} layout="fill" objectFit="cover" />
      </div> */}
      <img className="members__image" src={images} />
    </div>
  )
}
