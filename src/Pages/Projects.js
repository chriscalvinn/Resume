import ProjectRow from "../Component/SubComponent/ProjectRow";

const Project = () => {
    const project = (
      <div className="row mx-2">
            <h2>Past Projects</h2>
            <hr></hr>
            <ul className="mx-3">
              <ProjectRow title="System analysis and Improvement for Duta Karsacipta Buana company" subTitle="Analyzing the current system to find room for improvements based on the client's needs and creating a new system based on the old one that satisfies the client's needs"/>
              <ProjectRow title='Student registration website for ITB.' subTitle="Creating an IT system to accommodate student registration in ITB. The system is web based and built using node.js and PostgreSQL database. This project is done as an assignment for web services class during bachelor school"/>
              <ProjectRow title="REST API prototype for an online bookstore" subTitle="Creating a REST API and integrating it with other API's to accomodate an online bookstore. The prototype is built using python and node.js for the back-end, mySQL for the database, and plain html and css for the front-end. This project is done as an assignment for Software Design class during bachelor school"/>
              <ProjectRow title="Deepfake video detection using neural networks" subTitle="Creating and training an AI for deepfake video detections to prevent deepfake fraud. This AI uses convolutional neural network and LSTM network to detect inconsistencies between frames of the video itself. It managed to detect deepfakes with an accuracy of roughly 70%. this project is done as a final project for bachelor's degree."/>
              <ProjectRow title="Front-end Website development" subTitle="Creating a front-end website for a point redemption system for EkaCelluler, a phone retailer company. The website is built using html and bootstrap framework."/>
              <ProjectRow title='Back-end website development' subTitle="Creating a back-end API for a house broker company. the API is built using node.js with express.js framework."/>
              <ProjectRow title='Consultation project for Ena Kasagiyama Chestnut farm' subTitle="Business analysis and consultation project for Ena Kasagiyama chestnut farm which is a chestnut farm in Ena City, Gifu perfecture, Japan. Analysing the current business processes, problems, opportunities, and creating a future action plan for the company in alignment with their goals."/>
              <ProjectRow title="Web resume development" subTitle="Creating a static website for my own resume. The website is created using React.js, a front-end website framework alongside Bootstrap for the styling."/>
            </ul>
            
      </div>
    );
    return project;
  };
  
export default Project;