import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const Job = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 50 }}
    >
      <Col xs={2}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
        <Col xs={2}>
          <Button
            onClick={() => {
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data,
              });
            }}
          >
            X
          </Button>
        </Col>
      </Col>
    </Row>
  );
};

export default Job;
