import React from 'react';
import { Badge, Button } from 'reactstrap';

import style from './index.module.css';

export default class Component extends React.Component {
  handleButtonClick = () => {
    this.props.onSendInvitation();
  };

  render() {
    console.log(this.props.emails.length);
    if (this.props.emails.length) {
      return (
        <React.Fragment>
          {this.props.emails.map(email => {
            let i = 1;
            return (
              <div className={style.badgeSpace}>
                <Badge key={++i} color="light">
                  {email}
                </Badge>
              </div>
            );
          })}
          <br />
          <Button color="success" onClick={this.handleButtonClick}>
            Invite
          </Button>
        </React.Fragment>
      );
    } else {
      return <div>No one added</div>;
    }
  }
}
