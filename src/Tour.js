import React, { useState } from 'react'

export default function Tour({ id, image, name, price, info }) {


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
                    {info}
                    <button>read more</button>
                </p>
                <button className="delete-btn">not interested</button>
            </footer>
        </article>
    )
}
