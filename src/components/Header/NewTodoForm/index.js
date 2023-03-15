import React from 'react';
import { Formik, Field, Form } from 'formik';
import validationSchema from "./validations";
import { UseTodo } from '../../../contexts/TodoContext';


function NewTodoForm() {

  const {addTodo} = UseTodo();

  return (
    <Formik
      initialValues={{
        text:"",
      }}
      onSubmit={(values, bag) => {
        
        addTodo(values.text);

        bag.resetForm();
      }}
      validationSchema= {validationSchema}
    >
        
    
    <Form>
			<Field 
                className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus 
                id="text"
                name="text"
            />
	  </Form>
      
    </Formik>
  )
}

export default NewTodoForm
