import { useEffect } from "react";
import BudgetTab from "../../components/DP/BudgetTab";
import DesignContent from "../../components/DP/DesignContent";
import NavBar from "../../components/UI/NavBar/NavBar";
import NavBarRes from "../../components/UI/NavBarRes/NavBarRes";
function DesignPage() {
  
  return (
    <>
      <NavBar />
      <NavBarRes />
      <DesignContent />
      <BudgetTab />
    </>
  );
}

export default DesignPage;
