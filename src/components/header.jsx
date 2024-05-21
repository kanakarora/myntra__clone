
import { FaRegHeart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom";
import { searchActions } from "../store/searchSlice";
const Header = ()=>{
     const dispatch =  useDispatch();
     const bag = useSelector(store=>store.bag)
     const handleSearchCategory = (e)=>{
        dispatch(searchActions.searchCategory(e.target.value))
     }

  
return(
    <header className="navbar  navbar-expand-lg position-sticky top-0 mb-2 " style={{zIndex:"1000"}}>
    <div className="container-fluid   nav-item-container ">
        <div className="header-section-first navbar-dark bg-dark text-info "> 
    <div className="logo_container">
         <Link to="/"><img className="myntra_home" src="./images/myntra_logo.webp" alt="Myntra Home"/></Link>
     </div>
    
     <div className="action_bar">
         <div className="action_container">
             <span className="material-symbols-outlined action_icon">person</span>
             <IoPerson />
         </div>

         <div className="action_container">
             <span className="material-symbols-outlined action_icon">favorite</span>
             <Link to ="/wishlist"> <FaRegHeart /></Link>
         </div>
         

         <Link className="action_container" to="/bag">
         <IoBag />
             <span className="action_name">Bag</span>
             <span className="bag-item-count">{bag.length}</span>
         </Link>
     </div>
     </div>
     {/* dividation of two flex items */}
     <div className="header-section-second">
       
     <div className="search_bar">
        
         <button className="material-symbols-outlined search_icon" >search</button>
         <Link to="/search">
         <input className="search_input w-100" onChange={handleSearchCategory}  placeholder="Search for products, brands and more"/>
         </Link>
     </div>
    
     <div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <nav className="nav_bar navbar-nav">
         <Link to="products/laptops" className="nav-link">Laptops</Link>
         <Link to="products/fragrances" className="nav-link">Fragrances</Link>
         <Link to="products/skincare" className="nav-link">SkinCare</Link>
         <Link to="products/groceries" className="nav-link">Groceries</Link>
         <Link to="/products/home-decoration" className="nav-link">HomeDecoration</Link>
         <Link to="products/smartphones">SmartPhones</Link>
     </nav>
    
         
     </div>
      </div>
      </div>
    </div>
  </header>
)
}
export default Header;
