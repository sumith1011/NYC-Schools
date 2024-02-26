import { useEffect, useState } from "react";
import axios from "axios";
import SchoolDetails from "./SchoolDetails";

interface School {
  dbn: string;
  overview_paragraph: string;
  school_name: string;
  neighbourhood: string;
  location: string;
}
const SchoolList: React.FC = () => {
  const [schools, setSchools] = useState<School[]>([]);
  const [selectedSchool, setSelectedSchool] = useState<School | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://data.cityofnewyork.us/resource/s3k6-pzi2.json"
      );
      setSchools(response.data);
    };
    fetchData();
  }, []);

  const handleSchoolClick = (school: School) => {
    setSelectedSchool(school);
  };

  return (
    <div>
      <h2>NYC High Schools</h2>
      <b>{selectedSchool && <SchoolDetails school={selectedSchool} />}</b>
      <ul>
        {schools.map((school: School) => (
          <li key={school?.dbn}>
            <button onClick={() => handleSchoolClick(school)}>
              {school?.school_name}
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default SchoolList;
