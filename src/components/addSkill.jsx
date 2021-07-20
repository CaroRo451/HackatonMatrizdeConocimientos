import React from 'react';
import { Modal, Button, Container, Col, Row, Card, ListGroup, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
/*import {XLg} from 'react-bootstrap-icons';
<XLg/>*/

function MyVerticallyCenteredModal(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Añadir aptitudes
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={2}>
                    Nivel
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="Básico"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="Regular"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="Bueno"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                    <Form.Check
                      type="radio"
                      label="Excelente"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
            </Col>
          </Row>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Guardar y enviar a evaluación</Button>
      </Modal.Footer>
    </Modal>
  );
}

function AddSkill() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Añadir aptitud nueva
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default AddSkill;