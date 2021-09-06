import React from 'react';
import Tour from './Tour';

export default function Tours(props) {
    const { tours, removeTour, fetchTours } = props;
    //var to store our result
    let elems = null;
    //if there are tours, show them, else show button to refresh, so we try to 
    //fetch again our tours on clicking it
    if (tours.length) {
        elems = tours.map((tour) => {
            return (
                <Tour key={tour.id} {...tour} removeTour={removeTour} />
            )
        })
    } else {
        elems = <button className='btn' onClick={() => fetchTours()}>refresh</button>
    }
    return (
        <section>
            <div className="title">
                {/* if we have tours show message "our tours" if not show "no tours left" */}
                <h2>{tours.length ? 'Show tours' : 'No tours left'}</h2>
                <div className="underline"></div>
            </div>
            {elems}
        </section>


    )

}
