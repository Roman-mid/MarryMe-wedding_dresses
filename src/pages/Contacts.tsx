import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import style from './styles/contacn.module.scss';
import L, { Icon } from 'leaflet';

const Contacts: React.FC = () => {


const customIcon = new Icon({
  iconUrl: "img/marcer-icon.png",
  iconRetinaUrl: "img/marcer-icon.png",
  iconSize: [20, 90],
  iconAnchor: [12, 90],
  className: style.market,
  popupAnchor: [-3, -76],
})

  return (
    <section className="lastSection">
      <div className="container">
        <h1>Contacts</h1>
        <div className={style.map}>
          <MapContainer center={[51.49951901372978, -0.16323440292244756]} zoom={16} scrollWheelZoom={true} >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker 
              position={[51.49951901372978, -0.16323440292244756]} 
              icon={customIcon}
              >
              <Popup>
                We are waiting for you <br /> 
                from 8am till 6pm. <br/>
                Without rest and holidays.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className={style.contacts}>
          <div className="contactsItem">
            <span>Phone:</span>
            <a href="tel:+44-573-430-0809">+44-573-430-0809</a>
          </div>
          <div className="contactsItem">
            <span>E-mail:</span>
            <a href="mailto:hello@marryme.com">hello@marryme.com</a>
          </div>
          <div className="contactsItem">
            <span>Address:</span>
            <p>87-135 Brompton Rd, London SW1X 7XL</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacts;