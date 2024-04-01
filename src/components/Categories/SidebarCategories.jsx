import Accordion from "react-bootstrap/Accordion";

const SidebarCategories = () => {
  return (
    <>
      <Accordion defaultActiveKey={["0"]} alwaysOpen>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Categories</Accordion.Header>
          <Accordion.Body>
            <p>hello</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Author</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Price</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Tags</Accordion.Header>
          <Accordion.Body></Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};

export default SidebarCategories;
