import React from 'react'
import Image from 'next/image'

import data from '../data/data.json'

export default function Vehicles() {
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

  const { name, images, description } = data.technology[activeVehicle]

  React.useEffect(() => {
    const selectedVehicle = document.querySelectorAll(
      '.vehicles__wrapper__selector__item'
    )

    for (let i = 0; i < selectedVehicle.length; i++) {
      selectedVehicle[i].classList.remove('active')
    }
    selectedVehicle[activeVehicle].classList.add('active')
  }, [activeVehicle])

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

      <div className="vehicles__image">
        <Image src={images.portrait} layout="fill" objectFit="cover" />
      </div>
    </div>
  )
}

// import React from 'react'
// import Image from 'next/image'

// import data from '../data/data.json'

// export default function Vehicles() {
//   let arr = []

//   arr = data.technology.length.toString()

//   console.log(arr)

//   const [activeVehicle, setActiveVehicle] = React.useState(0)

//   const vehicleHandler = (vehicleName) => {
//     switch (vehicleName) {
//       case 'Spaceport':
//         setActiveVehicle(1)
//         break
//       case 'Space capsule':
//         setActiveVehicle(2)
//         break
//       default:
//         setActiveVehicle(0)
//     }
//   }

//   const { name, images, description } = data.technology[activeVehicle]

//   //   React.useEffect(() => {
//   //     const selectedVehicle = document.querySelectorAll(
//   //       '.planets__wrapper__list__item'
//   //     )

//   //     for (let i = 0; i < selectedVehicle.length; i++) {
//   //       selectedVehicle[i].classList.remove('active')
//   //     }
//   //     selectedVehicle[activeVehicle].classList.add('active')
//   //   }, [activeVehicle])

//   return (
//     <div className="vehicles">
//       <div className="vehicles__wrapper">
//         <ul className="vehicles__wrapper__selector">
//           {data.technology.map((el, index) => (
//             <li key={index}>{el.name}</li>
//           ))}
//         </ul>
//         <div>
//           <p className="vehicles__wrapper__subheading">The technology...</p>
//           <h1 className="vehicles__wrapper__title">{name}</h1>
//           <p className="vehicles__wrapper__description">{description}</p>
//         </div>
//       </div>

//       <div className="vehicles__image">
//         <Image src={images.portrait} layout="fill" objectFit="cover" />
//       </div>
//     </div>
//   )
// }
