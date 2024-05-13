import {Outlet} from "react-router-dom"

const Root = () => {
    return (
        <div className=" max-w-6xl mx-auto mt-10">

            <Outlet></Outlet>
        </div>
    );
};

export default Root;