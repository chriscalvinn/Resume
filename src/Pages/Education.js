import EducationRow from "../Component/SubComponent/EducationRow";

const Education = () => {
    const education = (
        <div className="row mx-2">
            <h2>Educations</h2>
            <hr></hr>
            {/*ITB*/}
            <div className="row my-4">
                <div className="col-md-2">
                    <img src={process.env.PUBLIC_URL+"/logoITB.png"} alt="" className='mx-auto d-block img-fluid rounded'></img>
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <EducationRow eduTitle='Bandung Institute of Technology (ITB)' eduSubTitle='Information System and Technology' degree='Bachelor of Science in Information System and Technology' gpa='3.45' years='2017-2021'/>
                </div>
            </div>

            {/*NUCB*/}
            <div className="row my-4">
                <div className="col-md-2">
                    <img src={process.env.PUBLIC_URL+"/logoNUCB.jpg"} alt="" className='mx-auto d-block img-fluid rounded'></img>
                </div>
                <div className="col-md-10 d-flex align-items-center">
                    <EducationRow eduTitle='Nagoya University of Commerce and Business (NUCB Business School)' eduSubTitle='M.Sc in Management' degree='Master of Science in Management' gpa='--' years='2022-present'/>
                </div>
            </div>
            
        </div>
            
    );

    return education;
  };
  
export default Education;
  