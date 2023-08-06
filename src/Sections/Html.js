import axios from "axios";
import React, { useEffect, useState } from "react";

function Html() {
    const [htmlData, setHtmlData] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:4000/html")
            .then((res) => {
                setHtmlData(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const lists = htmlData.map((data) => (
        <div className="htmldata" key={data.id}>
            <h1>{data.heading}</h1>
            <img src={data.image} alt="html tutorial" />
            <ul>
                <h2>Introduction :</h2>
                {data.introduction.map((intro) => (
                    <li>{intro}</li>
                ))}
            </ul>
            <br />
            <h2>Tags : </h2>
            <p>
                <b>Defination :</b> {data.tags.defination}
            </p>
            <br />
            <p>
                <b>Semantic Tags : </b>
                {data.tags.types.semantics}
            </p>
            <p>
                <b>Strucure Tags : </b>
                {data.tags.types.structure}
            </p>
            <p>
                <b>Formatting : </b>
                {data.tags.types.formatting}
            </p>
            <br />
            <h2>Attribtues : </h2>
            <p>
                <b>Introduction : </b>
                {data.attribute.introduction}
            </p>
            <p>
                <b>Syntax :: </b>
                <em>{data.attribute.syntax}</em>
            </p>
            <br />
            <h2>Anchor Tag :</h2>
            <p>
                <b>Introduction : </b>
                {data.anchor.introduction}
            </p>
            <p>
                <b>Syntax :: </b>
                {data.anchor.syntax}
            </p>
            <br />
            <h2>HTML Image : </h2>
            <p>
                <b>Introduction :</b> {data.img.introduction}
            </p>
            <p>
                <b>Syntax :: </b>
                {data.img.syntax}
            </p>
            <br />
            <h2>img attribute : </h2>
            <p>
                <b>src : </b>
                {data.img.attribute.src}
            </p>
            <p>
                <b>alt : </b>
                {data.img.attribute.alt}
            </p>
            <p>
                <b>width : </b>
                {data.img.attribute.width}
            </p>
            <p>
                <b>height : </b>
                {data.img.attribute.height}
            </p>
            <br />
            <h2>HTML TABLE : </h2>
            <p>
                <b>Introduction : </b>
                {data.table.introduction}
            </p>
            <p>
                <b>Table Tags : </b>
            </p>
            <ul>
                {data.table.tags.map((tag) => (
                    <li>{tag}</li>
                ))}
            </ul>
            <br />
            <h2>HTML Lists : </h2>
            <p>
                <b>Introduction : </b>
                {data.lists.introduction}
            </p>
            <ul>
                {data.lists.types.map((type) => (
                    <li>{type}</li>
                ))}
            </ul>
            <pre>{data.lists.syntax[0]}</pre>
            <br />
            <pre>{data.lists.syntax[1]}</pre>
        </div>
    ));

    return <div className="html">{lists}</div>;
}

export default Html;
