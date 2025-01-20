import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa'; // Import icons

const Dashboard = () => {
    return (
        <div>
            <div className="flex h-screen bg-gray-100">

                {/* Sidebar */}
                <div className="hidden md:flex flex-col w-64 bg-gray-800">
                    <div className="flex items-center justify-center h-16 bg-gray-900">
                        <span className="text-white font-bold uppercase">Bistrow-boss</span>
                    </div>
                    <div className="flex flex-col flex-1 overflow-y-auto">
                        <nav className="flex-1 px-2 py-4 bg-gray-800">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center px-4 py-2 text-yellow-500"
                                        : "flex items-center px-4 py-2 text-gray-100 hover:text-yellow-500"
                                }
                            >
                                <FaHome className="h-6 w-6 mr-2" /> {/* React Icon */}
                                Go To Home
                            </NavLink>
                            <NavLink
                                to="/dashboard/carts"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center px-4 py-2 mt-2 text-yellow-500"
                                        : "flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-yellow-500"
                                }
                            >
                                <FaShoppingCart className="h-6 w-6 mr-2" /> {/* React Icon */}
                                Carts
                            </NavLink>
                            <NavLink
                                to="/dashboard/profile"
                                className={({ isActive }) =>
                                    isActive
                                        ? "flex items-center px-4 py-2 mt-2 text-yellow-500"
                                        : "flex items-center px-4 py-2 mt-2 text-gray-100 hover:text-yellow-500"
                                }
                            >
                                <FaUser className="h-6 w-6 mr-2" /> {/* React Icon */}
                                Your Profile
                            </NavLink>
                        </nav>
                    </div>
                </div>

                {/* Main content */}
                <div className="flex flex-col flex-1 overflow-y-auto">
                    <div className="flex items-center justify-between h-16 bg-white border-b border-gray-200">
                        <div className="flex items-center px-4">
                            <input className="mx-4 w-full border rounded-md px-4 py-2" type="text" placeholder="Search" />
                        </div>
                    </div>

                    {/* Outlet for nested routes */}
                    <div className="p-4">
                        <Outlet />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Dashboard;
