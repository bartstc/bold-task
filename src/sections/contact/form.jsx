import { useState } from "react";

import Input from "../../components/formInput";

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
        id="first-name"
        name="firstName"
        placeholder="First Name"
        required
        value={formData.firstName}
        onChange={onChange}
      />
      <Input
        id="last-name"
        name="lastName"
        placeholder="Last Name"
        required
        value={formData.lastName}
        onChange={onChange}
      />
      <Input
        id="phone-number"
        name="phoneNumber"
        placeholder="Phone Number"
        type="tel"
        style="full"
        required
        value={formData.phoneNumber}
        onChange={onChange}
      />
      <Input
        id="description"
        name="description"
        placeholder="What Service are you interested in?"
        style="full"
        required
        value={formData.description}
        onChange={onChange}
      />
      <div>
        <button
          isLoading={isLoading}
          disabled={isLoading}
          className="submit-button"
          type="submit"
        >
          {isLoading ? "Sending..." : "Submit now"}
        </button>
      </div>
    </form>
  );
};

export { ContactForm };
