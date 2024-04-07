import UserDashboard from "@/Features/UserDashboard/UserDashboard";
import { formatCurrency, formatDate } from "@/Hooks/helpers";
import { Table, Badge } from "@radix-ui/themes";

const TransactionList = ({ userTransactions, acc }) => {
 return (

  <Table.Root variant='surface'>
   <Table.Header>
    <Table.Row>
     <Table.ColumnHeaderCell>Transactions</Table.ColumnHeaderCell>
     <Table.ColumnHeaderCell >
     </Table.ColumnHeaderCell>
    </Table.Row>
   </Table.Header>

   <Table.Body>
    {userTransactions.reverse().map(t => <Table.Row key={t.id}>

     <Table.RowHeaderCell>
      <UserDashboard transaction={t} >
       <div className=" grid gap-1">
        <p className=" capitalize">{t.name}</p>
        <span className=" text-xs text-neutral-500">{formatDate(t.created_at)}, Checking</span>
       </div>
      </UserDashboard>
     </Table.RowHeaderCell>
     <Table.Cell >
      <div className="grid gap-1 text-right place-content-end place-items-end">
       <div className={t.type === 'deposit' ? ' text-right text-green-400' : ' text-right text-rose-400'}>{t?.type === 'deposit' ? '+' : '-'}{formatCurrency({ value: t.amount, currency: acc.currency })}</div>
       <Badge color={`${t.status === 'success' ? 'green' : t.status === 'failed' ? 'red' : 'yellow'}`}>{t.status}</Badge>
      </div>
     </Table.Cell>

    </Table.Row>)}
   </Table.Body>
  </Table.Root>

 );
};

export default TransactionList;