import React from 'react'
import {TbPolygon} from 'react-icons/tb'
import {BiCodeAlt, BiSearchAlt,BiSortDown, BiLink} from 'react-icons/bi'
import {ImTree} from 'react-icons/im'

export default function Services() {

    const cardInfo = [
        {
            icon: TbPolygon,
            heading:"Graphs",
            desc:"Understand Traversals, Topological Sort and various path finding algorithms"
        },
        {
            icon: BiCodeAlt,
            heading:"Dynamic Programming",
            desc:"Know different patterns of DP such 1D DP and 2D DP"
        },
        {
            icon: ImTree,
            heading:"Trees",
            desc:"Visualize Tree traversals and other important hard level questions"
        },
        {
            icon: BiSearchAlt,
            heading:"Searching",
            desc:"Learn Binary Search and Linear Search in the best way"
        },
        {
            icon: BiSortDown,
            heading:"Sorting",
            desc:"Visualing Merge Sort and Quick Sort is truly fun"
        },
        {
            icon:BiLink,
            heading:"Linked Lists",
            desc:"All types of Linked Lists in One place"
        }
    ];

    const showCards = cardInfo.map((ele, index) => {
        return (
            <div className="serviceCard" key={index}>
                <ele.icon id='serviceCardIcon'/>

                <div id="serviceCardHeading">
                    {ele.heading}
                </div>

                <div id="serviceCardDesc">
                    {ele.desc}
                </div>
            </div>
        );
    }) 
  return (
    <div className='servicesSection' id='toService'>
        <div className="servicesHeader">
            <div className="servicesHeader-title">
                Understand Difficult Algorithms
            </div>
            <div className="servicesHeader-subTitle">
                Problems of Graphs, Trees and the final boss Dynamic Programming now <span id='specialText'>VISUALIZED</span>
            </div>
        </div>

        <div className="serviceCardsSection">
            {showCards}
        </div>
    </div>
  )
}
