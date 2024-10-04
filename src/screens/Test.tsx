import { useEffect, useState } from "react";

const Test = () => {
  const [heading, setHeading] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [term, setTerm] = useState("");
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((data) => setHeading(data));
  }, []);
  const handleSearch = (e: any) => {
    setTerm(e.target.value);
    let data = heading?.filter((data: any) =>
      data?.name.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredData(data);
  };
  return (
    <div>
      {/* <h1>{heading}</h1> */}
      <input type="text" onChange={(e) => handleSearch(e)} />
      <div>
        {filteredData && filteredData?.length > 0 ? (
          <>
            {filteredData?.map((data: any, index: number) => (
              <ul key={data?.name}>
                <li>{data?.name}</li>
              </ul>
            ))}
          </>
        ) : (
          <>
            {heading?.map((data: any, index: number) => (
              <ul key={data?.name}>
                <li>{data?.name}</li>
              </ul>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Test;
