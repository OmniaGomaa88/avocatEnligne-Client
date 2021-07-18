import React from "react";
import { Link } from "react-router-dom";
import avocatService from "../../services/Avocat";
import { matchPath } from "react-router";
import { useEffect, useState } from "react";

const AvocatProfile = (props) => {
  const id = props.match.params.id;
  const [error, setError] = useState(false);
  const [avocat, setAvocat] = useState([]);
  const getAvocatById = async (props) => {
    try {
      const avocatData = await avocatService.getById(id);
      setAvocat(avocatData.data.result);
     
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getAvocatById();
  }, []);
  console.log(avocat);
  return (
    <div>
      <p>you are in avocat Profile</p>
    </div>
  );
};

export default AvocatProfile;
