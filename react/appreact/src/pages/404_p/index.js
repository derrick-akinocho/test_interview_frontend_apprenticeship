import "./404.css"
import React from "react";
import Button from "../../components/_atoms/Button";

function Page404 (props) {
    return(
        <div className="content404">
            <div className="_404">

                <h1>Zzz (404)</h1>

                <p>Oops! It looks like this page has fallen asleep. Come back later !</p>

                <Button filled title="Aller à la maison" to="/"/>

            </div>
        </div>
    )
}

export default Page404