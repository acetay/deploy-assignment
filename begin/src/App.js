import { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { dummyData } from "./data";
import { v4 as uuid } from "uuid";

import Header from "./routes/Header";
import View from "./routes/View";
import Add from "./routes/Add";
import ItemDefault from "./routes/ItemDefault";
import Item from "./routes/Item";

import "./App.css";

const DefaultPage = () => <p>You have reach the end of the internet </p>;

function App() {
  const [list, setList] = useState(dummyData);

  const handlerDeleteProduct = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  };

  const handlerAddProduct = (newItem) => {
    newItem.id = uuid();
    setList((prevState) => {
      return [...prevState, newItem];
    });
  };

  return (
    <HashRouter>
      <Routes>
        {/* undefined route*/}
        <Route path="*" element={<DefaultPage />} />

        {/* defined routes */}
        <Route path="/" element={<Header />}>
          <Route path="view" element={<View list={list} />}>
            {/* this is our index route - it loads when no option selceted yet */}
            <Route index element={<ItemDefault />} />
            {/* /view/123 */}
            <Route
              path=":id"
              element={
                <Item list={list} handlerDelete={handlerDeleteProduct} />
              }
            />
          </Route>

          <Route
            path="add"
            element={<Add handlerAddProduct={handlerAddProduct} />}
          />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
