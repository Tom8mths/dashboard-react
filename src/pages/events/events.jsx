import React, { Component } from "react";
import { Container, Wrapper, Section, Time } from "./style";

class Rooms extends Component {
  state = {};

  render() {
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
                <input type="checkbox" />
                <span class="checkmark"></span>
                Lasts all day
              </label>
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
              <input type="submit" value="Create Event"></input>
            </form>
          </Section>
        </Wrapper>
      </Container>
    );
  }
}

export default Rooms;
