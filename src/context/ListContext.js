import { createContext, useState, useContext } from 'react';

const ListContext = createContext();

export const useList = () => useContext(ListContext);

export function ListProvider({ children }) {
  const [houses, setHouses] = useState([]);
  const [filteredHouses, setFilteredHouses] = useState([]);
  const [location, setLocation] = useState('All');
  const [price, setPrice] = useState(0);
  const [rooms, setRooms] = useState(0);

  return (
    <ListContext.Provider
      value={{
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
