import React from "react";
import { Card, Col, Container, ListGroup, Row, Button } from "react-bootstrap";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../AdminRoute/AdminRoute";
import AddProduct from "../AddAProduct/AddProduct";
import DashboardHome from "../DashboardHome/DashboardHome";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import MyOrders from "../MyOrders/MyOrders";
import Pay from "../Pay/Pay";
import Review from "../Review/Review";

const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logOut } = useAuth();
  return (
    <div>
      <Container className="my-5 custom-nav">
        <Row>
          <Col xs={12} md={3}>
            <Card>
              <Card.Header>
                <h5 className="mt-1">Dashboard</h5>
              </Card.Header>
              <ListGroup variant="flush">
                {admin ? (
                  <>
                    <ListGroup.Item>
                      <Link to={`${url}/manageAllOrders`}>
                        Manage All Orders
                      </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to={`${url}/addAProduct`}> Add A Product </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to={`${url}/manageProducts`}>Manage Products </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to={`${url}/makeAdmin`}> Make Admin </Link>
                    </ListGroup.Item>
                  </>
                ) : (
                  <>
                    <ListGroup.Item>
                      <Link to={`${url}/pay`}> Pay </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to={`${url}/myOrder`}> My Order </Link>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <Link to={`${url}/review`}> Reviews </Link>
                    </ListGroup.Item>
                  </>
                )}
                <ListGroup.Item>
                  <Button
                    variant="danger"
                    className="custom-btn"
                    onClick={logOut}
                  >
                    <Link to={`${url}`}> Logout </Link>
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
          <Col xs={12} md={9}>
            <Switch>
              <Route exact path={path}>
                <DashboardHome></DashboardHome>
              </Route>
              <Route path={`${path}/pay`}>
                <Pay></Pay>
              </Route>
              <Route path={`${path}/myOrder`}>
                <MyOrders></MyOrders>
              </Route>
              <Route path={`${path}/review`}>
                <Review></Review>
              </Route>
              <AdminRoute path={`${path}/manageAllOrders`}>
                <ManageAllOrders></ManageAllOrders>
              </AdminRoute>
              <AdminRoute path={`${path}/addAProduct`}>
                <AddProduct></AddProduct>
              </AdminRoute>
              <AdminRoute path={`${path}/manageProducts`}>
                <ManageProducts></ManageProducts>
              </AdminRoute>
              <AdminRoute path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
            </Switch>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;
