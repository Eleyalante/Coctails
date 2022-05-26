import React from "react";
import "./MyCocktailsPage.scss";
import ScnHeader from "../../common/ScnHeader/Header";

function MyCocktailsPage() {
  return (
    <>
      <ScnHeader />
      <section className='home-cocktail'>
        <div className='title'>
          <h3>My cocktail</h3>
          <a href='/mycocktails/trash'>Trash bin</a>
        </div>
        <div className='table'>
          <table class='table-box'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>CreateAT</th>
              </tr>
            </thead>
          </table>
        </div>
      </section>
    </>
  );
}

export default MyCocktailsPage;
