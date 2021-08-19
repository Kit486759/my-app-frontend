import React from 'react'
import Header from '../header/Header';
import Footer from '../footer/Footer';

export default function Wrapper({ children }) {
    return (
       <>
            <Header />
            <section className="main" style={{ minHeight: '100%', backgroundColor: "green", textAlign:'center' }}>
                <div className="main__wrapper">
                    {children}
                </div>
            </section>
            <Footer />
     </>  
    )
}
