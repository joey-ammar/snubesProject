import { React, useState, useEffect } from "react";
/*
  *****
  *****
  Import Showcase.scss - 
*/
import "./Showcase.scss";
const Showacase = () => {
  /*
  *****
  *****
  Logic Goes Here
*/

  //State Management

  //Company State
  const [company, setCompany] = useState();
  const [companyValue, setCompanyValue] = useState();
  //name State
  const [name, setName] = useState();
  const [nameValue, setNameValue] = useState();
  //Phone State
  const [phone, setPhone] = useState();
  const [phoneValue, setPhoneValue] = useState();
  //Email State
  const [email, setEmail] = useState();
  const [emailValue, setEmailValue] = useState();
  //Hide Inputs
  const [input, setInput] = useState(true);
  // Message State
  const [message, setMessage] = useState(true);
  // SubMessage
  const [subMessage, setSubMessage] = useState(true);
  //InsertLine
  const [line, setLine] = useState(false);
  //Hide Button
  const [btn, setBtn] = useState(true);
  /* Validation State */
  const [emailValidate, setEmailValidate] = useState(false);
  /* Validation State */
  const [companyValidate, setCompanyValidate] = useState(false);

  // OnSubmit
  const onSubmit = (e) => {
    e.preventDefault();
  };

  //onChange Company
  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  //OnClick
  const onClick = (e) => {
    const reCompanyName = /^[a-zA-Z]{2,12}$/;
    const reEmail =
      /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    if (!reCompanyName.test(company)) {
      setCompanyValidate(true);
      return;
    }
    if (!reEmail.test(email)) {
      setEmailValidate(true);
      return;
    }

    if (company === "" || phone === "" || email === "" || name === "") {
      return;
    } else {
      /* setting the New Values */
      setCompanyValue(company);
      setNameValue(name);
      setPhoneValue(phone);
      setEmailValue(email);
      /* Clearing the Inputs */
      setCompany("");
      setName("");
      setPhone("");
      setEmail("");
      /* Logic of hidding Items  */
      setInput(false);
      setMessage(false);
      setSubMessage(false);
      setLine(true);
      setBtn(false);
      /* Reset all options after submission after 5 seconds  */
      setTimeout(() => {
        setInput(!false);
        setMessage(!false);
        setSubMessage(!false);
        setLine(!true);
        setBtn(!false);
      }, 5000);
    }
  };

  return (
    <>
      {/* Showcase Main  */}
      <div className="Showcase">
        <div className="Container">
          {/* Showcase Main / Applying the flex */}
          <div className="Showcase__inside">
            {/* Right Side / form and logic  */}
            <div className="Showcase__inside--left">
              <div className="Showcase__inside--left--box">
                {/* the Top Message */}
                {message ? (
                  <h1>Find inbound call centers for your company</h1>
                ) : (
                  <h1>Thank you for your request!</h1>
                )}
                {/* the sub Message Message */}
                {subMessage ? (
                  <p>
                    Use our AI and Big Data driven call center sourcing solution
                  </p>
                ) : (
                  <p className="paragraphAfterSubmission">
                    You’ve taken the first step. Our experts will get in touch
                    with you soon.
                  </p>
                )}
                {/* Inserting the Line */}
                {line ? <hr></hr> : null}
                <form onSubmit={onSubmit}>
                  {/* Company  */}
                  <div className="Showcase__inside--left--box--form">
                    <label for="company">Company </label>
                    {input ? (
                      <div>
                        <input
                          required
                          value={company}
                          onChange={onChangeCompany}
                          type="text"
                          id="company"
                          placeholder="Company"
                          name="company"
                        />
                        {companyValidate ? (
                          <div className="companyValidate">
                            <small>Please Provide a valid Company Name</small>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      <p>{companyValue}</p>
                    )}
                  </div>
                  {/* Name  */}
                  <div className="Showcase__inside--left--box--form">
                    <label for="Name">Name </label>
                    {input ? (
                      <input
                        required
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text"
                        id="Name"
                        placeholder="Full name"
                        name="Name"
                      />
                    ) : (
                      <p>{nameValue}</p>
                    )}
                  </div>
                  {/* Phone  */}
                  <div className="Showcase__inside--left--box--form">
                    <label for="Phone">Phone </label>
                    {input ? (
                      <input
                        required
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                        type="text"
                        id="Phone"
                        placeholder="+49"
                        name="phone"
                      />
                    ) : (
                      <p>{phoneValue}</p>
                    )}
                  </div>
                  {/* Email  */}
                  <div className="Showcase__inside--left--box--form">
                    <label for="Email">Email </label>
                    {input ? (
                      <div>
                        <input
                          required
                          onChange={(e) => setEmail(e.target.value)}
                          value={email}
                          type="email"
                          id="Email"
                          placeholder="name@mail.com"
                          name="email"
                        />
                        {emailValidate ? (
                          <div className="EmailValidate">
                            <small>Please Provide a valid Email</small>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    ) : (
                      <p>{emailValue}</p>
                    )}
                  </div>
                  {/* Submit  */}
                  <div className="Showcase__inside--left--box--form">
                    <div className="Showcase__inside--left--box--form--submit">
                      {/* OnClick Method */}
                      {btn ? (
                        <button onClick={onClick} type="submit">
                          Get informed
                        </button>
                      ) : null}
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* Right SIDE %s  */}
            <div className="Showcase__inside--right">
              <div>
                <div>
                  <h1>Welcome to Europe’s largest call center database </h1>
                </div>
                <div className="Showcase__inside--right--per">
                  <div className="Showcase__inside--right--per--single">
                    <small>500+</small>
                    <h1>Tenders</h1>
                  </div>
                  <div className="Showcase__inside--right--per--single">
                    <small>200+</small>
                    <h1>Callcenter</h1>
                  </div>
                  <div className="Showcase__inside--right--per--single">
                    <small>375.000</small>
                    <h1>Agents available</h1>
                  </div>
                  <div className="Showcase__inside--right--per--single">
                    <small>85%</small>
                    <h1>Faster sourcing</h1>
                  </div>
                </div>
              </div>
            </div>
            {/* Right Ended %s  */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Showacase;