import { createContext, useState, useContext } from 'react';

const ListContext = createContext();

export const useList = () => useContext(ListContext);

export function ListProvider({ children }) {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [location, setLocation] = useState('All');
  const [price, setPrice] = useState(0);
  const [rooms, setRooms] = useState(0);

  const [locationHouses, setLocationHouses] = useState();
  const [budgetHouses, setBudgetHouses] = useState();
  const [bhkHouses, setBhkHouses] = useState();

  return (
    <ListContext.Provider
      value={{
        bhkHouses,
        setBhkHouses,
        budgetHouses,
        setBudgetHouses,
        locationHouses,
        setLocationHouses,
        houses,
        setHouses,
        filteredHouses,
        setFilteredHouses,
        location,
        setLocation,
        price,
        setPrice,
        rooms,
        setRooms,
      }}
    >
      {children}
    </ListContext.Provider>
  );
}

export default ListContext;
