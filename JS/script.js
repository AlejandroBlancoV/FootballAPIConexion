
//Función para obtener los datos de la API
async function fetchData(teamName) {
    const url = `https://api-football-v1.p.rapidapi.com/v3/teams?search=${teamName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '04e3aaa3ddmsh2938bf169e165e9p1e49a2jsnc334db98168a',
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
  
    try {
      const response = await fetch(url, options);
      const result = await response.json();
      return result;
    } catch (error) {
      throw new Error('Error al obtener los datos:', error);
      
    }
  }


  document.addEventListener('DOMContentLoaded', function() {

      
    document.getElementById('submitBtn').addEventListener('click', async (event) => {
        event.preventDefault(); 
      
        const teamName = document.getElementById('teamName').value;
      
        try {
          const data = await fetchData(teamName);

          const logoUrl = data.response[0].team.logo; 
          const nameT=data.response[0].team.name;
          const countryT=data.response[0].team.country;
          const foundedT=data.response[0].team.founded
          const stadiumImg=data.response[0].venue.image;
          const stadiumN=data.response[0].venue.name;
          const stadiumCp=data.response[0].venue.capacity;
          const stadiumC=data.response[0].venue.city;

          const title = document.createElement('h2');
          const title2 = document.createElement('h2');
          const nameElement = document.createElement('p');
          const imgElement = document.createElement('img');
          const countryElement = document.createElement('p');
          const foundedElement = document.createElement('p');
          const stadiumImgElement = document.createElement('img');
          const stadiumNameElement = document.createElement('p');
          const stadiumCapacityElement = document.createElement('p');
          const stadiumCityElement = document.createElement('p');


          imgElement.src = logoUrl;
          imgElement.alt = 'Logo del Equipo';
          nameElement.textContent='Nombre: '+nameT;
          title.textContent = 'Ficha Técnica: ';
          countryElement.textContent='País: '+countryT;
          foundedElement.textContent='Fundado en: '+foundedT;
          title2.textContent = 'Estadio: ';
          stadiumImgElement.src = stadiumImg;
          stadiumImgElement.alt = 'Imagen del Estadio';
          stadiumNameElement.textContent='Nombre: '+stadiumN;
          stadiumCapacityElement.textContent='Capacidad: '+stadiumCp;
          stadiumCityElement.textContent='Ciudad: '+stadiumC;
          
          document.getElementById('resultContainer').innerHTML = ''; 
          document.getElementById('resultContainer').appendChild(imgElement);
          document.getElementById('resultContainer').appendChild(title);
          document.getElementById('resultContainer').appendChild(nameElement);
          document.getElementById('resultContainer').appendChild(countryElement); 
          document.getElementById('resultContainer').appendChild(foundedElement);
          document.getElementById('resultContainer').appendChild(title2);
          document.getElementById('resultContainer').appendChild(stadiumImgElement);
          document.getElementById('resultContainer').appendChild(stadiumNameElement);
          document.getElementById('resultContainer').appendChild(stadiumCapacityElement);
          document.getElementById('resultContainer').appendChild(stadiumCityElement);
        } catch (error) {
          console.error(error.message);
          alert('No se encontraron datos');
        }
      });
  });

  function fetchData2(leagueName) {
    const url = `https://api-football-v1.p.rapidapi.com/v3/leagues?search=${leagueName}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '04e3aaa3ddmsh2938bf169e165e9p1e49a2jsnc334db98168a',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
  
    return fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        return response.json(); 
      })
      .catch(error => {
        throw new Error('Hubo un problema con la solicitud fetch:', error);
        
      });
  }

  document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn2').addEventListener('click', async (event) => {
      event.preventDefault();
  
      const leagueName = document.getElementById('leagueName').value;
  
      try {
        const result = await fetchData2(leagueName);

        const logoUrl = result.response[0].league.logo; 
        const nameL=result.response[0].league.name;
        const countryL=result.response[0].country.name;
        const flagL=result.response[0].country.flag;

        const title = document.createElement('h2');
        const imgElement = document.createElement('img');
        const nameElement = document.createElement('p');
        const countryElement = document.createElement('p');
        const flagElement = document.createElement('img');

        imgElement.src = logoUrl;
        imgElement.alt = 'Logo de Liga de Fútbol';
        nameElement.textContent='Nombre: '+nameL;
        title.textContent = 'Ficha Técnica: ';
        countryElement.textContent='País: '+countryL;
        flagElement.src = flagL;

        document.getElementById('resultContainer').innerHTML = '';
        document.getElementById('resultContainer').appendChild(imgElement);
        document.getElementById('resultContainer').appendChild(title);
        document.getElementById('resultContainer').appendChild(nameElement);
        document.getElementById('resultContainer').appendChild(countryElement);
        document.getElementById('resultContainer').appendChild(flagElement);

        
      } catch (error) {
        console.error(error.message);
        alert('No se encontraron datos');
      }
    });
  });
  
