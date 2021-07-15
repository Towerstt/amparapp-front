export default function PaymentsRow(props) {
  const {number, client, clientId, title, paymentStatus, ammount, date} = props
  return (
    <tr>
      <th scope="row">{number}</th>
      <td>{client}</td>
      <td>{clientId}</td>
      <td>{title}</td>
      <td>
        <span className={` ${()=>{
          switch (paymentStatus) {
            case 'PAGADO':
               'text-green-500';
              break;
            case 'cancelado':
               'text-red-500'
              break;
            case 'pendiente':
               'text-indigo-400'
              break;
          }}
        }`}>{paymentStatus}</span>
      </td>
      <td>
        <span>$</span>{ammount}
      </td>
      <td>{date}</td>
    </tr>
  );
}
