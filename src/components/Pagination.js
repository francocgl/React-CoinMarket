import React from 'react';

const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
    const pageNumbers = [];
    const [active, setActive] = React.useState(0);

    for(let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++ ){
        pageNumbers.push(i);
    }
   
    return <nav>
        <ul className="pagination">
            {pageNumbers.map((number, index) => (
                <li key={number} className={(active === index) ? 'page-item active' : 'page-item'} >
                    <span onClick={()=>{paginate(index*coinsPerPage); setActive(index)}} className="page-link">
                        {number}
                    </span>
                </li>
            ))}
        </ul>
    </nav>;
};

export default Pagination;
