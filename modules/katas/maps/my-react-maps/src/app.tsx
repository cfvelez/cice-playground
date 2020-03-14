import React, { useEffect, useState } from 'react'
import styles from './app.module.css'
import { bind } from './bind'

const cx = bind(styles)

export function App() {
  const [longitude, setLongitude] = useState(0)
  const [latitude, setLatitude] = useState(0)
  const [status, setStatus] = useState(false)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((calculatedPosition: any) => {
      const { longitude, latitude } = calculatedPosition.coords
      setLatitude(latitude)
      setLongitude(longitude)
      setStatus(true)
    })
  }, [longitude, latitude])

  return (
    <div className={cx('app')}>{status === true ? `${latitude},${longitude}` : 'cargando...'}</div>
  )
}
