import CustomersTable from '@/app/ui/customers/table';
export default function Page() {
  return (
    <>
      <p>Customer Dashboard Page</p>
      <CustomersTable customers={[]} />
    </>
  );
}
