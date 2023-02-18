import PropTypes from "prop-types";
import { Table, TableHead, TableBody, Row, HeadCell, Cell } from "./transactionHistory.styled";

export const TransactionHistory = ({  items }) => {
    
    return (
        <Table>
            <TableHead>
    <Row>
      <HeadCell>Type</HeadCell>
      <HeadCell>Amount</HeadCell>
      <HeadCell>Currency</HeadCell>
    </Row>
            </TableHead>
            <TableBody>
            {items.map(({id, type, amount, currency}) => { return <Row key={id}>
                <Cell>{type}</Cell>
                <Cell>{amount}</Cell>
                <Cell>{currency}</Cell>
            </Row>
            })}
                </TableBody>
        </Table>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }))
}