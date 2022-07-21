import "./NearEndList.css";
import "./NearEndListResponsive.css";

function NearEndList() {
  return (
    <div className="NEL">
      <div className="NEL-UlContainer">
        <ul className="NEL-Ul">
          <p className="NEL-UlHeader">Icons</p>
          <li>Air Force 1</li>
          <li>Hurache</li>
          <li>Air Max 90</li>
          <li>Air Max 95</li>
        </ul>
        <ul className="NEL-Ul">
          <p className="NEL-UlHeader">Shoes</p>
          <li>All Shoes</li>
          <li>Custom Shoes</li>
          <li>Jordan Shoes</li>
          <li>Running Shoes</li>
        </ul>{" "}
        <ul className="NEL-Ul">
          <p className="NEL-UlHeader">Clothing</p>
          <li>All Clothing</li>
          <li>Modest Wear</li>
          <li>Hoodies & Pullovers</li>
          <li>Tops & T-Shirts</li>
        </ul>{" "}
        <ul className="NEL-Ul">
          <p className="NEL-UlHeader">Kids'</p>
          <li>Toddler Shoes</li>
          <li>Kid's Shoes</li>
          <li>Kid's Shirts</li>
          <li>Kid's Shorts</li>
        </ul>
      </div>
    </div>
  );
}

export default NearEndList;
