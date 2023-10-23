import { useState } from "react"; 
import apiClient from "../api/api-client-axios";
import { useEffect } from "react";

function useProducts(user, token) {
        const [products, setProducts ] = useState([]);
        const [error, setError] = useState("");
        const [isLoading, setLoading] = useState(false);

        useEffect(() => {
		
		if (!token && !user) {
		setLoading(true);
                apiClient.get("")
                        .then(res =>  {
				setProducts(res.data);
				console.log(res.data);
				setLoading(false);
				const jsonData = JSON.stringify(res.data, null, 2);
                                fs.writeFile('data.json', jsonData, (err) => {
          if (err) {
            console.error('Error writing JSON file:', err);
          } else {
            console.log('JSON file created successfully.');
          }
	  });
			})
                        .catch(err =>{
				setError(err.message)
				setLoading(false);
			});
		} else if (token && user) {
                setLoading(true);
                apiClient.get("" ,
			{
                                headers: {
                                'Content-Type': 'application/json',
                                Authorization: `Bearer ${token}`,
                        },
				})
                        .then(res =>  {
                                setProducts(res.data);
				console.log(res.data);
                                setLoading(false);
				const jsonData = JSON.stringify(res.data, null, 2);
				fs.writeFile('data.json', jsonData, (err) => {
          if (err) {
            console.error('Error writing JSON file:', err);
          } else {
            console.log('JSON file created successfully.');
          }
	  });
                        })
                        .catch(err =>{
                                setError(err.message)
                                setLoading(false);
                        });
		}

        }, []);
	return {products, error, isLoading};
};

export default useProducts;

