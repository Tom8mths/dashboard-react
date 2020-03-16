import React, { Component } from "react";
import { Container, Wrapper, Section } from "./style";

class Rooms extends Component {
  state = {};

  render() {
    return (
      <Container>
        <Wrapper>
          <h1>Events</h1>
          <Section>
            <form>
              <label for="fname">First name:</label>
              <input type="text" id="fname" name="fname" />
              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname" />
              <label for="lname">Last name:</label>
              <input type="text" id="lname" name="lname" />
              <textarea
                id="subject"
                name="subject"
                placeholder="Write something.."
              ></textarea>
            </form>
          </Section>
        </Wrapper>
      </Container>
    );
  }
}

export default Rooms;
