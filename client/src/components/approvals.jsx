// import React from "react";
// import { Table, Badge } from "react-bootstrap";
// import { debtInfo } from "../blockchain/action";
// import { useEffect } from "react";
// import { useState } from "react";
// const Approvals = (props) => {
//   const { debtIds } = props;

//   const [info, setInfo] = useState([]);
//   console.log(debtIds);
//   useEffect(() => {
//     // for (let i = 0; i < debtIds.length; i++) {
//     //   console.log(debtIds[i]);
//     //   debtInfo(debtIds[i]).then((result) => {
//     //     console.log(result);
//     //     setInfo(result);
//     //     return;
//     //   });
//     // }
//     // console.log(info);
//   });

//   return (
//     <Table responsive className="col-md-10" striped bordered variant="light">
//       <thead>
//         <tr>
//           <th>#</th>
//           <th>Borrower</th>
//           <th>Lender</th>
//           <th>Amount</th>
//           <th>Status</th>
//         </tr>
//       </thead>
//       <tbody>
//         {/* {info.map((res) => console.log(res))} */}
//         <tr>
//           <td>res[0]</td>
//           <td>0x123</td>
//           <td>0x321</td>
//           <td>1eth</td>
//           <td>
//             {" "}
//             <Badge variant="warning">Pending</Badge>
//           </td>
//         </tr>
//       </tbody>
//     </Table>
//   );
// };

// export default Approvals;
