import React, { useEffect, useState } from 'react'

export default function Tour({ id, image, name, price, info }) {
    //show more
    const [readMore, setReadMore] = useState(false);
    //slice our info property to not fully show description, only part of it
    const slicedInfo = `${info.slice(0, 155)}...`
    //function to show info
    const showInfo = () => {
        //toggle info depending on current readmore state if its true,then put it in false and reverse
        setReadMore(!readMore);
    }
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">
                        ${price}
                    </h4>
                </div>
                <p>
                    {/* if readMore is in false state we show only sliced info
                    else if user pressed "Read more" we show full info */}
                    {readMore ? `${info}` : `${slicedInfo}`}
                    <button onClick={showInfo}>
                        {/* if readMore is in false state, we show text as 'Read More'
                        else we show it as 'Show Less' */}
                        {readMore ? 'Show Less' : 'Read More'}
                    </button>
                </p>
                <button className="delete-btn">not interested</button>
            </footer>
        </article>
    )
}
