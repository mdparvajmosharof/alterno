import { Link } from "react-router-dom"
import Navbar from "../Component/Navbar"


const MyQueries = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="p-6 py-12 bg-emerald-600 text-gray-50 my-10 rounded-xl">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <h2 className="text-center text-6xl tracking-tighter font-bold">ADD
                            <br className="sm:hidden" /> QUERY
                        </h2>
                        <div className="space-x-2 text-center py-2 lg:py-0">
                            <span>Share your product inquiries to receive insights and recommendations.</span>
                        </div>
                        <Link to="/addQuery"><a href="#" rel="noreferrer noopener" className="px-5 mt-4 lg:mt-0 py-3 rounded-md border block bg-gray-900 text-gray-50 border-gray-600">Add Query</a></Link>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default MyQueries
