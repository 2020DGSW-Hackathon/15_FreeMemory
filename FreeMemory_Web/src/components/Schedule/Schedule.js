import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Schedule.scss';
import { observer, inject } from "mobx-react";
import moment from 'moment'
import { AiFillPushpin } from "react-icons/ai";

const Schedule = ({ store }) => {
  const [list, setList] = useState([]);
  const finalList = `📌 ${list}`;
  const [startDate, setStartDate] = useState("");
  const { handleScheduleByDate } = store.ScheduleStore;

  const requestScheduleByDate = (e) => {

    handleScheduleByDate(startDate)
      .then(response => {
        if (response.status === 200) {
          setList(response.data.schedules);
          // setList(response);
        }
      })
      .catch(error => {
        console.log(error);
      })
  }
  const list2 = list.map((data) => {
    const { name } = data;
    return (
      name ?
        <div style={{ fontSize: '18px', marginBottom: '15px', marginLeft: '2rem' }}>
          <AiFillPushpin /> {name}
        </div> : <> 일정이 없습니다 </>
    )
  })

  const onChange = date => {
    const aaa = moment(new Date(date)).format("YYYY-MM-DDT HH:mm");
    const bbb = aaa.split('T');
    const ccc = bbb[0] + bbb[1];
    setStartDate(ccc);
    requestScheduleByDate();
  };

  const todayList = () => {
    var today = new Date();
    console.log(today);
  }

  todayList();
  return (
    <div>
      {/* <div className="header"></div> */}
      <div style={{
        background: "#F1F1F1"
      }}>
        <Calendar showWeekNumbers onChange={onChange} className={['c1', 'c2']}
          style={{ width: '80%' }
          } />
        <div className="todo">
          <div style={{ textAlign: 'center', marginTop: '30px', fontWeight: 'bold', marginBottom: '20px', fontSize: '1.2rem' }}> 예정된 일정 </div>
          <div >{list2}</div>
        </div>
      </div>
    </div>
  )

}

export default inject('store')(observer(Schedule));