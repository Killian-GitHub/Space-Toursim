import React from 'react'

import data from '../data/data.json'

export default function Vehicles() {
  // Vehicle selector handler
  const [activeVehicle, setActiveVehicle] = React.useState(0)

  const vehicleHandler = (vehicleName) => {
    switch (vehicleName) {
      case 'Spaceport':
        setActiveVehicle(1)
        break
      case 'Space capsule':
        setActiveVehicle(2)
        break
      default:
        setActiveVehicle(0)
    }
  }

  // Data recovery
  const { name, images, description } = data.technology[activeVehicle]

  // Set active class
  React.useEffect(() => {
    const selectedVehicle = document.querySelectorAll(
      '.vehicles__wrapper__selector__item'
    )

    for (let i = 0; i < selectedVehicle.length; i++) {
      selectedVehicle[i].classList.remove(
        'vehicles__wrapper__selector__item--active'
      )
    }
    selectedVehicle[activeVehicle].classList.add(
      'vehicles__wrapper__selector__item--active'
    )
  }, [activeVehicle])

  // Image selector handler
  const [imageHandler, setImageHandler] = React.useState(false)

  React.useEffect(() => {
    const media = window.matchMedia(`(max-width: 1000px)`)
    media.addEventListener('change', () => {
      if (media.matches) {
        setImageHandler(true)
      } else {
        setImageHandler(false)
      }
    })
  }, [])

  // Rendered
  return (
    <div className="vehicles">
      <div className="vehicles__wrapper">
        <ul className="vehicles__wrapper__selector">
          {data.technology.map((el, index) => (
            <li
              className="vehicles__wrapper__selector__item"
              key={index}
              onClick={() => vehicleHandler(el.name)}
            >
              {el.id}
            </li>
          ))}
        </ul>
        <div>
          <p className="vehicles__wrapper__subheading">The technology...</p>
          <h1 className="vehicles__wrapper__title">{name}</h1>
          <p className="vehicles__wrapper__description">{description}</p>
        </div>
      </div>
      <img
        className="vehicles__image"
        src={imageHandler ? images.landscape : images.portrait}
        alt={name}
      />
    </div>
  )
}
