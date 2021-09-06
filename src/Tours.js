import React from 'react';
import Tour from './Tour';

export default function Tours(props) {
    const tours = props.tours;
    const elems = tours.map((tour) => {
        return (
            <Tour key={tour.id} {...tour} />
        )
    })
    return (
        <section>
            <div className="title">
                <h2>ours tours</h2>
                <div className="underline"></div>
            </div>
            {elems}
        </section>


    )

}
