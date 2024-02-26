

const SchoolDetails: React.FC<{ school: any }> = ({ school }) => {
  return <div>
    <h2>{school?.school_name}</h2>
    <p>{school?.overview_paragraph}</p>
    <p>{school?.neighbourhood}</p>
    <p>{school?.location}</p>
  </div>;
};

export default SchoolDetails;
