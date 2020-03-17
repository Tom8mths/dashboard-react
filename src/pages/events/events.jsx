import React, { Component } from "react";
import { Container, Wrapper, Section, Time } from "./style";

class Rooms extends Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      lastAllDay: true
    };

    this.handleLastAllDayChange = this.handleLastAllDayChange.bind(this);
  }

  handleLastAllDayChange(event) {
    this.setState({ lastAllDay: event.target.checked });
  }

  render() {
    let time;

    if (!this.state.lastAllDay) {
      time = (
        <Time>
          <label>Starting time:</label>
          <input
            type="time"
            id="appt"
            name="appt"
            min="00:00"
            max="23:59"
            required
          />
          <label>Finishing time:</label>
          <input
            type="time"
            id="appt"
            name="appt"
            min="00:00"
            max="23:59"
            required
          />
        </Time>
      );
    }

    return (
      <Container>
        <Wrapper>
          <h1>Events</h1>
          <Section>
            <h2>Create Event</h2>
            <form>
              <label>Title</label>
              <input
                className="title"
                type="text"
                id="title"
                name="title"
                placeholder="Title"
              />
              <label>Place</label>
              <input
                className="place"
                type="text"
                id="place"
                name="place"
                placeholder="Place"
              />
              <label>Description</label>
              <textarea
                id="subject"
                name="subject"
                placeholder="Description"
              ></textarea>
              <label>
                <input
                  type="checkbox"
                  name="lastAllDay"
                  checked={this.state.lastAllDay}
                  onChange={this.handleLastAllDayChange}
                />
                <span className="checkmark"></span>
                Lasts all day
              </label>
              {time}
            </form>
            <input type="submit" value="Create Event"></input>
          </Section>
        </Wrapper>
      </Container>
    );
  }
}

export default Rooms;
