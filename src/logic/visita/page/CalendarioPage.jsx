import { useState } from "react";

import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay, addHours } from "date-fns";
import esES from "date-fns/locale/es";
import { CalendarEvent, DialogCalendar } from "../../../components";
import {
  Box,
  Button,
  Typography,
  Modal,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Stack,
  Grid,
} from "@mui/material";

const CalendarioPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [view, setview] = useState(localStorage.getItem("lastView") || "month");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica de manejo de envío del formulario
  };

  const locales = {
    es: esES,
  };

  const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
  });

  const messages = {
    allDay: "Todo el día",
    previous: "<",
    next: ">",
    today: "Hoy",
    month: "Mes",
    week: "Semana",
    day: "Día",
    agenda: "Agenda",
    date: "Fecha",
    time: "Hora",
    event: "Evento",
    noEventsInRange: "No hay eventos en este rango",
    showMore: (total) => `+ Ver más (${total})`,
  };

  const myEventList = [
    {
      title: "TALLER MOODY",
      notes: "Visita",
      start: new Date(),
      end: addHours(new Date(), 3),
      bgColor: "#fafafa",
      user: {
        _id: "001",
        name: "David Moody",
      },
    },
  ];

  const eventStyleGetter = (event, start, end, isSelectd) => {
    // console.log({ event, start, end, isSelectd });

    // console.log(event);

    const style = {
      backgroundColor: "#005a3a",
      borderRadius: "0px",
      opacity: 0.8,
      color: "white",
    };

    return {
      style,
    };
  };

  const onSelect = (event) => {
    // console.log({ click: event });
    handleOpen();
  };

  const onViewchanged = (event) => {
    console.log({ viewsChanaged: event });
    localStorage.setItem("lastView", event);
  };

  return (
    <>
      <div>
        <Calendar
          culture="es"
          defaultView={view}
          localizer={localizer}
          events={myEventList}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          messages={messages}
          eventPropGetter={eventStyleGetter}
          components={{
            event: CalendarEvent,
          }}
          onSelectEvent={onSelect}
          onView={onViewchanged}
        />

        <DialogCalendar open={open} handleClose={handleClose} />
      </div>
    </>
  );
};

export default CalendarioPage;
