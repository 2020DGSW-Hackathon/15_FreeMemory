import React, { useState } from 'react';
import { observer, inject } from "mobx-react";
import Schedule from 'components/Schedule';

const ScheduleContainer = ({ store, history }) => {
  const [startDate, setStartDate] = useState("");
  const [list, setList] = useState("");
  const { handleScheduleByDate } = store.ScheduleStore;
  const requestScheduleByDate = e => {
    e.preventDefault();
    const data = {
      startDate
    };
    handleScheduleByDate(data)
      .then(response => {
        if (response.status === 200) {
          setList(response.name);
          console.log(list);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <>
      <Schedule startDate={startDate} setStartDate={setStartDate} list={list} requestScheduleByDate={requestScheduleByDate} />
    </>
  )
}
export default inject("store")(observer(ScheduleContainer));