import Pagination from '../../ui/invoices/pagination';
import InvoiceStatus from '../../ui/invoices/status';

export default function Page() {
  return (
    <>
      <h1>Invoices</h1>
      <InvoiceStatus status='payed' />
      <Pagination totalPages={10} />
    </>
  );
}
