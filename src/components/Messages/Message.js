import React from "react";
import {useParams, Link, Switch, Route} from "react-router-dom";

export default function Message({match}){
  const {id} = useParams();
  return (
    <h3>Message id: {id}</h3>
  );
}