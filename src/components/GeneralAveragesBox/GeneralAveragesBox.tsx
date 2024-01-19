import React from "react";
import AverageSmallBox from "./AverageSmallBox.tsx";



export function GeneralAveragesBox() {

  return (
    <div className="grid grid-cols-1 gap-4">
      <section aria-labelledby="section-2-title">
        <h2 className="sr-only" id="section-2-title">
          Averages
        </h2>
        <div className="overflow-hidden rounded-lg bg-white shadow">
          <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-2">
            <AverageSmallBox name="Moyenne générale" averageGrade={4.5} percentage="-11%" big={true}/>
            <AverageSmallBox name="Maths" averageGrade={5} percentage="-11%"/>
            <AverageSmallBox name="Société" averageGrade={5} percentage="-11%"/>
            <AverageSmallBox name="Anglais" averageGrade={5} percentage="-11%"/>
            <AverageSmallBox name="Informatique" averageGrade={5} percentage="-11%"/>
            <AverageSmallBox name="Modules" averageGrade={5} percentage="-11.5%"/>
            <AverageSmallBox name="CIE" averageGrade={5} percentage="-11%"/>
          </dl>
        </div>
      </section>
    </div>
  );
}

export default GeneralAveragesBox;