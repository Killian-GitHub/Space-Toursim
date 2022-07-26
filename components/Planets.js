import React from 'react'

import data from '../data/data.json'

export default function Destinations() {
  // Planet selector handler
  const [activeDestination, setActiveDestination] = React.useState(0)

  const destinationHandler = (destinationName) => {
    switch (destinationName) {
      case 'Mars':
        setActiveDestination(1)
        break
      case 'Europa':
        setActiveDestination(2)
        break
      case 'Titan':
        setActiveDestination(3)
        break
      default:
        setActiveDestination(0)
    }
  }

  // Data recovery
  const { name, images, description, distance, travel } =
    data.destinations[activeDestination]

  // Set active class
  React.useEffect(() => {
    const selectedDestination = document.querySelectorAll(
      '.planets__wrapper__list__item'
    )

    for (let i = 0; i < selectedDestination.length; i++) {
      selectedDestination[i].classList.remove(
        'planets__wrapper__list__item--active'
      )
    }
    selectedDestination[activeDestination].classList.add(
      'planets__wrapper__list__item--active'
    )
  }, [activeDestination])

  // Rendered
  return (
    <div className="planets">
      <img className="planets__image" src={images} alt={name} />
      <div className="planets__wrapper">
        <ul className="planets__wrapper__list">
          {data.destinations.map((el, index) => (
            <li
              className="planets__wrapper__list__item"
              key={index}
              onClick={() => destinationHandler(el.name)}
            >
              {el.name}
            </li>
          ))}
        </ul>
        <h1 className="planets__wrapper__title">{name}</h1>
        <p className="planets__wrapper__description">{description}</p>
        <div className="planets__wrapper__infos">
          <div className="planets__wrapper__infos__distance">
            <h4>Av. distance</h4>
            <p>{distance}</p>
          </div>
          <div className="planets__wrapper__infos__time">
            <h4>Est. travel time</h4>
            <p>{travel}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
