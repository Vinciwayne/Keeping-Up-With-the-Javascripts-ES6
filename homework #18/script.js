



function geoFindMe() {

  const status = document.querySelector('#status');
  const mapIframe = document.querySelector('#map-iframe');

  mapIframe.innerHTML = '';

  function success(position) {
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = '';

    const gmKey = ' ';// TYPE YOUR API KEY HERE

    let mapUrl = `https://www.google.com/maps/embed/v1/directions?key=${gmKey}`;
    mapUrl += `&origin=${latitude},${longitude}`;
    mapUrl += '&destination=nearest+library';
    mapUrl += '&mode=walking';
    mapIframe.innerHTML = `<iframe src="${mapUrl}"></iframe>`;
  }

  function error() {
    status.textContent = 'Unable to retrieve your location';
  }

  if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
  } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
  }

}

document.querySelector('#find-me').addEventListener('click', geoFindMe);




///EZEBUIRO UCHECHUKWU VINCENT