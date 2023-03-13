import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs/AboutUs";
import AddBlog from "./components/AddBlog/AddBlog";
import Category from "./components/Category/Category";
import Contacts from "./components/Contacts/Contacts";
import Favorites from "./components/Favorites/Favorites";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Category />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
