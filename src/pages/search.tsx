import "../style/global.scss";
import "../style/search.scss";
import "../style/cart.scss";
import "../style/popUp.scss";
import SearchBar from "../components/searchbar";
import FiltersCollapse from "../components/filterCollapse";
//import RecipeSection from "../components/cartSectionChoose";
import ScrollCarts from "../components/scrollCarts";



function Search() {
  //function to send clicked to first button send

  return (
    <>
      <div style={{ marginTop: "100px", marginBottom: "50px " }}>
        <h1>Are you ready to cook?</h1>
      </div>
      <div id="green_background">
        <SearchBar />
        <FiltersCollapse />
        <ScrollCarts />
      </div>
    </>
  );
}





export default Search;
