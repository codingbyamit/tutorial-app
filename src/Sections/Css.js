import axios from "axios";
import React, { useEffect, useState } from "react";
function Css() {
    const [cssData, setCssData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/css")
            .then((res) => {
                setCssData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const lists = cssData.map((data) => (
        <div className="htmldata" key={data.id}>
            <h1>{data.heading}</h1>
            <img src={data.image} alt="CSS Tutorial" />
            <ul>
                <h2>Introduction :</h2>
                {data.introduction.map((intro) => (
                    <li key={data.id}>{intro}</li>
                ))}
            </ul>
            <br />
            <p>{data.types.heading}</p>
            <br />
            <ul>
                {data.types.type.map((type) => (
                    <li>{type}</li>
                ))}
            </ul>
            <br />
            <div className="syntax">
                <h2>CSS Syntax</h2>
                <p>{data.syntax.defination}</p>
                <img src={data.syntax.image} alt="CSS Syntax" />
                <ul>
                    {data.syntax.details.map((de) => (
                        <li>{de}</li>
                    ))}
                </ul>
            </div>
            <br />
            <div className="color">
                <h2>{data.color.heading}</h2>
                <p>{data.color.defination}</p>
                <ul>
                    {data.color.ways.map((ways) => (
                        <li>{ways}</li>
                    ))}
                </ul>
                <br />
                <p>{data.color.properties.built.defination}</p>
                <h5>Syntax : </h5>
                <pre>{data.color.properties.built.syntax}</pre>
            </div>
        </div>
    ));

    return <div>{lists}</div>;
}

export default Css;
