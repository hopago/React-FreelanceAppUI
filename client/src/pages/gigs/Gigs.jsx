import { useState } from 'react';
import './gigs.scss';
import GigCard from '../../components/gigCard/GigCard';
import { gigs } from '../../data';


const Gigs = () => {

  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState("sales");

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Horeelance | UI & UX</span>
        <h1>UI Artist</h1>
        <p>
          Explore the boundaries of art and technology with horeelance experts
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort By</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" onClick={() => setOpen(!open)} alt="" />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => setSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => setSort("sales")}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
        <div className="cards">
            {gigs.map(gig => (
              <GigCard key={gig.id} item={gig} />
            ))}
          </div>
      </div>
    </div>
  );
}

export default Gigs
