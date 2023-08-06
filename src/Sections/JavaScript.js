import axios from "axios";
import React, { useEffect, useState } from "react";

function JavaScript() {
    const [jsdata, setJsData] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/javascript")
            .then((res) => {
                setJsData(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }, []);

    const JavaScriptData = jsdata.map((data) => (
        <div className="htmldata">
            <div className="intro">
                <h1>{data.heading}</h1>
                <img src={data.image} alt="Javascript Tutorial" />
                <h2>{data.introduction.heading}</h2>
                <p>{data.introduction.defination}</p>
                <h2>{data.introduction.howlinks.heading}</h2>
                <p>{data.introduction.howlinks.body}</p>
                <ul>
                    {data.introduction.howlinks.ways.map((data) => (
                        <li>{data}</li>
                    ))}
                </ul>
                <h3>Syntax : </h3>
                <pre>{data.introduction.howlinks.syntax}</pre>
                <br />
                <h2>{data.introduction.history.heading}</h2>
                <p>{data.introduction.history.details}</p>
                <br />
                <h2>{data.introduction.feature.heading}</h2>
                <p>{data.introduction.feature.details}</p>
                <br />
                <ul>
                    {data.introduction.feature.things.map((thing) => (
                        <li>{thing}</li>
                    ))}
                </ul>
            </div>
        </div>
    ));

    return <div>{JavaScriptData}</div>;
}

export default JavaScript;
