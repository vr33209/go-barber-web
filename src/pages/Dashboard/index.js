import React, { useState, useMemo, useEffect } from "react";
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO
} from "date-fns";
import pt from "date-fns/locale/pt";
import { utcToZonedTime } from "date-fns-tz";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Container, Time, Scroll } from "./styles";
import api from "~/services/api";

const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];

export default function Dashboard() {
  const [schendule, setSchendule] = useState([]);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    async function loadSchendule() {
      const response = await api.get("schendule", {
        params: { date }
      });
      console.tron.log(response);

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map(hour => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);

        return {
          time: `${hour}:00`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(a =>
            isEqual(parseISO(a.date), compareDate)
          )
        };
      });
      setSchendule(data);
    }
    loadSchendule();
  }, [date]);

  const dateFormated = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  function handlePrevDate() {
    setDate(subDays(date, 1));
  }

  function handleNextDate() {
    setDate(addDays(date, 1));
  }
  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDate}>
          <MdChevronLeft size={36} color="#FFF" />
        </button>
        <strong>{dateFormated}</strong>
        <button type="button" onClick={handleNextDate}>
          <MdChevronRight size={36} color="#FFF" />
        </button>
      </header>
      <Scroll>
        <ul>
          {schendule.map(time => (
            <Time
              key={time.time}
              past={time.past}
              available={!time.appointment}
            >
              <strong>{time.time}</strong>
              <span>
                {time.appointment ? time.appointment.user.name : "Em aberto"}
              </span>
            </Time>
          ))}
        </ul>
      </Scroll>
    </Container>
  );
}
