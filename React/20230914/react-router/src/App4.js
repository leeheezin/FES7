import React from 'react'
import { BrowserRouter, Link, Outlet, Route, Routes, useLocation, useNavigate, useParams } from 'react-router-dom'

export default function App4() {
    return (
        <BrowserRouter>
            <Link to="/">home</Link>
            <Link to="/cart">cart</Link>
            <Link to="/users">users</Link>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                {/* Outlet 자식컴포넌트 꺼내서 보여줌 */}
                <Route path="/users/*" element={<User/>}>
                    <Route path="" element={<User/>}/>
                    <Route path="coupon/" element={<Coupon/>}/>
                    <Route path="question/" element={<Question/>}/>
                    <Route path="notice/" element={<Notice/>}/>
                </Route>
                <Route path="/product/:id" element={<ProductDetail/>}/>
                <Route path="/product/:id/notice" element={<ProductDetailNotice/>}/>
            </Routes>
            <Button/>
        </BrowserRouter>
    )
    function Button() {
        const navigate = useNavigate()
        return <button onClick={()=>navigate('/users')}>유저보기</button>
    }
    function Home() {
        return <h1>Home</h1>
    }
    function Product() {
        return <h1>Product</h1>
    }
    function Notice() {
        return <h1>Notice</h1>
    }
    function Cart() {
        return <h1>Cart</h1>
    }
    function User() {
        return (<div><h1>User</h1><Outlet/></div>)
    }
    function Coupon() {
        return <h1>Coupon</h1>
    }
    function Question() {
        return <h1>Question</h1>
    }
    function Notice() {
        return <h1>Notice</h1>
    }
    function ProductDetail() {
        const {id} = useParams()
        return <h2>{id}ProductDetail</h2>
    }
    function ProductDetailNotice() {
        const {id} = useParams()
        return <h2>{id}ProductDetailNotice</h2>
    }
}
