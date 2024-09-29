import React from "react";
import Router from "@/router";

import dayjs from "dayjs";
import zhCN from "antd/locale/zh_CN";
import {
  ConfigProvider,
  DatePicker,
  message,
  Flex,
  Button,
  Segmented,
} from "antd";
import type { FlexProps, SegmentedProps } from "antd";

dayjs.locale("zh-cn");

import { useState } from "react";

const justifyOptions = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
];
const boxStyle: React.CSSProperties = {
  width: "100%",
  height: 120,
  borderRadius: 6,
  border: "1px solid #40a9ff",
};
const alignOptions = ["flex-start", "center", "flex-end"];

function App() {
  const [justify, setJustify] = useState<FlexProps["justify"]>(
    justifyOptions[0]
  );
  const [alignItems, setAlignItems] = useState<FlexProps["align"]>(
    alignOptions[0]
  );

  const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();
  const handleChange = (value) => {
    messageApi.info(
      `您选择的日期是: ${value ? value.format("YYYY年MM月DD日") : "未选择"}`
    );
    setDate(value);
  };

  return (
    <ConfigProvider
      locale={zhCN}
      componentDisabled={true}
      theme={{
        // token
        token: { colorPrimary: "#00b96b" },
      }}
    >
      <div style={{ width: 400, margin: "100px auto" }}>
        <DatePicker onChange={handleChange} />
        <div style={{ marginTop: 16 }}>
          当前日期：{date ? date.format("YYYY年MM月DD日") : "未选择"}
        </div>
      </div>
      {contextHolder}

      <p>Select justify :</p>
      <Segmented
        options={justifyOptions}
        onChange={setJustify as SegmentedProps["onChange"]}
      />
      <p>Select align :</p>
      <Segmented
        options={alignOptions}
        onChange={setAlignItems as SegmentedProps["onChange"]}
      />

      <Flex style={boxStyle} justify={justify} align={alignItems}>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        {/* <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button>
        <Button type="primary">Primary</Button> */}
      </Flex>
      <Demo />
      <Router />
    </ConfigProvider>
  );
}

export default App;

function Demo() {
  console.log("demo");
  console.log(Demo1, "111");
  return (
    <>
      <Demo1 />
    </>
  );
}
function Demo1() {
  console.log("demo1");
  const [count, setCount] = useState(0);
  return (
    <>
      <h1 onClick={() => setCount((v) => v + 1)}>{count}</h1>
      <Demo2 count={count} />
    </>
  );
}
function Demo2(props: any) {
  const { count } = props;
  console.log("demo2");
  return (
    <>
      <Demo33 count={count} />
    </>
  );
}
const Demo33 = React.memo(function Demo3(props: any) {
  const { count } = props;
  console.log("demo3", props);
  return <>--{count}</>;
});
