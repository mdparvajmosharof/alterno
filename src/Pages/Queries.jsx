import { useEffect, useState } from "react";
import Navbar from "../Component/Navbar";
import axios from "axios";
import Query from "./Query";

const Queries = () => {

    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true)



    useEffect(() => {
        axios.get('http://localhost:5000/queries')
            .then(res => {
                console.log(res.data);
                setQueries(res.data);
                setLoading(false);
            })
    }, [])




    return (
        <div className="dark">
            <Navbar></Navbar>

            {loading ? (<div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-black dark:border-violet-600 mx-auto mt-40"></div>) : (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  my-10">
                {
                    queries.map((query) => (<Query query={query}></Query>))
                }
            </div>)}

        </div>
    )
}

export default Queries;
