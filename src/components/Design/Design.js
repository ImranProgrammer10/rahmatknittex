import React from "react";
import { Container, Table } from "react-bootstrap";
import DesignData from "./DesignData";

const Design = () => {
  const dataItem = (items) => {
    const { code, group, construction, quality, count, weight } = items;
    return (
      <tr className="text-dark">
        <td>{code}</td>
        <td>{group}</td>
        <td>{construction}</td>
        <td>{quality}</td>
        <td>{count}</td>
        <td>{weight}</td>
      </tr>
    );
  };
  return (
    <div className="my-5">
      <h3 className="title">Design & Development</h3>

      <Container className="mb-5" fluid="md">
        <Table striped responsive="lg">
          <thead className="th">
            <tr>
              <th>Fabric Code</th>
              <th>Group</th>
              <th>Construction</th>
              <th>Quality</th>
              <th>Yarn Count</th>
              <th>Weight</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-lg-5">
                <span className="tm"> Jersey :</span>
              </th>
            </tr>

            {DesignData.slice(0, 12).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-lg-5">
                <span className="tm"> InterLock :</span>
              </th>
            </tr>
            {DesignData.slice(12, 14).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-2 ">
                <span className=" tm ms-lg-5">Rib :</span>
              </th>
            </tr>
            {DesignData.slice(14, 15).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4 t ps-2 ">
                <span className=" tm ">Yarn rugby (fleece) unbrushed :</span>
              </th>
            </tr>
            {DesignData.slice(15, 16).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-2 ">
                <span className="ms-lg-5 tm">Pique :</span>
              </th>
            </tr>
            {DesignData.slice(16, 23).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-lg-5">
                <span className=" tm">Yarn fleeces :</span>
              </th>
            </tr>
            {DesignData.slice(23, 27).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-2 ">
                <span className="ms-lg-5 tm">Milano :</span>
              </th>
            </tr>
            {DesignData.slice(27, 28).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-lg-5">
                <span className=" tm">Extra micro/polar fleeces:</span>
              </th>
            </tr>
            {DesignData.slice(28, 30).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-2 ">
                <span className=" tm ms-lg-5">Jackets:</span>
              </th>
            </tr>
            {DesignData.slice(30, 38).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-2 ">
                <span className=" tm ms-lg-5">Shirts :</span>
              </th>
            </tr>
            {DesignData.slice(38, 42).map(dataItem)}
            <tr className="text-start ">
              <th colSpan={6} className=" fs-4  ps-2 ">
                <span className=" tm ms-lg-5">Gabardine :</span>
              </th>
            </tr>
            {DesignData.slice(42, 43).map(dataItem)}
          </tbody>
        </Table>
      </Container>
    </div>
  );
};

export default Design;
