import {NavLink, Outlet} from 'react-router-dom';

import {getInvoices} from '../../helpers/data';

const Invoices = () => {
  let invoices = getInvoices();

  return (
    <div style={{display: "flex"}}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem",
        }}
      >
        {invoices.map(({number, name}) => (
          <NavLink
            style={({isActive}) => {
              return {
                display: "block",
                margin: "1rem 0",
                color: isActive ? "red" : "",
              };
            }}
            to={`/invoices/${number}`}
            key={number}
          >
            {name}
          </NavLink>
        ))}
      </nav>
      <Outlet/>
    </div>
  );
}

export default Invoices;
