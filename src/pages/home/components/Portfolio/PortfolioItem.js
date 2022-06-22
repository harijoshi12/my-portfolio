import React from 'react'

function PortfolioItem(props) {
    const {img, title, git_link, live_demo_link} = props
  return (
    <div className='portfolio_item'>
        <div className="imgbox">
            <img src={img} alt="" />
        </div>
        <h2>{title}</h2>
        <div className="item_btns">
            <a href={git_link}>Github</a>
            <a href={live_demo_link}>Live Demo</a>
        </div>
    </div>
  )
}

export default PortfolioItem