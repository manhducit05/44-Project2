import React, { useState } from "react";
import {
  Tabs,
  Form,
  Input,
  Button,
  DatePicker,
  Switch,
  Upload,
  Row,
  Col,
  Select,
} from "antd";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./setting.css"
const { Option } = Select;

const SettingsPage = () => {
  const [form] = Form.useForm();
  const [avatar, setAvatar] = useState("/images/avatar.svg"); // ảnh mặc định

  const handleSave = (values) => {
    toast.success("Lưu thông tin thành công 🎉", { autoClose: 2000 });
    console.log("Saved values:", values);
  };


  const tabItems = [
    {
      key: "1",
      label: "Edit Profile",
      children: (
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
          requiredMark="optional"
        >
          <Row gutter={16}>
            <Col xs={24} lg={4}>
              <Upload
                showUploadList={false}
                beforeUpload={() => false}
                onChange={({ fileList }) => {
                  if (fileList && fileList[0]) {
                    const file = fileList[0].originFileObj;
                    if (file) {
                      const previewUrl = URL.createObjectURL(file);
                      setAvatar(previewUrl);
                    }
                  }
                }}
              >
                <img
                  className="avatar"
                  src={avatar}
                  alt="avatar"
                  style={{
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
                <Button className="change-avtar-button">
                  <img src="/images/change-avatar.svg" alt="change-avatar-icon" />
                </Button>
              </Upload>
            </Col>

            <Col xs={24} lg={20}>
              <Row gutter={[16, 16]}>
                <Col xs={24} lg={12}>
                  <Form.Item label="Your Name" name="name" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Charlene Reed" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item label="User Name" name="username" rules={[{ required: true }]}>
                    <Input size="large" placeholder="Charlene Reed" />
                  </Form.Item>
                </Col>

                <Col xs={24} lg={12}>
                  <Form.Item label="Email" name="email" rules={[{ required: true }]}>
                    <Input size="large" placeholder="charlenereed@gmail.com" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item label="Password" name="password" rules={[{ required: true }]}>
                    <Input.Password size="large" placeholder="********" />
                  </Form.Item>
                </Col>

                <Col xs={24} lg={12}>
                  <Form.Item label="Date of Birth" name="dob" rules={[{ required: true }]}>
                    <DatePicker size="large" style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Present Address"
                    name="presentAddress"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder="San Jose, California, USA" />
                  </Form.Item>
                </Col>

                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Permanent Address"
                    name="permanentAddress"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder="San Jose, California, USA" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item label="City" name="city" rules={[{ required: true }]}>
                    <Input size="large" placeholder="San Jose" />
                  </Form.Item>
                </Col>

                <Col xs={24} lg={12}>
                  <Form.Item
                    label="Postal Code"
                    name="postalCode"
                    rules={[{ required: true }]}
                  >
                    <Input size="large" placeholder="45962" />
                  </Form.Item>
                </Col>
                <Col xs={24} lg={12}>
                  <Form.Item label="Country" name="country" rules={[{ required: true }]}>
                    <Input size="large" placeholder="USA" />
                  </Form.Item>
                </Col>
              </Row>
            </Col>
          </Row>
          <Button className="save-button">
            Save
          </Button>
        </Form >
      ),
    },
    {
      key: "2",
      label: "Preferences",
      children: (
        <Form layout="vertical" onFinish={handleSave}>
          <Row gutter={16}>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Currency"
                name="currency"
                rules={[
                  { required: true, message: "Vui lòng nhập đơn vị tiền tệ" },
                ]}
              >
                <Input size="large" placeholder="USD" name="currency" />
              </Form.Item>
            </Col>
            <Col xs={24} lg={12}>
              <Form.Item
                label="Time Zone"
                name="timezone"
                rules={[
                  { required: true, message: "Vui lòng chọn múi giờ" },
                ]}
              >
                <Select placeholder="Select Time Zone" size="large">
                  <Option value="gmt-12">
                    (GMT-12:00) International Date Line West
                  </Option>
                  <Option value="gmt+7">(GMT+7:00) Asia/Bangkok</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item label="Notification">
            <div className="notification-item">
              <Form.Item name="notif1" valuePropName="checked" noStyle>
                <Switch />
              </Form.Item>
              <span>I send or receive digital currency</span>
            </div>

            <div className="notification-item">
              <Form.Item name="notif2" valuePropName="checked" noStyle>
                <Switch />
              </Form.Item>
              <span>I receive merchant order</span>
            </div>

            <div className="notification-item">
              <Form.Item name="notif3" valuePropName="checked" noStyle>
                <Switch />
              </Form.Item>
              <span>There are recommendation for my account</span>
            </div>
          </Form.Item>

          <Button className="save-button">
            Save
          </Button>
        </Form>
      ),
    },
    {
      key: "3",
      label: "Security",
      children: (
        <Form layout="vertical" onFinish={handleSave}>
          <Form.Item name="twofa" valuePropName="checked">
            <Switch />
          </Form.Item>
          <span style={{ marginLeft: 8 }}>Enable or disable two factor authentication</span>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                label="Current Password"
                name="currentPassword"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu hiện tại" },
                ]}
              >
                <Input.Password size="large" name="re-password" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  { required: true, message: "Vui lòng nhập mật khẩu mới" },
                ]}
              >
                <Input.Password size="large" name="new-password" />
              </Form.Item>
            </Col>
          </Row>

          <Button className="save-button">
            Save
          </Button>
        </Form>
      ),
    },
  ];

  return (
    <div className="settings-page">
      <Tabs defaultActiveKey="1" items={tabItems} />
      <ToastContainer />
    </div>
  );
};

export default SettingsPage;
