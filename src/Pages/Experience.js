import ExperienceRow from "../Component/SubComponent/ExperienceRow";

const Experience = () => {
  const exp =(
    <div className="row mx-2">
      <h2>Work Experience</h2>
      <hr></hr>
      {/*DKB*/}
      <div className="row my-3">
          <div className="col d-flex align-items-center">
              <ExperienceRow title='PT. Duta Karsacipta Buana' place='Jakarta, Indonesia' subTitle='Company System Analyst' years='June 2019 - August 2019'/>
          </div>
      </div>

      {/*Larisin*/}
      <div className="row my-3">
          <div className="col d-flex align-items-center">
              <ExperienceRow title='PT. Laris Intisari Nusantara (Larisin)' place='Jakarta, Indonesia' subTitle='Backend Software Developer' years='June 2020 - August 2020'/>
          </div>
      </div>

      {/*Fintax*/}
      <div className="row my-3">
          <div className="col d-flex align-items-center">
              <ExperienceRow title='PT. Fintek Integrasi Digital (Fintax)' place='Jakarta, Indonesia' subTitle='Associate Product Manager' years='August 2021 - July 2022'/>
          </div>
      </div>
    </div>
  );

  return exp;
};
  
  export default Experience;
  