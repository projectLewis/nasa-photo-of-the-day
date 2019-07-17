import React, { useState } from "react";
import { Button, Dimmer, Header, Icon } from "semantic-ui-react";

const DimmerComponent = () => {
  const [status, setStatus] = useState(false);

  const handleOpen = () => setStatus(prevStatus => true);
  const handleClose = () => setStatus(prevStatus => false);

  return (
    <div>
      <Button icon="plus" labelPosition="left" onClick={handleOpen} />

      <Dimmer active={status} onClickOutside={handleClose} page>
        <Header as="h2" icon inverted>
          Unnecessary Modal Displayed! Click Anywhere to Make Me Vanish
          <Icon name="close" />
        </Header>
      </Dimmer>
    </div>
  );
};

export default DimmerComponent;
