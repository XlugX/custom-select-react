import Select from "./components/select";
import { useState } from "react";
import s from './app.module.css'

const App = () => {
  const [value, setValue] = useState(null);

  return (
    <div className={s.app}>
      <Select onChange={setValue}>
        <Select.Button>{value || 'выбрать'}</Select.Button>
        <Select.Content>
          <Select.Option value={'первый'}>первый</Select.Option>
          <Select.Option value={'второй'}>второй</Select.Option>
          <Select.Option value={'третий'}>третий</Select.Option>
        </Select.Content>
      </Select>
    </div>
  );
};

export default App;
