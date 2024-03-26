import './style.scss'


type InputType = 'text' | 'textarea';

interface FormFieldProps {
  type: InputType;
  placeholder:string;
}


const FormField: React.FC<FormFieldProps> = ({ type,placeholder }) => {
    if (type === 'text') {
        return <input type="text" className='input text-input' placeholder={placeholder}/>;
      } else if (type === 'textarea') {
        return <textarea className='input textarea' placeholder={placeholder} />;
      } else {
        console.log(`Unsupported input type: ${type}`)
      }
}

export default FormField
