import React, { Component } from 'react'
import Title from "./Title"
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa"
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:'a market maker (a price maker) who is almost always willing to accept both buy and'
            },
            {
                icon:<FaHiking/>,
                title:"Endless Hiking",
                info:'a market maker (a price maker) who is almost always willing to accept both buy and'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info:'a market maker (a price maker) who is almost always willing to accept both buy and'
            },{
                icon:<FaBeer/>,
                title:"Strongest Beer",
                info:'a market maker (a price maker) who is almost always willing to accept both buy and'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return <article key={index} className="services">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}