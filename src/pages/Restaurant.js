import React, { useState, useEffect} from 'react';
import { Link , useHistory, Route, useRouteMatch, Switch} from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import { Toast } from '../utilities/Toast'
import { Cart } from '../components/Cart'

import behrouz from '../assets/behrouz.png';
import bhunaMurgh from '../assets/bhuna-murgh.png';

import arrow from '../assets/icons/arrow.svg';

export const Restaurant = () => {
    
    const history = useHistory();
    let { path, url } = useRouteMatch();


    const [cart, setCart] = useState();
    const [order, setOrder] = useState();
    const [swipeDirection, setSwipeDirection] = useState('')
    const [styles, setStyle] = useState({
        image : {
            filter: 'blur(0)'
        },
        content: {
            transform: 'translateY(-72px)',
            filter: 'blur(0)'
        },
        slider: {
            transform: 'translateY(-10px)'
          },
    });
    
    const handlers = useSwipeable({
        onSwiped: (event) => setSwipeDirection(event.dir)
    });

    useEffect(()=>{
        if(swipeDirection === 'Up' && styles.slider.transform === 'translateY(-10px)') {
            setStyle(prev => {
                return {
                    ...prev,
                    image : {
                        filter: 'blur(4px)'
                    },
                    content: {
                        transform: 'translateY(0)',
                    },
                    slider: {
                        transform: 'translateY(-120px)'
                    },
                }
            })
        }else if(swipeDirection === 'Down' && styles.slider.transform === 'translateY(-120px)') {
            setStyle(prev => {
                return {
                    ...prev,
                    image : {
                        filter: 'blur(0)'
                    },
                    content: {
                        transform: 'translateY(-72px)',
                    },
                    slider: {
                        transform: 'translateY(-10px)'
                    },
                }
            })
        }
    }, [swipeDirection])

    const addToCart = () => {
        if(cart) {
            setCart(null);
        }else{
            setCart(prev => {
                return {
                    ...prev,
                    total: 1,
                    restaurant: 'behrouz',
                    item: 'Lazeez Bhuna Murgh',
                    price: 440,
                }
            });
        }
    }

    const removeFromCart = () => {
        if(cart.total === 1) {
            setCart(null);
        }else{
            setCart(prev => {
                return {
                    ...prev,
                    total: prev.total - 1,
                    price: prev.price - 440,
                }
            });
        }
    }
    const addMore = () => {
        setCart(prev => {
            return {
                ...prev,
                total: prev.total + 1,
                price: prev.price + 440,
            }
        });
    }

    const orderNow =() => {
        setOrder(prev => {
            return cart;
        })
        setCart(null);
        history.push(`/restaurant/order`)
    }

    return (
        <main className="app app-restaurant d-flex jc-center ai-center">
            <div className="container">
                <header className="app-restaurant-header">
                    <Link to="/">
                        <button className="app-back-btn d-flex ai-center jc-center">
                            <img src={arrow} alt="" />
                        </button>
                    </Link>
                    <div style={styles.content} className="app-restaurant-header-content">
                        <h3 className="text-white">Behrouz Biryani</h3>
                        <h5 className="text-white">Biryani Kebab, Mughlai</h5>
                    </div>
                    <div className="app-restaurant-header-image">
                        <img style={styles.image} src={behrouz} alt="" />
                    </div>
                </header>
                <div {...handlers} style={styles.slider} className="app-content">
                    <div className={`card app-restaurant-details ${swipeDirection === 'Up' ? 'swiped': null}`}>
                        <div className="card-content d-flex jc-space-between">
                            <div className="d-flex fd-column jc-center">
                                <h2 className="title">Behrouz Biryani</h2>
                                <h4 className="title-xs">Biryani Kebab, Mughlai</h4>
                            </div>
                            <div className="d-flex fd-column ai-flex-end">
                                <div className="rating d-flex ai-center jc-center my-1">
                                    <span>4.2 ★</span>
                                </div>
                                <p className="card-desc">₹600 for two </p>
                            </div>
                        </div>
                    </div>
                    <div className={`app-restaurant-menu ${swipeDirection === 'Up' ? 'swiped': null}`}>
                        <div className="app-tab">
                            <ul className="app-tab-nav d-flex mb-1">
                                <li className="active"><button className="btn">Bestsellers</button></li>
                                <li><button className="btn">Recommended</button></li>
                            </ul>
                            <div className="app-tab-content">
                                <div className="app-tab-item py-4">
                                    <h3 className="title mb-2">Bestsellers</h3>
                                    <div className="card d-flex jc-space-between py-4">
                                        <div className="card-content mr-4">
                                            <h5 className="card-title fw-500">Lazeez Bhuna Murgh</h5>
                                            <h6 className="text-light-small">Chicken Biryani Boneless - Serves 4-5</h6>
                                            <p className="title-sm my-1">₹440</p>
                                            <p className="text-light-small">In this most enigmatic & treasured recipe of Behrouz.. Read More</p>
                                        </div>
                                        <div className="add-to-cart">
                                            <div className="cart-img"><img src={bhunaMurgh} alt="bhuna Murgh" /></div>
                                            <button onClick={!cart? addToCart: null} className="btn btn--primary btn--cart d-flex jc-center jc-space-around">
                                                {cart ? <span onClick={removeFromCart} className="">-</span> : <span>+</span>}
                                                {cart ? <span>{cart.total}</span> : <span>Add</span>}
                                                {cart ? <span onClick={addMore}>+</span> : null}
                                            </button>
                                        </div>
                                    </div>

                                    <div className="card d-flex jc-space-between py-4">
                                        <div className="card-content mr-4">
                                            <h5 className="card-title fw-500">Dum Gosht</h5>
                                            <h6 className="text-light-small">Mutton Biryani, Boneless - Serves 4-5</h6>
                                            <p className="title-sm my-1">₹1033</p>
                                            <p className="text-light-small">In this most enigmatic & treasured recipe of Behrouz.. Read More</p>
                                        </div>
                                        <div className="add-to-cart">
                                            <div className="cart-img"><img src={bhunaMurgh} alt="bhuna Murgh" /></div>
                                            <button className="btn btn--primary btn--cart d-flex jc-center"><span>+</span><span>Add</span></button>
                                        </div>
                                    </div>

                                    <div className="card d-flex jc-space-between py-4">
                                        <div className="card-content mr-4">
                                            <h5 className="card-title fw-500">Dum Gosht</h5>
                                            <h6 className="text-light-small">Mutton Biryani, Boneless - Serves 4-5</h6>
                                            <p className="title-sm my-1">₹1033</p>
                                            <p className="text-light-small">In this most enigmatic & treasured recipe of Behrouz.. Read More</p>
                                        </div>
                                        <div className="add-to-cart">
                                            <div className="cart-img"><img src={bhunaMurgh} alt="bhuna Murgh" /></div>
                                            <button className="btn btn--primary btn--cart d-flex jc-center"><span>+</span><span>Add</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Toast onClick={orderNow} cart={cart}/>
                <Switch>
                    <Route exact path={`${path}/order`}>
                        <div className="app-overlay"></div>
                        <Cart/>
                    </Route>
                </Switch>
            </div>            
    </main>
    )
}
