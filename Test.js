import { Table ,Button } from "react-bootstrap";

function Test() {
    var tableObj = ['saket','charu','Ishaq']
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Text</th>
                <th>Buttons</th>
                </tr>
            </thead>
            <tbody>
            {tableObj.map(item => 
<tr>
<td>{item}</td>
<td><Button variant="primary" onClick={() =>triggerDialog()}>test</Button></td>
</tr>
)
}
                {/* <tr>
                <td>Test</td>
                <td><Button variant="primary" onClick={() =>triggerDialog('test')}>test</Button></td>
                </tr>
                <tr>
                <td>Test 1</td>
                <td><Button variant="primary" onClick={() =>triggerDialog('submit')}>test</Button></td>
                </tr>
                <tr>
                <td>Test 2</td>
                <td><Button variant="primary" onClick={() =>triggerDialog('move')}>test</Button></td>
                </tr> */}
            </tbody>
        </Table>
    );
}

function triggerDialog(src) {
    return alert(src);
}



export default Test;
