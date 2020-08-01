import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title.js";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "Free cocktails",
                info:
                    "Nisi fugiat qui anim anim deserunt veniam minim velit enim irure.",
            },
            {
                icon: <FaHiking />,
                title: "Endless Hiking",
                info:
                    "Nisi fugiat qui anim anim deserunt veniam minim velit enim irure.",
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info:
                    "Nisi fugiat qui anim anim deserunt veniam minim velit enim irure.",
            },
            {
                icon: <FaBeer />,
                title: "Strongest Beer",
                info:
                    "Nisi fugiat qui anim anim deserunt veniam minim velit enim irure.",
            },
        ],
    };

    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        );
    }
}
