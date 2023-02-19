/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { PurchasePage } from './pages/Purchase/Loadable';
import { ProductPage } from './pages/Product/Loadable';
import AddProduct from './pages/Product/Features/AddProduct';
import ViewProduct from './pages/Product/Features/ViewProduct';
import { SalesPage } from './pages/SalesPage/Loadable';
import { useTranslation } from 'react-i18next';
import Layout from 'app/components/Layout';

export function App() {
  const { i18n } = useTranslation();
  return (
    <BrowserRouter>
    <Layout>
      <Helmet
        titleTemplate="%s - ArtMyLens"
        defaultTitle="artMyLens"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="Art my lens Inventory" />
      </Helmet>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} >
          <Route path=""  element={<ViewProduct />} />
          <Route path="add" element={<AddProduct />}/>
          <Route path="view" element={<ViewProduct />} />
          </Route>
        <Route path="/purchase" element={<PurchasePage />} />
        <Route path="/sale" element={<SalesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <GlobalStyle />
      </Layout>
    </BrowserRouter>
  );
}
