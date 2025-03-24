import { fetchFilteredCustomers } from '@/app/lib/data';
import { FormattedCustomersTable } from '@/app/lib/definitions';
import CustomersTable from '@/app/ui/customers/table';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(props: Readonly<Partial<{ searchParams: Promise<{ query: string }> }>>) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  const customers: FormattedCustomersTable[] = await fetchFilteredCustomers(query);
  return (
    <>
      <p>Customer Dashboard Page</p>
      <CustomersTable customers={customers} />
    </>
  );
}
