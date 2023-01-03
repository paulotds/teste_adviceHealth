import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './SearchBar.scss';
import { Search } from "react-bootstrap-icons";

function BasicExample() {
  return (
    <Form className="search">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Buscar" />
      </Form.Group>
      <Button variant="primary" type="submit">
        <Search className="ico" />
      </Button>
    </Form>
  );
}

export default BasicExample;