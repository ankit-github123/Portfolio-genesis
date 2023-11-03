import Input from "@components/shared/Input";
import TextAreaWithCharacterLimit from "@components/shared/Textarea";
import * as yup from 'yup';

export const profileForm = [

    {
        name: 'firstname',
        placeholder: 'First Name',
        tag: 'First Name',
        required: false,
        defaultValue: '',
        Accepter: Input,
        propertystyle: 'col-span-6'
    },
    {
        name: 'lastname',
        placeholder: 'Last Name',
        tag: 'Last Name',
        required: false,
        defaultValue: '',
        Accepter: Input,
        propertystyle: 'col-span-6'
    },
    {
        name: 'username',
        placeholder: 'Username',
        tag: 'Username',
        required: false,
        defaultValue: '',
        Accepter: Input,
        propertystyle: 'col-span-12'
    },
    {
        name: 'email',
        placeholder: 'Email Address',
        tag: 'Email',
        required: false,
        defaultValue: '',
        Accepter: Input,
        propertystyle: 'col-span-12',
        disabled: true,
    },
    {
        name: 'description',
        placeholder: 'Type between 300 and 350 characters',
        tag: 'Email',
        required: false,
        defaultValue: '',
        Accepter: TextAreaWithCharacterLimit,
        propertystyle: 'col-span-12',
        minchars: 300,
        maxchars: 350
    },

]

export const myprofileSchema = yup.object().shape({
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    username: yup.string().required('username is required'),
    email: yup.string().email(),
    description: yup.string().required('Description is required'),
});