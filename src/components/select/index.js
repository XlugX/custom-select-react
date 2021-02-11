import { useMemo, useContext, useState } from "react";
import { select } from "./utils";
import s from "./select.module.css";

const Option = ({ children, value }) => {
  const { onChange } = useContext(select);

  return (
    <div className={s.option} onClick={() => onChange(value)}>
      {children}
    </div>
  );
};
const Content = ({ children }) => {
  const { show } = useContext(select);

  return <>{show && children}</>;
};
const Button = ({ children }) => {
  const { setShow, show } = useContext(select);

  return (
    <button className={s.btn} onClick={() => setShow(!show)}>
      {children}
    </button>
  );
};

const Select = ({ onChange, children }) => {
  const [show, setShow] = useState(false);
  const value = useMemo(
    () => ({
      name: "select-1",
      onChange: (value) => {
        onChange(value);
        setShow();
      },
      setShow,
      show,
    }),
    [onChange, setShow, show]
  );

  return (
    <select.Provider value={value}>
      <div className={s.select}>{children}</div>
    </select.Provider>
  );
};

Select.defaultProps = {
  onChange: () => {},
};

Select.Option = Option;
Select.Content = Content;
Select.Button = Button;
export default Select;
