import React from 'react';
import axios from 'axios';
import ReactPullToRefresh from 'react-pull-to-refresh';
import News from '../components/News';
import Menu from '../components/Menu';
import { useTheme } from '../hooks/useTheme';
import '../refresh.css';
const Home = () => {
  const [news, setNews] = React.useState([]);
  const [fetching, setFetching] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalCount, setTotalCount] = React.useState(10);
  const { theme } = useTheme();

  // const scrollHandler = (e) => {
  //   // const target = e.target;
  //   // if (
  //   //   target.documentElement.scrollHeight -
  //   //     (target.documentElement.scrollTop + window.innerHeight) <
  //   //     100 &&
  //   //   news.length < totalCount
  //   // ) {
  //   setFetching(true);
  //   // }
  // };

  const fetchNews = async () => {
    await axios
      .get(
        `https://frontappapi.dock7.66bit.ru/api/news/get?page=${currentPage}&count=${totalCount}`,
      )
      .then(({ data }) => {
        setNews([...news, ...data]);
        setCurrentPage((prev) => prev + 1);
        setTotalCount((prev) => prev + 10);
        console.log(data);
      })
      .finally(() => setFetching(false));
  };

  const handleRefresh = () => {
    fetchNews();
    setFetching(true);
  };
  React.useEffect(() => {
    if (fetching) {
      fetchNews();
    }
  }, [fetching, theme]);

  return (
    <>
      <div className="container">
        {/* <h3 className="news__title">Новости недели!</h3> */}
        <ReactPullToRefresh className="genericon genericon-next" onRefresh={handleRefresh}>
          <div className="news">
            {news?.map((obj) => (
              <News key={obj.id} {...obj} />
            ))}
          </div>
        </ReactPullToRefresh>
      </div>
      <Menu />
    </>
  );
};

export default Home;
