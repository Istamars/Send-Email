import React from 'react';
import { Button, Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';
import emailjs from 'emailjs-com';

// import nodemailer from 'nodemailer';

import BadgeList from '../badgeList';

require('dotenv').config();

export default class Component extends React.Component {
  state = {
    value: '',
    emails: []
  };

  handleInputChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.setState(state => {
      const emails = [...state.emails, state.value];
      return {
        emails,
        value: ''
      };
    });
  };

  sendInvitation = () => {
    const emails = this.state.emails;

    let data = {
      service_id: 'default_service',
      template_id: 'template_8UtNZTNa',
      user_id: 'user_AfEFnvG8OpcjBE0gIxNFK',
      template_params: {
        to_email: '',
        from_email: 'istama.siddiq@gmail.com',
        url_link: 'http://localhost:3000/home'
      }
    };

    emails.forEach(emailAddress => {
      data.template_params.to_email = emailAddress;
      console.log(data);
      emailjs.send(
        data.service_id,
        data.template_id,
        data.template_params,
        data.user_id
      );
    });
  };

  // sendInvitation = () => {
  //   console.log(this.state.emails);
  //   this.createTransporter();
  // };

  // createTransporter = () => {
  //   const transporter = nodemailer.createTransport({
  //     service: 'gmail',
  //     auth: {
  //       user: 'istamar.siddiq.tif17@polban.ac.id',
  //       pass: 'randajr56599'
  //     },
  //     streamTransport: true,
  //     newline: 'windows'
  //   });

  //   const mailOptions = {
  //     from: 'istamar.siddiq.tif17@polban.ac.id', // sender address
  //     to: '', // list of receivers
  //     subject: 'GSH Invitation', // Subject line
  //     html:
  //       '<a href="http://localhost:3000">Click here</a> to accept invitation' // plain text body
  //   };

  //   const emails = this.state.emails;

  //   emails.forEach(emailAddress => {
  //     mailOptions.to = emailAddress;
  //     console.log(mailOptions);

  //     transporter
  //       .sendMail(mailOptions)
  //       .then(info => {
  //         console.log(info);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //   });
  // };

  render() {
    return (
      <Row form>
        <Col sm="12" md={{ size: 4, offset: 4 }}>
          <Form onSubmit={this.handleSubmitForm}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="text"
                name="email"
                placeholder="Email"
                value={this.state.value}
                onChange={this.handleInputChange}
              />
            </FormGroup>
            <Button color="primary">Add</Button>
          </Form>

          <BadgeList
            onSendInvitation={this.sendInvitation}
            emails={this.state.emails}
          />
        </Col>
      </Row>
    );
  }
}
