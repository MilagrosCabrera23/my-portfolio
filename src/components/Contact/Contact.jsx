import "./Contact.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Col, Button, Form } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactComponent = () => {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const datos = { nombre, telefono, email, asunto, mensaje };

    try {
      const resp = await fetch("http://localhost:8000/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      });

      if (resp.ok) {
        toast.success("Mensaje enviado correctamente", {
          position: "top-center",
          toastClassName: "toast-success",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

        setNombre("");
        setTelefono("");
        setEmail("");
        setAsunto("");
        setMensaje("");
      } else {
        toast.error("Error al enviar el mensaje", {
          position: "top-center",
          toastClassName: "toast-error",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (err) {
      toast.error("Error de conexión con el servidor", {
        position: "top-center",
        toastClassName: "toast-error",
        autoClose: 5000,
      });
    }
  };

  return (
    <Container className="about-contacto container" id="contacto">
      <Col>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h2 className="text-center title-contacto">Formulario de Contacto</h2>
          <p className="subtitle-contacto">
            ¿Querés contactarme? Enviame un mensaje directamente desde este
            formulario y te respondere a la brevedad.
          </p>
        </motion.div>
      </Col>
      <Col>
        <Form className="form-contacto" onSubmit={handleSubmit}>
          <Form.Group controlId="formNombre">
            <Form.Label className="text-forms">Nombre Completo:</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Escriba su nombre aqui"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formTelefono" className="mb-3">
            <Form.Label className="text-forms">Teléfono:</Form.Label>
            <Form.Control
              type="tel"
              required
              placeholder="Ingrese su número de contacto"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label className="text-forms">Gmail: </Form.Label>
            <Form.Control
              type="email"
              required
              placeholder="Ingrese su correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formAsunto" className="mb-3">
            <Form.Label className="text-forms">Asunto:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Motivo del mensaje"
              value={asunto}
              onChange={(e) => setAsunto(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="text-forms">Escribi tu mensaje:</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={5}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mb-2 button-contacto d-flex"
          >
            Enviar mensaje
          </Button>
        </Form>
      </Col>
      <ToastContainer />
    </Container>
  );
};

export default ContactComponent;
