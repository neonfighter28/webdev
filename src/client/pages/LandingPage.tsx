import { Layout, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faCopyright } from '@fortawesome/free-solid-svg-icons';
import "./pages.css";

const {Content, Footer} = Layout;

function LandingPage() {
    return (
        <Layout className="layout">
            <Content className="content">
                <Row>
                    <Col span={8}>
                        <div>
                            <span id="topic">
                                <h5>FWE 2023</h5>
                            </span>
                            <h1 id="title">Open Data Map</h1>
                        </div>
                    </Col>
                    <Col span={12}/>
                    <Col span={4}>
                        <Button type="text" icon={<FontAwesomeIcon icon={faBars}/>}>HERE</Button>
                        <Link to="/content">
                            <Button>CONTENT</Button>
                        </Link>
                    </Col>
                </Row> 
            </Content>
            <Footer className='footer'>
                <span>
                    <FontAwesomeIcon icon={faCopyright}/>
                    <p>Elias Csuka, Joshua Durrant, Leander Hemmi, Cedric Koller, Mathias Schmid; 2023</p>
                </span>
            </Footer>
        </Layout>
    );
}

export default LandingPage;