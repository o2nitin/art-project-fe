import React,{ useEffect } from 'react';
import {Outlet} from 'react-router-dom';
import {useDispatch } from 'react-redux';
import { useProductPageSlice } from 'app/pages/Product/slice';
import SideBar from './sidebar'
import BaseLayout from 'app/components/BaseLayout';

export function ProductPage() {
const { actions } = useProductPageSlice()
    const dispatch = useDispatch();
    useEffect(()=>{
        console.log("dispatch")
        dispatch(actions.loadProducts());
    },[])
  return (
   <>
   <BaseLayout sidebar={<SideBar />} content={<Outlet />} />
   </>
  )
}
