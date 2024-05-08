// COMPONENTS/MAP.JSX
import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

export default function Map({ Bs, Bv, Bh, Th4, Tp, Tc, theme }) {
  const mapContainer = useRef(null);
  mapboxgl.accessToken = 'pk.eyJ1IjoiZnJhbmNpc2NvYnVjaGluaSIsImEiOiJjbHZsNng5djUxdXVvMmtvb2NoZzcza3VnIn0.jTm58Ue65TyJ9ToHbiwMHg';
  const light = 'mapbox://styles/franciscobuchini/clvldwnu1017x01q1buz0fg6v';
  const dark = 'mapbox://styles/franciscobuchini/clvlavqq900fj01obdjam2o77';

  const style = theme === 'dark' ? dark : light;

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-119.950676, 39.244233],
      zoom: 12,
      style: style,
    });

    return () => map.remove();
  }, [theme]); // Agrega theme como dependencia para que se actualice cuando cambie

  let classNameMap = `MapComponent ${Bs} V${Bv} H${Bh}`

  return (
    <section className={classNameMap}>
      <div ref={mapContainer} className='Map'/>
      <div className='Text'>
        <h4 style={{color: `var(--${Tc})`}}>{Th4}</h4>
        <p dangerouslySetInnerHTML={{ __html: Tp }} style={{color: `var(--${Tc})`}} />
      </div>
    </section>
  );
}
