import * as Yup from 'yup'
  
  const YupSchema = Yup.object().shape({
    first_name: Yup.string()
      .required('Required'),
    last_name: Yup.string()
      .required('Required'),
    license_number: Yup.string() 
      .required('Required'),

   
    license_expiry: Yup.date()
      // this specifies that the corresponding field cannot be left blank
      .required('Required')
      //this specifies that the date needs to be after today
      .min(new Date(), 'Your license must be current'),
   

      date_of_birth: Yup.date()
      .required('Required')
      .max(new Date(), 'You must already be born'),
  });

  export default YupSchema