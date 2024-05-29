import { createContext, useEffect, useState  } from "react";
import { housesData } from "../Data";  
export let DataContext = createContext();
export function DataContextProvider(props) { 

const [HouseList, setHouseList] = useState(housesData);
const [country, setcountry] = useState('Location (any)');
  const [countries, setcountries] = useState([]);
const [Property, setProperty] = useState('Property type (any)');
const [Properties, setProperties] = useState([]);
const [Price, setPrice] = useState('Price range (any)')
const [Loading, setLoading] = useState(false)

useEffect(() => {
  const allCountries = HouseList.map((house) => {
    return house.country
    })
    const UniqueCountries = ['Location (any)  ' , ...new Set(allCountries)]
    console.log(UniqueCountries);
    setcountries(UniqueCountries)
}, [])

useEffect(() => {
  const allCountries = HouseList.map((house) => {
    return house.type
    })
    const UniqueProperties = ['Property (any)  ' , ...new Set(allCountries)]
    console.log(UniqueProperties);
    setProperties(UniqueProperties)
}, [])
const HandleClick = () => 

{
  
  setLoading(true)
  const IsDefault = (str) => 
  {
    return str.split(' ').includes('(any)');
  };
  const minPrice = parseInt(Price.split(' ')[0]);
  
const maxPrice =  parseInt(Price.split(' ')[2]);
 ;


  const newHouse = housesData.filter((house) => 
  {
    const HousePrice = parseInt(house.price)
    if (house.country === country && house.type === Property && HousePrice >= minPrice 
 
 && HousePrice <= maxPrice     ) {
        return house;
       
      
    }
    if (IsDefault(country)  && IsDefault(Property) && IsDefault(Price)  ) {
      return house
    
    }
    if (!IsDefault(country)  && IsDefault(Property) && IsDefault(Price)  ) {
      return house.country === country ;
      
      
    }
    if (!IsDefault(Property)  && IsDefault(country) && IsDefault(Price)  ) {
      return house.type === Property ;
      
      
    }
    if (!IsDefault(Price)  && IsDefault(country) && IsDefault(Property)  ) {
      if (HousePrice >= minPrice && HousePrice <= maxPrice ) {
        return house;
        
      }
      
      
    }
    if (!IsDefault(Property)  && !IsDefault(country) && IsDefault(Price)  ) {
      return  house.country === country && house.type === Property ;
      
      
    }
   
    if (!IsDefault(Price)  && !IsDefault(country) && IsDefault(Property)  ) {
    if (HousePrice >= minPrice && HousePrice <= maxPrice) {
      return house.country === country;
    }
      
      
    }
    if (!IsDefault(Price)   && !IsDefault(Property)  && IsDefault(country)     ) {
      if (HousePrice >= minPrice && HousePrice <= maxPrice) {
        return house.type === Property;
      }
        
        
      }
    
  });

 setTimeout(() => {
  return  newHouse.length < 1 ? 

  setHouseList([])
 
   :
  
  setHouseList(newHouse),
  setLoading(false)
 
  
}, 1000);

};



 return    <DataContext.Provider  value={{HouseList,     country , setcountry , countries , Property , setProperty ,  Properties , Price , setPrice , Loading ,HandleClick}}>
          {props.children} 
    </DataContext.Provider>
}