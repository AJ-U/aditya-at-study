import axios from "axios";
import { useEffect, useState } from "react";

function useCounter(url) {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([]);
    const increment = (incrementBy) => {
        setCount(count + incrementBy);
    };
    const fetchProducts = async () => {
        const res = await axios.get(url);
        setData(res.data);
    }
    useEffect(() => {
        fetchProducts();
    }, []);

    return { count, increment, data };
}

export default useCounter;