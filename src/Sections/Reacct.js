import axios from "axios";
import React, { useEffect, useState } from "react";

function Reacct() {
    const [reactData, setReactData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/react")
            .then((res) => {
                setReactData(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    const reactD = reactData.map((data) => (
        <div className="htmldata">
            <h1>{data.heading}</h1>
            <img src={data.image} alt="React Tutorial" />
            <h2>{data.introduction.heading}</h2>
            <p>{data.introduction.defination}</p>
            <br />

            <h2>{data.introduction.reason.heading}</h2>
            <p>{data.introduction.reason.details}</p>
            <br />
            <h2>{data.introduction.history.heading}</h2>
            <p>{data.introduction.history.details}</p>
            <br />
            <div className="howwork">
                <div className="text">
                    <h2>{data.introduction.howwork.heading}</h2>
                    <p>{data.introduction.howwork.details}</p>
                </div>
                <div className="howworkimg">
                    <img
                        src={data.introduction.howwork.image}
                        alt="How React Works"
                    />
                </div>
            </div>
            <br />
            <h2>{data.component.heading}</h2>
            <p>{data.component.defination}</p>
        </div>
    ));
    return <div>{reactD}</div>;
}

export default Reacct;
