import React from "react";
import SemesterBox from "./components/SemestersBox/SemesterBox.tsx";
import GeneralAveragesBox from "./components/GeneralAveragesBox/GeneralAveragesBox.tsx";
import { HeaderComponent } from "./components/navbar/HeaderComponent.tsx";

function App() {
  return (
    <>
      <HeaderComponent />
      <main className="-mt-24 pb-8">
        <div className="container mx-auto sm:px-6 lg:px-8">
          <h1 className="sr-only">Averages</h1>
          <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 className="sr-only" id="section-1-title">
                  Grades
                </h2>
                <SemesterBox />
              </section>
            </div>
            <GeneralAveragesBox />
          </div>
        </div>
      </main>
    </>
  );
}
export default App;
