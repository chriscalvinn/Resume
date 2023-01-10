import OrgRow from "../Component/SubComponent/OrgRow";

const Organizations = () => {
    const org = (
        <div className="row mx-2">
            <h2>Organizational Experiences</h2>
            <hr></hr>
            <ul>
              <OrgRow title="Student's Film Club ITB (LFM ITB)" subTitle='January 2018 - October 2021'/>
              <OrgRow title='Taekwondo ITB' subTitle='December 2017 - October 2021'/>
              <OrgRow title="Catholic Student's Club ITB (KMK ITB)" subTitle='August 2017 - October 2021'/>
              <OrgRow title="Informatics Student's Club ITB (HMIF ITB)" subTitle='December 2018 - October 2021'/>
              <OrgRow title='Head of the photograph division, ITB Graduation Ceremony ITB April 2019'/>
              <OrgRow title='Head of documentation, SKB KMK 2018'/>
              <OrgRow title='Head of Field Division, Unit Regeneration Taekwondo ITB 2018'/>
              <OrgRow title='Staff of fundraising LFM ITB 2018-2019' />
              <OrgRow title='Staff of unit regeneration LFM ITB 2019-2020'/>
            </ul>
            
        </div>
            
    );

    return org;
  };
  
  export default Organizations;
  