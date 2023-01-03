import React from 'react';
import axios from 'axios';
import { useTheme } from '../hooks/useTheme';
import Buttons from '../components/Buttons';
import Menu from '../components/Menu';

const ThemesPage = () => {
  const { theme, setTheme } = useTheme();
  const [data, setData] = React.useState([]);

  const fetchThemes = async (theme) => {
    await axios
      .get(`https://frontappapi.dock7.66bit.ru/api/theme/get?name=${theme}&name=light`)
      .then(({ data }) => {
        setData(data);
        // console.log(data);
      });
  };

  React.useEffect(() => {
    fetchThemes(theme);
  }, [theme]);

  return (
    <div>
      <div>
        <h1>Темы</h1>
        <Buttons theme={theme} data={data} setTheme={setTheme} />
      </div>
      <Menu />
    </div>
  );
};

export default ThemesPage;
