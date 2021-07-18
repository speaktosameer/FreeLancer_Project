import React from 'react'
import "../components/styles/BrowseProject.css"
import { Link } from "gatsby";
import {browsejob } from '../data/browsejob'
const BrowseProject = () => {
    return (
        <main className="main">
            <aside>
                    Filer Porjects
            </aside>

            <div className="projects">
                
                {browsejob.map(data=>(
                    <div className="project_container">
                    <div className="description">
                        <h3><Link to="#">{data.title}</Link></h3>
                        <p>{data.discription}</p>
                        <span className="category"><strong>{data.category}</strong></span>
                        <span className="subcategory"><strong>{data.subcategory}</strong></span>
                    </div>

                    <div className="price_info">
                       Nrs-  {data.price}
                    </div>
                <hr />

                </div>
                ))
                    }
            </div>
        </main>
    )
}

export default BrowseProject
