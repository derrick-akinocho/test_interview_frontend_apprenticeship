import React from "react";
import Greeting from "../../components/_atoms/Greeting";
import Counter from "../../components/_molecules/Counter";
import "./home.css"
import ListNames from "../../components/_molecules/ListNames";

function Home (props) {

    return(
        <div className="home-content">

            <Greeting name="Dev "/>

            <Counter/>

            <ListNames/>

        </div>
    )
}

export default Home