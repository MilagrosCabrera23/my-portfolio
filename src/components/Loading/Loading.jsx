import { Spinner } from 'react-bootstrap';
import "./Loading.css";

const LoadingComponent = () => {
  return (
    <div className="div-loader" style={{ minHeight: '200px' }}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden"></span>
      </Spinner>
    </div>
  );
};

export default LoadingComponent;
