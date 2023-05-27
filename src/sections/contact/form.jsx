import { useState } from "react";

import Input from "../../components/formInput";
import Button from "../../components/button";

import "./index.css";
import { useSubmitForm } from "./useSubmitForm";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    description: "",
  });

  const [submit, isLoading] = useSubmitForm();

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await submit(formData);
      resetForm();
      alert(JSON.stringify(formData, null, 2));
    } catch {
      alert("Something went wrong!");
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      description: "",
    });
  };

  return (
    <form className="grid" onSubmit={onSubmit}>
      <Input
        name="firstName"
        placeholder="First Name"
        required
        value={formData.firstName}
        onChange={onChange}
      />
      <Input
        name="lastName"
        placeholder="Last Name"
        required
        value={formData.lastName}
        onChange={onChange}
      />
      <Input
        name="phoneNumber"
        placeholder="Phone Number"
        type="tel"
        style="full"
        required
        value={formData.phoneNumber}
        onChange={onChange}
      />
      <Input
        name="description"
        placeholder="What Service are you interested in?"
        style="full"
        required
        value={formData.description}
        onChange={onChange}
      />
      <div>
        <Button disabled={isLoading} isLoading={isLoading} type="submit">
          Submit now
        </Button>
      </div>
    </form>
  );
};

export { ContactForm };
