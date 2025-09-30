import { useState } from "react";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import { props as allProperties } from "../components/FeaturedProperties";

const Search = () => {
    const [filteredProperties, setFilteredProperties] = useState(allProperties);

    const handleSearch = ({ city, type, contract, minPrice, maxPrice }) => {
        const result = allProperties.filter((p) => {
            console.log(p.category.toLowerCase() + ' ' + type.toLowerCase());
            const matchesCity = city ? p.location.toLowerCase().includes(city.toLowerCase()) : true;
            const matchesType = type ? p.category.toLowerCase() === type.toLowerCase() : true;
            const matchesContract = contract ? p.transactionType.toLowerCase() === contract.toLowerCase() : true;
            const matchesMin = p.price >= (minPrice || 0);       //price ma byt number teraz je string
            const matchesMax = p.price <= (maxPrice || Infinity);
            return matchesCity && matchesContract && matchesType && matchesMin && matchesMax;
        });
        setFilteredProperties(result);
    };
    console.log(filteredProperties.map((el) => el))


    return (
        <>
            <Hero onSearch={handleSearch} />
            <FeaturedProperties properties={filteredProperties} />
        </>
    );
};

export default Search;
