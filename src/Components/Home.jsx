import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';

function Homepage() {

    const [countries, setCountries] = useState([]);
    const [countryMatch, setCountryMatch] = useState([]);



    //getting data from API
    useEffect(() => {
        const loadCountries = async () => {
            const response = await axios.get("https://restcountries.eu/rest/v2/all");
            setCountries(response.data);
        };
        loadCountries();
    }, [])



    const searchCountries = (text) => {
        if (!text) {                     //if searchbox empty clearing suggestions
            setCountryMatch([]);
        } else {

            let matches = countries.filter((country) => {
               const regex = new RegExp(`${text}`, 'gi');  //gi for both uppercase and lowercase matching
                return country.name.match(regex)
            });

            setCountryMatch(matches)

        }
    };




    return (

        <>
            <div className="container">

                <div className="first_box">
                    <div className="inside_first_box">
                        <div className="top">

                            <a href="#"><img src="http://www.remoteroofing.com/assets/svgs/logo.svg" width="85px" height="85px" /></a>
                            <p className="number"> <i className="bell fas fa-phone-alt"></i>800-201-9</p>
                        </div>
                        <div className="nav">

                            <ul className="navlist">
                                <li><Link to="/home" className="links">Home</Link></li>
                                <li><Link to="/services" className="links">Services</Link></li>
                                <li><Link to="/howitworks" className="links">How It Works</Link></li>
                            </ul>
                        </div>

                        <div className="main_title">

                            <h2>Roof Inspections made remote and easy</h2>
                            <p className="description">Get your roof inspected remotely and connect with out trusted roofers</p>
                        </div>



                        <div className="searchbox">
                            <form >
                                <span><i className=" pointer fas fa-map-marker-alt"></i></span>
                                <input type="text" list="location" name="location" className="location" onChange={(e) => searchCountries(e.target.value)} />

                                <datalist id="location">
                                    {countryMatch.map(function (item, index) {
                                        return <option key={index} value={item.name} ></option>
                                    })}
                                </datalist>
                                <button className="directions">Get Directions</button>
                            </form>
                        </div>




                    </div>


                </div>
                <div className="second_box">



                </div>

                <div className="upper_box">

                    <p><i className="fas fa-binoculars"></i>Free Inspection</p>
                    <p><i className="fas fa-tools"></i>File A Claim</p>
                    <p><i className="fas fa-copy"></i>Replace or Repair a tool</p>
                </div>

            </div>

        </>
    );
}

export default Homepage;
