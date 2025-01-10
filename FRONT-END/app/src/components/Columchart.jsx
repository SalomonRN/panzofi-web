import { Column } from "@ant-design/plots";

const Columchart = (users) => {
  let data = [];
  users.users.forEach((element) => {
    if (element.n_btn2 > 0) data.push({ name: element.name, btn_2: element.n_btn2 });
  });
  const config = {
    data: data,
    xField: "name",
    yField: "btn_2",
    annotations: [
      {
        type: "shape",
        xField: "name",
        yField: "btn_2",

      },
    ],
  };
  return <Column {...config} />;
};

export default Columchart;
