import { Pie } from "@ant-design/plots";

const DemoChangeData = (users) => {
  let data = [];
  users.users.forEach((element) => {
    if (element.n_btn1 > 0) data.push({ type: element.name, value: element.n_btn1 });
  });
  console.log(data);
  const config = {
    data,
    angleField: "value",
    colorField: "type",
    label: {
      text: "value",
      style: {
        fontWeight: "bold",
      },
    },
    legend: {
      color: {
        title: false,
        position: "right",
        rowPadding: 5,
      },
    },
  };
  return <Pie {...config} />;
};

export default DemoChangeData;
