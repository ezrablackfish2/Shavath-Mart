import "../app/globals.css"
import Header from "../components/Header";
import Hero from "../components/Hero";
import Search from "../components/Search";
import Products from "../components/Products";
import data from '../utils/data.json'
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Header/>
            <Hero/>
            <div className="flex justify-center my-10">
                <Search/>
            </div>
            <div className="flex justify-center mb-28">
                <Products data={data}/>
            </div>
            <Footer />
        </>
    )
}
