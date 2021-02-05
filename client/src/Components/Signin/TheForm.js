import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
//seperated so that the load on the browser is lessened
import styled from 'styled-components'

const TheForm = (props) => {
  const {
    cancel,
    errors,
    submit,
    submitButtonText,
    elements,
    passwordErrors
  } = props;
  
  //event functions to handle the submit and cancel actions in the form
  function handleSubmit(event) {
    event.preventDefault();
    submit();
  }

  function handleCancel(event) {
    event.preventDefault();
    cancel();
  }

//elements = inputs
  return (
    <>
    <ErrorsDisplay errors={errors} passwordErrors={passwordErrors} />
    <Form onSubmit={handleSubmit}>
        {elements()}

    <Button className="mr-1" variant="primary" type="submit">
        {submitButtonText}
    </Button>
    <Button className="mr-1" variant="secondary" onClick={handleCancel}>
        cancel
    </Button>
    </Form>
    </>
  );
};

 //handles and displays all of our errors in the form. reactfragment => wrap jsx, avoid extra nodes if div
 function ErrorsDisplay({ errors, passwordErrors }) {
  let errorsDisplay = null;

  if (errors.length) {
    //if there are errors, map thru + show in list item
    errorsDisplay = (
        //or <> </>
      <React.Fragment>
        <ValidationLabel>Errors:</ValidationLabel>
        <ValidationUl>
          {errors.map((error, i) => (
            <li key={i}>{error}</li>
          ))}
        </ValidationUl>
      </React.Fragment>
    );
  } else if (!passwordErrors) {
    errorsDisplay = (
      <>
      <ValidationLabel>Errors:</ValidationLabel>
      <ValidationUl>{<li>Passwords do not match</li>}</ValidationUl>
      </>

    );
  }
  return errorsDisplay;
}

//styling
const ValidationUl = styled.div
`color: red;
padding: 15px 0 40px 10px;
`;
const ValidationLabel = styled.h2
`color: #0069c0;
font-size: 28px;
`;

export default TheForm 
