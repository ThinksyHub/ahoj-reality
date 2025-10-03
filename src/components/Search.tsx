import { useEffect, useState } from "react";
import Hero from "./Hero";
import FeaturedProperties from "./FeaturedProperties";
import { Filters, Property } from "@/pages/Properties";

const Search = () => {
    const [properties, setProperties] = useState<Property[]>([]);
    const [filteredProperties, setFilteredProperties] = useState(properties);

    useEffect(() => {
        fetch("/api/properties")
            .then((res) => res.json())
            .then((data) => {
                setProperties(data);
                setFilteredProperties(data);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleSearch = (filters: Filters) => {
        const result = properties.filter((p) => {
            const matchesCity = filters.city_id
                ? p.city_id === filters.city_id
                : true;

            const matchesType = filters.property_type
                ? p.property_type.toLowerCase() === filters.property_type.toLowerCase()
                : true;

            const matchesContract = filters.property_purpose
                ? p.property_purpose.toLowerCase() === filters.property_purpose.toLowerCase()
                : true;

            const price = Number(p.sale_price || p.rent_price);
            const min = filters.priceFrom ? Number(filters.priceFrom) : 0;
            const max = filters.priceTo ? Number(filters.priceTo) : Infinity;

            const matchesMin = price >= min;
            const matchesMax = price <= max;

            return matchesCity && matchesType && matchesContract && matchesMin && matchesMax;
        });

        setFilteredProperties(result);
    };

    return (
        <>
            <Hero onSearch={handleSearch} />
            <FeaturedProperties filteredProperties={filteredProperties} />
        </>
    );
};

export default Search;
