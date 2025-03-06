import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header'
import Footer from './Footer'

const Dashboard = () => {
    return (
        <div>
            <Header />
            <main>
                <article>
                <Outlet />
                </article>
            </main>
            <Footer />
        </div>
    )
}

export default Dashboard