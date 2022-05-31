import {Route, Routes} from "react-router-dom";

import InvoicesHome from '../../routes/InvoicesHome';
import Expenses from '../../routes/Expenses';
import Invoices from '../../routes/Invoices';
import Invoice from '../../routes/Invoices/Invoice';

const InvoicesExample = () => {
  return (
    <Routes>
      <Route path="/" element={<InvoicesHome/>}/>
      <Route path="expenses" element={<Expenses/>}/>
      <Route path="invoices" element={<Invoices/>}>
        <Route index element={<Invoice/>}/>
        <Route path=":invoiceId" element={<Invoice/>}/>
      </Route>
      <Route
        path="*"
        element={
          <main style={{padding: "1rem"}}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  )
}

export default InvoicesExample;
