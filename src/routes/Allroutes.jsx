import { Routes, Route } from 'react-router-dom';
import React from 'react';
import { HomePage, ProductsList, ProductDetail, Register, Login, Cart ,Order,Dashboard, PageNotFound} from '../pages';
import { ProtectedRoute } from './ProtectedRoute';
export const Allroutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="products" element={<ProductsList />} />
        <Route path="products/:id" element={<ProductDetail />} />
        <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
        <Route path="order" element={<ProtectedRoute><Order /></ProtectedRoute>} />
        <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
