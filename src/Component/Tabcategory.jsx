import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import JobCard from "./JobCard";
import { useEffect, useState } from "react";
import axios from "axios";
function Tabcategory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/jobs`)
      .then((res) => setData(res.data));
  }, []);
  console.log(data);

  return (
    <div className="my-10 flex justify-center flex-col items-center">
      <div className="text-center space-y-2 mb-5">
        <h1 className="text-3xl font-bold">Browser Jobs By Categories</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ad
          similique corporis sint impedit fugiat quos rem iusto perspiciatis
          unde!
        </p>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Web Development</Tab>
            <Tab>Graphics Desgin</Tab>
            <Tab>Digital Marketing</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-4 gap-10 mt-10">
              {data
                .filter((val) => val.category === "web development")
                .map((val, index) => (
                  <JobCard props={val} key={index}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-10 mt-10">
              {data
                .filter((val) => val.category === "graphics design")
                .map((val, index) => (
                  <JobCard props={val} key={index}></JobCard>
                ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-4 gap-10 mt-10">
              {data
                .filter((val) => val.category === "digital marketing")
                .map((val, index) => (
                  <JobCard props={val} key={index}></JobCard>
                ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
}

export default Tabcategory;
