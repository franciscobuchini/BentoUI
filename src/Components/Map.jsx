// COMPONENTS/MAP.JSX
import React, { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export default function Map({ Bs, Bv, Bh, Th4, Tp, theme }) {
  const mapContainer = useRef(null);
  mapboxgl.accessToken = "pk.eyJ1IjoiZnJhbmNpc2NvYnVjaGluaSIsImEiOiJjbHZsNng5djUxdXVvMmtvb2NoZzcza3VnIn0.jTm58Ue65TyJ9ToHbiwMHg";
  const light = "mapbox://styles/franciscobuchini/clw9oydkm008h01q1a7w98vwy";
  const dark = "mapbox://styles/franciscobuchini/clvlavqq900fj01obdjam2o77";
  
  const style = theme === "light" ? light : dark;
  const markerColor = theme === "light" ? 'var(--primary)' : 'var(--secondary)';

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-119.950676, 39.244233],
      zoom: 11,
      style: style,
    });

    map.scrollZoom.disable();
    const marker1 = new mapboxgl.Marker({ color: markerColor })
        .setLngLat([-119.950676, 39.252533])
        .addTo(map);


    return () => map.remove();
  }, [theme]); // Agrega theme como dependencia para que se actualice cuando cambie

  let classNameMap = `MapComponent ${Bs} V${Bv} H${Bh}`

  return (
    <section className={classNameMap}>
      <div ref={mapContainer} className="Map"/>
      <div className="Text">
        <h4>{Th4}</h4>
        <p dangerouslySetInnerHTML={{ __html: Tp }} />
      </div>
    </section>
  );
}
