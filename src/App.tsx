import { Layout, InputNumber, Form, Button, Menu, Breadcrumb } from "antd";
import React from "react";

const { Content, Footer, Header } = Layout;

const App: React.FC = () => {
  return (
    <Layout>
      <Header style={{ position: "sticky", top: 0, zIndex: 1, width: "100%" }}>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            {
              key: "main",
              label: "Refractive Calculator",
            },
          ]}
        />
      </Header>
      <Layout>
        <Content
          style={{
            padding: "25px 50px",
          }}
        >
          <Breadcrumb>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            labelWrap
            colon={false}
          >
            <Form.Item
              label="Central Corneal Thickness"
              name="cct"
              rules={[
                {
                  required: true,
                  message: "Please provide corneal thickness",
                },
              ]}
            >
              <InputNumber min={0} max={1000} addonAfter={"μm"} />
            </Form.Item>
            <Form.Item
              label="Mean Sphere"
              name="mse"
              rules={[
                { required: true, message: "Please provide mean sphere" },
              ]}
            >
              <InputNumber addonAfter={"D"} />
            </Form.Item>
            <Form.Item label=" ">
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center" }}>
        Reference:
        https://academic.oup.com/view-large/figure/5655627/ldm01502.jpeg
      </Footer>
    </Layout>
  );
};
export default App;
