import Layout from "./components/Layout";
import Card from "./components/Card";
import Dialog from "./components/Dialog";
import { useEffect, useState } from "react";

function App() {
  // 布局左侧菜单项
  const leftList = [
    { title: "图表", icon: "icon-analysis" },
    { title: "出售", icon: "icon-a-aroundprotection" },
    { title: "销量", icon: "icon-audit" },
    { title: "关于", icon: "icon-Availability" },
  ];

  const [cardList, setCardList] = useState([]);
  const [showDialog, setShowDialog] = useState(false);
  const [curTitle, setCurTitle] = useState();

  useEffect(() => {
    // 模拟从服务器获取数据
    // fetch("")
    //   .then((resp) => resp.json())
    //   .then((data) => {
    //     setCardList(data);
    //   });

    setCardList([
      {
        title: "A",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo quia soluta ipsam aut error incidunt vel dicta minima. Ullam quae illum temporibus, ad voluptatibus suscipit nobis dicta deleniti ut?",
      },
      {
        title: "B",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo quia soluta ipsam aut error incidunt vel dicta minima. Ullam quae illum temporibus, ad voluptatibus suscipit nobis dicta deleniti ut?",
      },
      {
        title: "C",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo quia soluta ipsam aut error incidunt vel dicta minima. Ullam quae illum temporibus, ad voluptatibus suscipit nobis dicta deleniti ut?",
      },
      {
        title: "D",
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa illo quia soluta ipsam aut error incidunt vel dicta minima. Ullam quae illum temporibus, ad voluptatibus suscipit nobis dicta deleniti ut?",
      },
    ]);
  }, []);

  const clickHandler = (title) => {
    // console.log(title);
    setShowDialog(true);
    setCurTitle(title);
  };

  const dialogClickHandler = (show, isYes) => {
    setShowDialog(show);
    if (isYes) window.open(""); // 模拟链接打开
  };

  return (
    <div className="App">
      <Layout leftList={leftList}>
        {cardList.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              content={item.content}
              clickHandler={clickHandler}
            />
          );
        })}
      </Layout>
      {showDialog ? (
        <Dialog changeDiaglogShow={dialogClickHandler} title={curTitle} />
      ) : null}
    </div>
  );
}

export default App;
