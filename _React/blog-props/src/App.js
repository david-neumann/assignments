import React from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='container'>
      <Header />
      <BlogList />
      <Footer />
    </div>
  )
}
