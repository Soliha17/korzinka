import React, { useState } from "react";

import { Button, Col, DatePicker, Form, Input, Radio, Row, Select } from "antd";
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons";

import "./ResumeContent.css";

import LabeledInput from "../../molecules/labeled-input/LabeledInput";

import HhLogo from "../../assets/images/hh-logo.png";
import SmartLogo from "../../assets/images/smartjob-submit-logo.png";
import { useTranslation } from "react-i18next";

const ResumeContent = () => {
  const [form] = Form.useForm();

  const [language, setLanguage] = useState("");

  const [level, setLevel] = useState("");

  const [value, setValue] = useState("");

  const onChangeLanguage = (date, dateString) => {
    console.log(date, dateString);
    console.log(date);
    setLanguage(date);
  };

  const onChangeLevel = (date, dateString) => {
    console.log(date, dateString);
    console.log(date);
    setLevel(date);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    const digitsOnly = inputValue.replace(/\D/g, ""); // Remove non-digit characters

    if (digitsOnly.length <= 9) {
      setValue(digitsOnly);
    } else {
      setValue(0);
    }
  };

  // const next = props.next;
  // console.log(next);

  const onFinish = (values) => {
    console.log("Success:", values);
    // next(1);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  const { Option } = Select;

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 100 }} defaultValue={"998"}>
        <Option value="998">+998</Option>
        <Option value="1">+1</Option>
      </Select>
    </Form.Item>
  );

  const { t } = useTranslation();

  const validateMessages = {
    required: `${t("errorInput")}`,
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${0} and ${10}",
    },
  };

  return (
    <div className="resume-content container">
      <div className="header__resume">
        <h3>Mahsulot menejeri</h3>
      </div>
      <div className="content__resume">
        <Row gutter={[24, 23]} className="submit-group">
          <Col xs={24} sm={12}>
            <span className="submit-btn">
              <img src={HhLogo} alt="HhLogo" />
              <p>{t("submitFromHh")}</p>
            </span>
          </Col>
          <Col xs={24} sm={12}>
            <span className="submit-btn">
              <img src={SmartLogo} alt="HhLogo" />
              <p>{t("submitFromSmartjob")}</p>
            </span>
          </Col>
        </Row>
        <Form
          form={form}
          layout="vertical"
          validateMessages={validateMessages}
          name="basic"
          initialValues={
            {
              // require: true,
              // requiredMark: true,
              // requiredMarkValue: requiredMark,
            }
          }
          onFinish={onFinish}
          // onValuesChange={onRequiredTypeChange}
          // requiredMark={requiredMark}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={[24, 8]}>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("nameLabel")}
                labelFor="name"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("surnameLabel")}
                labelFor="surname"
                req={true}
                input={<Input size="large" />}
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("birthdayLabel")}
                labelFor="birthday"
                req={true}
                input={
                  <DatePicker onChange={onChange} size="large" picker="date" />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("genderLabel")}
                labelFor="gender"
                req={true}
                input={
                  <Radio.Group
                    onChange={onChange}
                    // defaultValue="male"
                    size="large"
                  >
                    <Radio.Button value="male">Erkak</Radio.Button>
                    <Radio.Button value="female">Ayol</Radio.Button>
                  </Radio.Group>
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("countryLabel")}
                labelFor="country"
                req={true}
                input={
                  <Select
                    // defaultValue="uzbekistan"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "uzbekistan",
                        label: "O'zbekiston",
                      },
                      {
                        value: "turkey",
                        label: "Turkiya",
                      },
                      {
                        value: "usa",
                        label: "AQSH",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("cityLabel")}
                labelFor="city"
                req={true}
                input={
                  <Select
                    // defaultValue="buxoro"
                    placeholder="Tanlang"
                    size="large"
                    onChange={onChange}
                    options={[
                      {
                        value: "buxoro",
                        label: "Buxoro",
                      },
                      {
                        value: "toshkent",
                        label: "Toshkent",
                      },
                      {
                        value: "istanbul",
                        label: "Istanbul",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                className={"phone-input"}
                labelName={t("phoneLabel")}
                labelFor="number"
                req={true}
                input={
                  <Input
                    addonBefore={prefixSelector}
                    size="large"
                    type="number"
                    value={value}
                    onChange={(e) => {
                      e.target.value.length <= 10 && setValue(e.target.value);
                    }}
                    // maxLength={9} // Set the maximum length of the input value
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("emailLabel")}
                labelFor="email"
                req={true}
                input={<Input size="large" type="email" />}
              />
            </Col>{" "}
            <Col xs={24}>
              <p className="language-label">{t("languageLabel")}</p>
              <Form.List name="users">
                {(fields, { add, remove }) => (
                  <>
                    {fields.map(({ key, name, ...restField }) => (
                      <Row gutter={[15, 12]}>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...restField}
                            name={[name, "first"]}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Missing first name",
                            //   },
                            // ]}
                          >
                            <Select
                              defaultValue={language}
                              // value={language}
                              // onChange={()=>setLanguage(language)}
                              // placeholder="adsnk"
                              size="large"
                              options={[
                                {
                                  value: "uzb",
                                  label: "O'zbek tili",
                                },
                                {
                                  value: "russian",
                                  label: "Rus tili",
                                },
                                {
                                  value: "english",
                                  label: "Ingliz tili",
                                },
                              ]}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={11}>
                          <Form.Item
                            {...restField}
                            name={[name, "last"]}
                            // rules={[
                            //   {
                            //     required: true,
                            //     message: "Missing last name",
                            //   },
                            // ]}
                          >
                            <Select
                              defaultValue={level}
                              // placeholder="Daraja tanlang"
                              // value={level}
                              size="large"
                              options={[
                                {
                                  value: "b1",
                                  label: "B1",
                                },
                                {
                                  value: "a2",
                                  label: "A2",
                                },
                              ]}
                            />
                          </Form.Item>
                        </Col>
                        <Col xs={24} sm={2}>
                          <Button
                            type="dashed"
                            size="large"
                            className="action-btn__lan-resume"
                            onClick={() => remove(name)}
                            block
                          >
                            <span className="hidden-text__lan-resume">
                              O'chirish
                            </span>
                            <DeleteOutlined />
                          </Button>
                        </Col>
                      </Row>
                    ))}
                    <Row gutter={[15, 12]} className="main-lan-row__resume">
                      <Col xs={24} sm={11}>
                        <Form.Item>
                          <Select
                            // defaultValue={"uzb"}
                            placeholder="Til tanlang"
                            size="large"
                            onChange={onChangeLanguage}
                            options={[
                              {
                                value: "uzb",
                                label: "O'zbek tili",
                              },
                              {
                                value: "russian",
                                label: "Rus tili",
                              },
                              {
                                value: "english",
                                label: "Ingliz tili",
                              },
                            ]}
                          />
                        </Form.Item>
                      </Col>
                      <Col sm={11} xs={24}>
                        <Form.Item>
                          <Select
                            // defaultValue={"b1"}
                            placeholder="Daraja tanlang"
                            size="large"
                            onChange={onChangeLevel}
                            options={[
                              {
                                value: "b1",
                                label: "B1",
                              },
                              {
                                value: "a2",
                                label: "A2",
                              },
                            ]}
                          />
                        </Form.Item>
                      </Col>
                      <Col xs={24} sm={2}>
                        <Form.Item>
                          <Button
                            className="action-btn__lan-resume"
                            size="large"
                            type="dashed"
                            onClick={() => add()}
                            block
                          >
                            <span className="hidden-text__lan-resume">
                              Qo'shish
                            </span>
                            <PlusOutlined />
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </>
                )}
              </Form.List>
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("studyLevelLabel")}
                labelFor="studyLevel"
                req={true}
                input={
                  <Select
                    // defaultValue="full"
                    placeholder="Tanlang"
                    size="large"
                    // onChange={onChange}
                    options={[
                      {
                        value: "bakalavr",
                        label: "Bakalavr",
                      },
                      {
                        value: "magistr",
                        label: "Magistr",
                      },
                    ]}
                  />
                }
              />
            </Col>
            <Col xs={24} sm={12}>
              <LabeledInput
                labelName={t("experienceOfJobLabel")}
                labelFor="experienceOfJob"
                req={true}
                input={
                  <Select
                    // defaultValue="full"
                    placeholder="Tanlang"
                    size="large"
                    // onChange={onChange}
                    options={[
                      {
                        value: "junior",
                        label: "Junior",
                      },
                      {
                        value: "middle",
                        label: "Middle",
                      },
                    ]}
                  />
                }
              />
            </Col>
          </Row>
          <div className="footer__resume">
            <button size="large" className="primary-btn" type="submit">
              {t("submitBtnFooterResume")}
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ResumeContent;
