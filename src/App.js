import Layout from "./components/Layout";
import Card from "./components/Card";
import Dialog from "./components/Dialog";
import { useEffect, useState } from "react";
import Mock from "mockjs";

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
  const [curArticle, setCurArticle] = useState({});

  useEffect(() => {
    // 模拟从服务器获取数据
    // fetch("/api/article")
    //   .then((resp) => {
    //     console.log(resp);
    //     resp.json();
    //   })
    //   .then((data) => {
    //     // setCardList(data);
    //     console.log(data);
    //   });

    const mockData = Mock.mock({
      "article|10-20": [
        {
          id: "@uuid",
          title: "@ctitle(5, 10)",
          content: "@cparagraph",
          url: "@url",
        },
      ],
    });
    setCardList(mockData.article);
  }, []);

  const clickHandler = (article) => {
    // console.log(title);
    setShowDialog(true);
    setCurArticle(article);
  };

  const dialogClickHandler = (show, isYes) => {
    setShowDialog(show);
    if (isYes) window.open(curArticle.url); // 模拟链接打开
  };

  return (
    <div className="App">
      <Layout leftList={leftList}>
        {cardList.map((item, index) => {
          return (
            <Card key={index} article={item} clickHandler={clickHandler} />
          );
        })}
      </Layout>
      {showDialog ? (
        <Dialog changeDiaglogShow={dialogClickHandler} article={curArticle} />
      ) : null}
    </div>
  );
}

export default App;
