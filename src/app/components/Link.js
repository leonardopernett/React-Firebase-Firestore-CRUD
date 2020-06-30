import React, { useEffect, useState } from "react";
import LinkForm from "./LinkForm";
import { firestore } from "firebase";
import RowLink from "./RowLink";
import { toast } from "react-toastify";

export default function Link() {
  const [links, setLinks] = useState([]);
  const [currentId, setCurrentId] = useState("");

  /*eslint-disable */
  useEffect(() => {
    getLinks();
  }, []);

  const getLinks = () => {
    firestore()
      .collection("links")
      .onSnapshot((querysnapShot) => {
        let docs = [];
        querysnapShot.forEach((doc) => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        setLinks(docs);
      });
  };

  const addOrEditLink = async (link) => {
    await firestore().collection("links").doc().set(link);
    toast.success("task was added");
  };
  const deleteLink = async (id) => {
    await firestore().collection("links").doc(id).delete();
    toast.error("task deleted");
  };
  
  const updateLink = async (id, data) => {
    await firestore().collection("links").doc(id).update(data);
    toast.success("link updated");
    setCurrentId('')
  };
  return (
    <>
      <LinkForm
        addOrEditLink={addOrEditLink}
        currentId={currentId}
        updateLink={updateLink}
      />
      {links.map((link) => (
        <RowLink
          link={link}
          key={link.id}
          setCurrentId={setCurrentId}
          deleteLink={deleteLink}
        />
      ))}
    </>
  );
}
