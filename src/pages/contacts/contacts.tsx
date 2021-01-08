import React, { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const ContactPage = () => {
  const mapRef: any = useRef();

  useEffect(() => {
    if (mapRef.current) {
      const loader = new Loader({
        apiKey: 'AIzaSyC7Fxyktik-rtX4nXjklHGXukI-NRGu954',
        version: 'weekly',
        libraries: ['places'],
      });

      const mapOptions = {
        center: {
          lat: 50.42134914372104,
          lng: 30.51867874857184,
        },
        zoom: 18,
      };
      loader
        .load()
        .then(() => {
          new google.maps.Map(mapRef.current, mapOptions);
        })
        .catch((e: any) => console.log(e));
    }
  }, [mapRef]);

  return (
    <div>
      <div>CONTACT PAGE</div>
      <div ref={mapRef} id='map' style={{ width: '80vw', height: '60vh' }} />
    </div>
  );
};

export default ContactPage;
