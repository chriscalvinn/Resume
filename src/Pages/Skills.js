import SkillsRow from "../Component/SubComponent/Skills";

const Skills = () => {
    const skill = (
      <div className="row mx-2">
            <h2>Relevant Skills and qualifications</h2>
            <hr></hr>
            <ul className="mx-3">
              <SkillsRow title="Proficient and experienced in programming" subTitle={[
                "Able to code in Java, Python, C, C++, Pascal, SQL, Javascript, html, css, and etc.", 
                "Able to utilize Backend programming frameworks such as Node.js, Next.js, Nest.js, express.js.",
                "Able to utilize frontend programming frameworks such as Bootstrap, React.js, Jquery, Vue.js.",
                "Experienced in database management using different types of DBMS such as hierarchical, relational, object oriented, etc.",
                "Experienced in machine learning programming using tensorflow and python",
              ]}/>
              <SkillsRow title='Knowledgeable in Information Systems and project management' subTitle='Experienced in using TOGAF ADM frameworks, SoaML, PMBOK, etc.'/>
              <SkillsRow title='Good english language skiils' subTitle='Able to get TOEFL ITP score of 603 in 2017, IELTS Band Score of 8.0 in 2021.'/>
              <SkillsRow title='Good problem solving skills' subTitle='Able to get 640 on GMAT Score in April 2022.'/>
              <SkillsRow title='Experienced in numerous projects'/>
              <SkillsRow title='Good communication skills'/>
            </ul>
      </div>
    );
    return skill;
  };
  
export default Skills;