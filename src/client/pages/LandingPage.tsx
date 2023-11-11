import { Layout, Col, Row, Button } from 'antd';
import { Link } from 'react-router-dom';
import "./pages.css";

const {Content} = Layout;

function LandingPage() {
    return (
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
                    <Button type="text" icon={<i className="fa-solid fa-bars"></i>}>HERE</Button>
                    <Link to="/content">
                        <Button>CONTENT</Button>
                    </Link>
                </Col>
            </Row> 
        </Content>
    );
}

export default LandingPage;