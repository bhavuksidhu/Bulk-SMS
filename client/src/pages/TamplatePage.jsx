import React, { useState } from "react";
import Input from "../components/Input";

const EmailTemplate = () => {
  const [userData, setUserData] = useState({
    name: "{name}",
    email: "{email}",
    company: "{company}",
    position: "{position}",
    startDate: "{startDate}",
    var1: "{var1}",
    var2: "{var2}",
    var3: "{var3}",
    var4: "{var4}",
    var5: "{var5}",
    var6: "{var6}",
    var7: "{var7}",
    var8: "{var8}",
    var9: "{var9}",
    var10: "{var10}",
  });

  const [subject, setSubject] = useState("");
  const [emailContent, setEmailContent] = useState(
    `Hello <b>{name}</b>,<br/><br/>
    Welcome to <b>{company}</b> as a <b>{position}</b>. Your email is <b>{email}</b>, and your joining date is <b>{startDate}</b>.<br/><br/>
    We look forward to working with you!<br/><br/>
    <b>Here are the additional details:</b><br/>
    Var1: <b>{var1}</b><br/>
    Var2: <b>{var2}</b><br/>
    Var3: <b>{var3}</b><br/>
    Var4: <b>{var4}</b><br/>
    Var5: <b>{var5}</b><br/>
    Var6: <b>{var6}</b><br/>
    Var7: <b>{var7}</b><br/>
    Var8: <b>{var8}</b><br/>
    Var9: <b>{var9}</b><br/>
    Var10: <b>{var10}</b><br/><br/>
    Thanks!`
  );

  // Function to replace all placeholders with user data
  const renderEmail = () => {
    let content = emailContent;
    Object.keys(userData).forEach((key) => {
      content = content.replaceAll(`{${key}}`, userData[key]);
    });
    return content;
  };

  // 🚀 New function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("User Data:", userData);
    console.log("Final Email Content:", renderEmail());
    console.log("Final Email subject:", subject);
    console.log(JSON.parse(localStorage.getItem("credential")))
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };
  return (
    <form className="form" style={{ maxWidth: "90vw" }} onSubmit={handleSubmit}>
      <h2>Customize Email Template</h2> <br />
      <br />
      <Input
        type="text"
        value={userData.name}
        labelText={"Name:"}
        onChange={(e) => setUserData({ ...userData, name: e.target.value })}
      />
      <Input
        type="email"
        labelText={"Email:"}
        value={userData.email}
        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
      />
      <Input
        type="text"
        labelText={"Company:"}
        value={userData.company}
        onChange={(e) => setUserData({ ...userData, company: e.target.value })}
      />
      <Input
        type="text"
        value={userData.position}
        labelText={"Position:"}
        onChange={(e) => setUserData({ ...userData, position: e.target.value })}
      />
      <Input
        labelText={"Start Date:"}
        type="date"
        value={userData.startDate}
        onChange={(e) =>
          setUserData({ ...userData, startDate: e.target.value })
        }
      />
      {/* New Variables */}
      {[...Array(10)].map((_, i) => (
        <Input
          key={i}
          type="text"
          labelText={`Var${i + 1}:`}
          value={userData[`var${i + 1}`]}
          onChange={(e) =>
            setUserData({ ...userData, [`var${i + 1}`]: e.target.value })
          }
        />
      ))}
      <Input
        type="text"
        name="subject"
        onChange={handleSubjectChange}
      />
      <label>Email Content:</label> <br />
      <br />
      <textarea
        className="form-textarea"
        rows="10"
        value={emailContent}
        onChange={(e) => setEmailContent(e.target.value)}
      />
      <br />
      <h3>Preview:</h3> <br />
      <div
        className="form-textarea"
        style={{ maxWidth: "90vw", whiteSpace: "pre-wrap" }}
        dangerouslySetInnerHTML={{ __html: renderEmail() }}
      ></div>
      <br />
      <button type="submit" className="btn btn-block form-btn">
        Next
      </button>
    </form>
  );
};

export default EmailTemplate;
