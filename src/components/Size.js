import React from 'react';
import { Link } from 'react-router-dom';

const Size = ({ addSize, thali }) => {
  const size = ['Khali Bali Thali', 'Bahubali Thali', 'Dara Singh Thali'];

  return (
    <div className="size container">

      <h3>Step 1: Choose Your Thali size</h3>
      <ul>
        {size.map(base => {
          let spanClass = thali.size === base ? 'active' : '';
          return (
            <li key={base} onClick={() => addSize(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
          )
        })}
      </ul>

      {thali.size && (
        <div className="next">
          <Link to="/dish">
            <button>Next</button>
          </Link>
        </div>
      )}

    </div>
  )
}

export default Size;