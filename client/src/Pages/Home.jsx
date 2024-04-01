// import React, { useEffect, useState } from 'react'
// import Banner from '../Components/Banner/Banner'
// import Popular from '../Components/Popular/Popular'
// import NewCollections from '../Components/NewCollections/NewCollections'
// import OffersBanner from '../Components/OffersBanner/OffersBanner'

// const Home = () => {
//   const [popular, setPopular] = useState([]);
//   const [popularMen, setPopularMen] = useState([]);
//   const [newcollection, setNewCollection] = useState([]);
//   const fetchInfo = () => {
//     fetch('http://localhost:5000/api/popularinwomen')
//       .then((res) => res.json())
//       .then((data) => setPopular(data))
//     fetch('http://localhost:5000/api/popularinmen')
//       .then((res) => res.json())
//       .then((data) => setPopularMen(data))

//     fetch('http://localhost:5000/api/newcollections')
//       .then((res) => res.json())
//       .then((data) => setNewCollection(data))
//   }

//   useEffect(() => {
//     fetchInfo();
//   }, [])
//   return (
//     <div>
//       <Banner />
//       <Popular title="WOMEN" data={popular} />
//       <OffersBanner />
//       <NewCollections data={newcollection} />
//       <Popular title="MEN" data={popularMen}/>
//     </div>
//   )
// }

// export default Home


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Banner from '../Components/Banner/Banner';
import Popular from '../Components/Popular/Popular';
import NewCollections from '../Components/NewCollections/NewCollections';
import OffersBanner from '../Components/OffersBanner/OffersBanner';

const Home = () => {
  const [popular, setPopular] = useState([]);
  const [popularMen, setPopularMen] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const fetchInfo = async () => {
    try {
      const responsePopularWomen = await axios.get('http://localhost:5000/api/popularinwomen');
      setPopular(responsePopularWomen.data);
      
      const responsePopularMen = await axios.get('http://localhost:5000/api/popularinmen');
      setPopularMen(responsePopularMen.data);

      const responseNewCollections = await axios.get('http://localhost:5000/api/newcollections');
      setNewCollection(responseNewCollections.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Banner />
      <Popular title="WOMEN" data={popular} />
      <OffersBanner />
      <NewCollections data={newcollection} />
      <Popular title="MEN" data={popularMen} />
    </div>
  );
}

export default Home;
